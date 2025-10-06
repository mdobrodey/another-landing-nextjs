import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  image,
  firstWord,
  highlightWord,
  highlightColor,
  description,
  buttonText,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image
          src={image}
          alt={`${firstWord} ${highlightWord}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectBrand}>
          {firstWord}{' '}
          <span style={{ color: { highlightColor } }}>{highlightWord}</span>
        </h3>
        <p className={styles.projectDescription}>{description}</p>
        <a href="#" className={styles.projectLink}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
