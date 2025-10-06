'use client';

import styles from './page.module.css';
import DoctorCard from '@/components/DoctorCard';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoctorsSidebar from '@/components/DoctorsSidebar';
import GroomingSlider from '@/components/GroomingSlider';
import VideoSection from '@/components/VideoSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <HeroSection />
        <GroomingSlider />
        <VideoSection />

        <section className={styles.services}>
          <ServiceCard
            title="Вакцинация питомцев"
            label="ПРОФИЛАКТИКА"
            price="от 2 200 ₽"
            description="Прививаем кошек, собак и экзотических питомцев сертифицированными вакцинами — для их защиты от инфекций и выезда за границу"
            buttonText="ЗАПИСАТЬ ПИТОМЦА"
          />
          <ServiceCard
            title="Приём терапевта"
            label="ПОПУЛЯРНОЕ"
            price="от 3 300 ₽"
            description="Запишите питомца на приём к ветеринару или приезжайте в живую очередь к дежурному врачу согласно графику нашей ветеринарной Клиники"
            buttonText="ЗАПИСАТЬ ПИТОМЦА"
          />
          <ServiceCard
            title="ТОП-5 востребованных операций"
            label="ХИРУРГИЯ"
            isTall={true}
            operations={[
              {
                name: 'Удаление опухоли молочных желез',
                price: 'от 22 150 ₽',
              },
              { name: 'Коррекция БЦС', price: '22 000 ₽' },
              { name: 'Извлечение инородного тела', price: '15 000 ₽' },
              {
                name: 'Стабилизация коленного сустава, TPLO',
                price: '35 050 ₽',
              },
              {
                name: 'Удаление грыж межпозвонковых дисков',
                price: '30 070 ₽',
              },
            ]}
            buttonText="ЗАПИСАТЬСЯ К ХИРУРГУ"
          />
          <ServiceCard
            title="Кастрация и стерилизация"
            label="СПЕЦИАЛИЗИРОВАННОЕ"
            price="от 12 000 ₽"
            description="Операция стандартным и лапароскопическим методом для профилактики болезней и коррекции полового поведения"
            linkText="УЗНАТЬ ПОДРОБНЕЕ →"
          />
          <ServiceCard
            title="Санация ротовой полости"
            label="СТОМАТОЛОГИЯ"
            price="от 21 000 ₽"
            description="Профессиональная диагностика и ультразвуковая чистка зубов помогает избежать серьезных заболеваний"
            linkText="УЗНАТЬ ПОДРОБНЕЕ →"
          />
        </section>

        <section className={styles.doctorsSection}>
          <DoctorsSidebar />

          <div className={styles.doctorsGrid}>
            <DoctorCard
              image="/doctor.jpg"
              fullName="Иванова Мария Александровна"
              speciality="Заведующий отделением терапии"
              price="3 500 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Козлова Анна Петровна"
              speciality="Старший ветеринарный врач-терапевт"
              price="3 300 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Павлова Светлана Игоревна"
              speciality="Ветеринарный врач-терапевт, пульмонолог"
              price="4 000 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Белова Екатерина Сергеевна"
              speciality="Ветеринарный врач-терапевт, гастроэнтеролог"
              price="3 800 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Орлова Наталья Владимировна"
              speciality="Ветеринарный врач-терапевт, эндокринолог"
              price="4 200 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Григорьева Ольга Дмитриевна"
              speciality="Ветеринарный врач-терапевт, невролог"
              price="4 500 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Сидорова Юлия Андреевна"
              speciality="Ветеринарный врач-хирург"
              price="5 000 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Васильева Ирина Николаевна"
              speciality="Ветеринарный врач-кардиолог"
              price="4 800 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Макарова Татьяна Евгеньевна"
              speciality="Ветеринарный врач-офтальмолог"
              price="3 600 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Зайцева Алиса Михайловна"
              speciality="Ветеринарный врач-дерматолог"
              price="4 100 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
            <DoctorCard
              image="/doctor.jpg"
              fullName="Королева Вера Павловна"
              speciality="Ветеринарный врач-онколог"
              price="5 500 ₽"
              buttonText="ЗАПИСАТЬСЯ"
            />
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={styles.projectsHeader}>
            <div className={styles.heartIcon}>
              <svg
                width="41"
                height="32"
                viewBox="0 0 41 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.7302 16.8077C27.7169 16.7905 17.4913 3.62763 17.4778 3.61032C14.3005 -0.479596 8.42513 -1.20245 4.35472 1.99578C0.284387 5.19401 -0.439492 11.1023 2.7378 15.1923C2.75106 15.2094 12.9767 28.3723 12.9902 28.3896C16.1674 32.4796 22.0428 33.2025 26.1132 30.0042C30.1836 26.8059 30.9075 20.8976 27.7302 16.8077Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.7798 1.99582C32.7094 -1.20243 26.8341 -0.479658 23.6567 3.61035C23.6449 3.6255 13.4159 16.7926 13.4043 16.8077C10.2269 20.8976 10.951 26.8059 15.0213 30.0042C19.0917 33.2025 24.9671 32.4796 28.1445 28.3896C28.1561 28.3746 38.3851 15.2074 38.3967 15.1923C41.574 11.1023 40.8501 5.19396 36.7798 1.99582Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <h2 className={styles.projectsTitle}>
            Наши проекты для счастливой жизни питомцев
          </h2>
          <div className={styles.projectsGrid}>
            <ProjectCard
              image="/1.png"
              firstWord="Vetvet"
              highlightWord="Grooming"
              highlightColor="#b333f6"
              description="Профессиональная команда грумеров работает в тесной связке с ветеринарами Vetvet"
              buttonText="УЗНАТЬ ПОДРОБНЕЕ →"
            />
            <ProjectCard
              image="/2.png"
              firstWord="Vetvet"
              highlightWord="Adoption"
              highlightColor="#0142FF"
              description="Дарим бездомным животным новые семьи, лечим их и помогаем снова научиться доверять человеку"
              buttonText="УЗНАТЬ ПОДРОБНЕЕ →"
            />
            <ProjectCard
              image="/3.png"
              firstWord="Банк"
              highlightWord="Крови"
              highlightColor="#eb3233"
              description="Ваш питомец может спасти чью-то жизнь! Мы создали банк крови, который помогает нам сохранять жизни ежедневно"
              buttonText="УЗНАТЬ ПОДРОБНЕЕ →"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
