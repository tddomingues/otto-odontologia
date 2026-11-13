"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

export type Testimonial = {
  quote: string;
  author: string;
  authorNote: string;
  avatar: string;
};

type Props = {
  testimonials: Testimonial[];
};

/* Carrossel acessível: sem rolagem automática, rolável pelo toque,
   pelo teclado (setas, com a lista focada) e por botões. */
export default function TestimonialCarousel({ testimonials }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  // Atualiza quais botões estão disponíveis conforme a posição da rolagem
  function updateButtons() {
    const list = listRef.current;
    if (!list) return;
    setCanGoBack(list.scrollLeft > 4);
    setCanGoForward(list.scrollLeft + list.clientWidth < list.scrollWidth - 4);
  }

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const list = listRef.current;
    const card = list?.querySelector("li");
    if (!list || !card) return;

    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    list.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className={styles.carousel}>
      <ul
        ref={listRef}
        className={styles.list}
        onScroll={updateButtons}
        tabIndex={0}
        aria-label="Depoimentos fictícios. Use as setas do teclado para rolar."
      >
        {testimonials.map((testimonial) => (
          <li key={testimonial.author} className={styles.slide}>
            <figure className={styles.card}>
              <p className={styles.badge}>
                Depoimento fictício · exemplo de portfólio
              </p>
              <blockquote className={styles.quote}>
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption className={styles.caption}>
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className={styles.avatar}
                />
                <span>
                  <span className={styles.author}>{testimonial.author}</span>
                  <br />
                  {testimonial.authorNote} · ilustração
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
          onClick={() => scrollByCard(-1)}
          disabled={!canGoBack}
          aria-label="Depoimento anterior"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          className={styles.control}
          onClick={() => scrollByCard(1)}
          disabled={!canGoForward}
          aria-label="Próximo depoimento"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
