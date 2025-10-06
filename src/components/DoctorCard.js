import React from 'react';
import styles from './DoctorCard.module.css';
import Image from 'next/image';

const DoctorCard = ({ image, fullName, speciality, price, buttonText }) => {
  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorImage}>
        <Image src={image} alt={fullName} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.doctorInfo}>
        <h3 className={styles.doctorName}>{fullName}</h3>
        <p className={styles.doctorSpecialty}>{speciality}</p>
        <div className={styles.doctorFooter}>
          <span className={styles.doctorPrice}>{price}</span>
          <button className={styles.bookBtn}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
