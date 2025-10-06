'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './GroomingSlider.module.css';

const groomingSlides = [
  {
    title: 'Vetvet Grooming',
    text: 'Бережный груминг для кошек и собак, одобренный ветеринарами. Записывайте питомца на процедуры с 10:00 до 21:00',
    dogImage: '/dog.png',
  },
  {
    title: 'Vetvet Adoption',
    text: 'Центр помощи питомцам в беде. Мы помогаем найти дом для брошенных животных и даём им второй шанс на счастье',
    dogImage: '/dog2.png',
  },
  {
    title: 'Стационар 24/7',
    text: 'Круглосуточный стационар с профессиональным уходом. Ваш питомец под присмотром опытных врачей в любое время',
    dogImage: '/dog3.png',
  },
];

export default function GroomingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  const changeSlide = (newIndex, direction) => {
    if (isSliding) return;

    setSlideDirection(direction);
    setIsSliding(true);

    setTimeout(() => {
      setCurrentSlide(newIndex);
    }, 500);

    setTimeout(() => {
      setIsSliding(false);
      setSlideDirection('');
    }, 500);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % groomingSlides.length;
    changeSlide(newIndex, 'right');
  };

  const prevSlide = () => {
    const newIndex =
      (currentSlide - 1 + groomingSlides.length) % groomingSlides.length;
    changeSlide(newIndex, 'left');
  };

  return (
    <section className={styles.grooming} data-direction={slideDirection}>
      <div
        className={`${styles.groomingContent} ${
          isSliding ? styles.sliding : ''
        }`}
      >
        <h3>{groomingSlides[currentSlide].title}</h3>
        <p>{groomingSlides[currentSlide].text}</p>
        <button className={styles.moreBtn}>ПОДРОБНЕЕ</button>
      </div>
      <div
        className={`${styles.groomingDog} ${isSliding ? styles.sliding : ''}`}
      >
        <Image src={groomingSlides[currentSlide].dogImage} fill alt="Dog" />
      </div>
      <div className={styles.navigation}>
        <button className={styles.navBtn} onClick={prevSlide}>
          ‹
        </button>
        <button className={styles.navBtn} onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className={styles.dots}>
        {groomingSlides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => {
              if (!isSliding) {
                const direction = index > currentSlide ? 'right' : 'left';
                changeSlide(index, direction);
              }
            }}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </section>
  );
}
