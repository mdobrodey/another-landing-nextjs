'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleMenuClose = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 700);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.heartIcon}>
            <Image src="/clinic.png" width="50" height="50" alt="heart" />
          </div>
        </div>

        <div
          className={`${styles.searchBar} ${
            isSearchFocused ? styles.focused : ''
          }`}
        >
          <input
            type="text"
            placeholder="Поиск"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <button className={styles.searchBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M11 11L14 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.headerInfo}>
          <span className={styles.headerTime} style={{ marginTop: '2px' }}>
            КРУГЛОСУТОЧНО, БЕЗ ВЫХОДНЫХ
          </span>
          <div className={styles.phoneContainer}>
            <button className={styles.phoneBtn}>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.3245 0C5.40616 0 5.40616 2.28882e-08 5.48469 0.0829012C5.56635 0.165803 5.70635 0.474197 5.70635 0.64C5.70635 0.802614 5.80821 1.14468 5.88673 1.46991C6.04692 1.87804 6.21025 2.93982 6.44896 3.51056C6.69081 4.08131 6.77248 4.40972 6.53062 4.73495C6.28877 5.14309 4.76227 6.6959 4.76227 6.6959C4.76227 6.6959 5.16431 7.51216 5.64488 8C6.04692 8.57075 6.69081 9.38701 7.4949 10.0407C8.29898 10.7772 9.18473 11.4277 10.0673 11.8358C10.9531 10.9398 11.6755 10.2033 11.9174 10.0407C12.1592 9.87804 12.1592 9.79514 12.5612 9.96094C12.9633 10.1236 13.5255 10.3691 14.1694 10.4488C14.7316 10.5317 15.3755 10.6114 15.7776 10.6943C16.1796 10.7772 16.1796 10.7772 16.2613 10.9398C16.4215 11.1024 16.5 11.3479 16.5 11.4277C16.5 11.5106 16.5 11.7561 16.5 12.5723C16.5 13.3886 16.5 14.5301 16.5 14.7756C16.5 15.0211 16.5 15.0211 16.4215 15.1837C16.3398 15.3464 16.2613 15.7545 16.2613 15.7545C16.2613 15.8374 15.8592 16 15.6174 16C15.3755 16 14.4898 16 13.9276 15.9171C13.3653 15.8374 11.8388 15.509 11.2735 15.2666C10.7112 15.1008 8.86121 14.4504 6.61229 12.735C4.52042 11.1024 2.99391 8.89916 2.10817 7.10403C1.22242 5.3057 0.741853 3.34795 0.660189 2.36907C0.5 1.3902 0.5 0.982065 0.5 0.736548C0.581665 0.491032 0.820377 0.245516 0.983707 0.165803C1.14389 0.0829012 1.38575 0 1.62446 0C1.86631 0 2.51021 0 3.39596 0C4.27856 0 5.3245 0 5.3245 0Z"
                  fill="white"
                />
              </svg>
            </button>
            <span className={styles.phone}>+7 499 123 45 67</span>
          </div>
          <div className={styles.addressBox}>
            <div className={styles.addressIcon}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path
                  d="M8 0C3.58172 0 0 3.58172 0 8C0 14 8 20 8 20C8 20 16 14 16 8C16 3.58172 12.4183 0 8 0ZM8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11Z"
                  fill="white"
                />
              </svg>
            </div>
            <span>м. ТУЛЬСКАЯ, УЛ. ОРДЖОНИКИДЗЕ, 11</span>
          </div>
        </div>
        <button className={styles.menuIcon} onClick={handleMenuOpen}>
          <svg
            width="14"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H20.4737"
              stroke="#1B1B29"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1 7.81543H20.4737"
              stroke="#1B1B29"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1 14.6318H20.4737"
              stroke="#1B1B29"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <div
          className={`${styles.fullscreenMenu} ${
            isMenuClosing ? styles.closing : styles.open
          }`}
        >
          <button
            className={`${styles.menuIcon} ${styles.open}`}
            onClick={handleMenuClose}
          >
            ×
          </button>

          <div className={styles.menuLeft}>
            <div className={styles.menuLogo}>
              Vetvet
              <br />
              Clinic
            </div>

            <div className={styles.menuContact}>
              <h3>Единый колл-центр</h3>
              <div className={styles.menuLocation}>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path
                    d="M8 0C3.58172 0 0 3.58172 0 8C0 14 8 20 8 20C8 20 16 14 16 8C16 3.58172 12.4183 0 8 0ZM8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11Z"
                    fill="white"
                  />
                </svg>
                <span>м. Тульская, ул. Орджоникидзе, 11</span>
              </div>
              <div className={styles.menuPhone}>
                <span>+7 499 456-78-90</span>
                <svg
                  width="83"
                  height="39"
                  viewBox="0 0 83 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.667969"
                    y="0.582031"
                    width="82.3321"
                    height="38"
                    rx="19"
                    fill="url(#paint0_linear_1959_91098)"
                  ></rect>
                  <path
                    d="M29.5225 25.3525V23.663C30.2557 23.021 30.966 22.3854 31.6533 21.7552C32.3522 21.125 32.9708 20.5013 33.5093 19.8841C34.0591 19.2658 34.4945 18.6659 34.8153 18.0855C35.1475 17.491 35.3136 16.9159 35.3136 16.3592C35.3136 15.8382 35.1761 15.3777 34.9012 14.9778C34.6377 14.5779 34.1966 14.379 33.578 14.379C32.9479 14.379 32.4724 14.5963 32.1517 15.0329C31.8309 15.4686 31.6705 15.996 31.6705 16.6133H29.5397C29.5626 15.6804 29.7574 14.9054 30.1239 14.2882C30.4905 13.658 30.9775 13.1911 31.5846 12.8884C32.1918 12.5738 32.8734 12.416 33.6295 12.416C34.8553 12.416 35.8062 12.7738 36.4822 13.4883C37.1695 14.1909 37.5132 15.1054 37.5132 16.2317C37.5132 16.9343 37.3585 17.6185 37.0492 18.2844C36.7514 18.9513 36.3561 19.5934 35.8635 20.2106C35.3709 20.8289 34.8382 21.4104 34.2653 21.9552C33.6925 22.4881 33.137 22.9842 32.5985 23.4447H37.8053V25.3525H29.5225ZM44.0347 25.3525V22.9907H38.1061V21.1369L43.7425 12.6344H46.2342V20.9737H47.8152V22.9907H46.2342V25.3525H44.0347ZM40.4603 20.9737H44.1721V15.1962L40.4603 20.9737Z"
                    fill="white"
                  ></path>
                  <path
                    d="M21.4226 19.6167C21.4226 17.5434 22.1112 15.6792 23.2068 14.393C23.4914 14.0598 23.0999 13.6025 22.6689 13.764C22.6512 13.7699 22.6336 13.7767 22.6159 13.7835C21.7799 14.1023 21.03 14.5588 20.3851 15.1394C19.7411 15.7208 19.2354 16.3975 18.8812 17.1515C18.5145 17.9327 18.3287 18.7623 18.3287 19.6167C18.3287 20.4701 18.5145 21.2998 18.8812 22.081C19.2343 22.835 19.7411 23.5108 20.3851 24.0931C21.029 24.6737 21.7799 25.1293 22.6159 25.4489C22.6336 25.4557 22.6512 25.4626 22.6689 25.4685C23.0999 25.63 23.4914 25.1735 23.2068 24.8395C22.1112 23.5525 21.4226 21.6891 21.4226 19.6167Z"
                    fill="white"
                  ></path>
                  <path
                    d="M22.4482 9.49234V11.0662C22.4482 11.3569 22.6713 11.5936 22.9473 11.5936H23.6074C23.8823 11.5936 24.1065 11.358 24.1065 11.0662V9.49234C24.1065 9.20157 23.8835 8.96484 23.6074 8.96484H22.9473C22.6713 8.96484 22.4482 9.20049 22.4482 9.49234ZM16.4809 11.7979L16.0146 12.2919C15.8196 12.4973 15.8196 12.8313 16.0146 13.0367L17.0668 14.15C17.2616 14.3554 17.577 14.3554 17.772 14.15L18.2384 13.6561C18.4332 13.4507 18.4332 13.1167 18.2384 12.9113L17.1862 11.7979C16.9912 11.5926 16.6747 11.5926 16.4809 11.7979ZM13.3345 19.1288V19.826C13.3345 20.1167 13.5575 20.3545 13.8336 20.3545H15.3217C15.5966 20.3545 15.8207 20.1178 15.8207 19.826V19.1288C15.8207 18.838 15.5977 18.6013 15.3217 18.6013H13.8336C13.5575 18.6013 13.3345 18.8369 13.3345 19.1288ZM17.0668 24.8036L16.0146 25.917C15.8196 26.1224 15.8196 26.4563 16.0146 26.6617L16.4809 27.1557C16.6758 27.3611 16.9912 27.3611 17.1862 27.1557L18.2384 26.0424C18.4332 25.837 18.4332 25.503 18.2384 25.2976L17.772 24.8036C17.577 24.5993 17.2605 24.5993 17.0668 24.8036ZM22.4482 27.8875V29.4613C22.4482 29.7521 22.6713 29.9888 22.9473 29.9888H23.6074C23.8823 29.9888 24.1065 29.7532 24.1065 29.4613V27.8875C24.1065 27.5967 23.8835 27.36 23.6074 27.36H22.9473C22.6713 27.3611 22.4482 27.5967 22.4482 27.8875Z"
                    fill="white"
                  ></path>
                  <path
                    d="M61.8426 24.3984L66.8569 14.4761V14.3934H61.0157V12.3026H69.5029V14.4229L64.4827 24.3984H61.8426Z"
                    fill="white"
                  ></path>
                  <path
                    d="M57.2456 12.6744L53.7851 25.531H51.8608L55.3213 12.6744H57.2456Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1959_91098"
                      x1="41.834"
                      y1="57.582"
                      x2="70.7514"
                      y2="-5.0713"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0273FF"></stop>
                      <stop offset="1" stopColor="#013FFF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.menuHours}>
                Круглосуточно,
                <br />
                без выходных
              </div>
            </div>

            <div className={styles.menuSocial}>
              <div className={styles.socialIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.785 16.241s.288-.032.436-.193c.136-.148.132-.425.132-.425s-.019-1.297.582-1.488c.593-.189 1.354 1.252 2.161 1.805.611.419 1.075.327 1.075.327l2.159-.03s1.129-.07.594-0.958c-.044-.073-.313-.659-1.608-1.863-1.356-1.26-1.174-1.057.459-3.236.994-1.325 1.391-2.132 1.268-2.478-.118-.331-.847-.244-.847-.244l-2.43.015s-.18-.025-.314.056c-.131.079-.215.263-.215.263s-.385 1.026-.898 1.898c-1.082 1.838-1.515 1.935-1.692 1.821-.411-.267-.308-1.073-.308-1.645 0-1.788.271-2.532-.528-2.725-.266-.064-.461-.106-1.139-.113-.87-.009-1.605.003-2.021.207-.277.136-.491.439-.361.456.161.021.526.099.72.363.251.341.242 1.108.242 1.108s.144 2.104-.336 2.364c-.33.179-.782-.186-1.751-1.852-.497-.845-.873-1.78-.873-1.78s-.072-.177-.201-.272c-.156-.114-.374-.15-.374-.15l-2.31.015s-.347.01-.474.161c-.113.134-.009.411-.009.411s1.813 4.238 3.865 6.375c1.884 1.963 4.025 1.834 4.025 1.834h.972z" />
                </svg>
              </div>
              <div className={styles.socialIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.99 1.27-5.62 3.72-.53.37-.99.55-1.39.53-.46-.02-1.34-.26-2-.48-.8-.27-1.43-.41-1.38-.86.03-.23.28-.47.78-.71 3.03-1.32 5.04-2.19 6.04-2.61 2.88-1.2 3.48-1.41 3.87-1.41.09 0 .29.02.42.13.11.09.14.21.15.3-.01.06.01.24 0 .38z" />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.menuRight}>
            <div className={styles.menuNav}>
              <h3>О нас</h3>
              <a href="#">Все врачи</a>
              <a href="#">Акции</a>
              <a href="#">Вакансии</a>
              <a href="#">Обучение</a>
              <a href="#">Контакты</a>
            </div>

            <div className={styles.menuCards}>
              <div className={styles.menuCard}>
                <div className={styles.cardArrow}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h4>
                    Vetvet
                    <br />
                    <span style={{ color: '#b333f6' }}>Grooming</span>
                  </h4>
                  <p>
                    Салон красоты
                    <br />
                    для питомцев
                  </p>
                </div>
              </div>
              <div className={styles.menuCard}>
                <div className={styles.cardArrow}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h4>
                    Vetvet
                    <br />
                    <span style={{ color: '#0142FF' }}>Adoption</span>
                  </h4>
                  <p>
                    Центр помощи
                    <br />
                    питомцам в беде
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
