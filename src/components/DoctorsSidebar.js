'use client';

import { useState } from 'react';
import styles from './DoctorsSidebar.module.css';

const DoctorsSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const specialties = [
    'Анестезиология',
    'Визуальная диагностика',
    'Гастроэнтерология',
    'Гематология',
    'Дерматология',
    'Диетология',
    'Зоопсихология',
    'Инфекционное отделение',
    'Кардиология',
    'Неврология',
    'Нефрология',
    'Онкология',
    'Ортопедия',
    'Офтальмология',
    'Терапия',
    'Хирургия',
    'Экзотология',
    'Эндокринология',
  ];

  return (
    <div className={styles.doctorsSidebar}>
      <h2 className={styles.doctorsTitle}>Врачи Vetvet</h2>

      {/* Dropdown для мобильных и планшетов */}
      <div className={styles.specialtiesDropdown}>
        <button
          className={`${styles.dropdownToggle} ${
            isDropdownOpen ? styles.open : ''
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Специализации врачей
        </button>
        <div
          className={`${styles.specialtiesDropdownList} ${
            isDropdownOpen ? styles.open : ''
          }`}
        >
          <div className={styles.specialties}>
            {specialties.map((el) => {
              return (
                <div className={styles.specialtyItem} key={el}>
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Обычный список для десктопа */}
      <div className={styles.specialties}>
        {specialties.map((el) => {
          return (
            <div className={styles.specialtyItem} key={el}>
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsSidebar;
