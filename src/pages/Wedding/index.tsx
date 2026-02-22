import { useEffect, useState } from 'react';
import './Wedding.css';

const FAQ_DATA = [
   {
      question: 'С кем можно связаться по вопросам?',
      open: false,
      answer: 'Пожалуйста, свяжитесь с Ярославом или Анастасией.',
   },
   {
      question: 'Есть ли парковка?',
      open: false,
      answer: 'Да, рядом с местом проведения есть бесплатная парковка.',
   },
];

export const WeddingPage = () => {
   const [faqData, setFaqData] = useState(FAQ_DATA);
   useEffect(() => {
      document.title = "Я&А";
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
               }
            });
         },
         { threshold: 0.2 }
      );

      document.querySelectorAll('.fade-in, .timeline-item').forEach((el) => {
         observer.observe(el);
      });
      return () => { observer.disconnect() }
   }, []);

   const updateFaqData = (index: number) => {
      const newData = [...faqData];
      newData[index].open = !newData[index].open;
      setFaqData(newData);
   }

   return (
      <div className="wedding-page">
         <header className="fade-in w-header">
            <h1>Ярослав и Анастасия</h1>
            <p>Какой-то текст</p>
         </header>

         <section className="event-details fade-in">
            <h2>Детали мероприятия</h2>
            <div className="card">
               <p>
                  <strong>Дата:</strong> 25 сентября 2026
               </p>
               <p>
                  <strong>Время:</strong> 15:00
               </p>
               <p>
                  <strong>Место:</strong> Шатер Зимний сад, г. Пенза, ул. Рахманинова, 3
               </p>
            </div>
         </section>

         <section className="fade-in">
            <h2>Расписание и таймлайн</h2>
            <div className="timeline">
               <div className="timeline-item">
                  <h4>Церемония</h4>
                  <p>15:00 – Свадебная церемония в саду</p>
               </div>
               <div className="timeline-item">
                  <h4>Банкет</h4>
                  <p>17:00 – Ужин, тосты и празднование</p>
               </div>
               <div className="timeline-item">
                  <h4>Афтепати</h4>
                  <p>21:00 – Музыка, танцы и коктейли</p>
               </div>
            </div>
         </section>

         <section className="fade-in">
            <h2>Фотографии</h2>
            <div className="gallery">
               Фотографии скоро появятся! Мы с нетерпением ждем возможности поделиться этими моментами с вами.
            </div>
         </section>

         <section className="fade-in">
            <h2>Контакты и вопросы</h2>
            <div className="faq-card">
               {faqData.map((item, index) => {
                  const faqIconClass = item.open ? 'faq-item open' : 'faq-item';
                  
                  return <div className={faqIconClass} key={index}>
                     <button className="faq-question" onClick={() => updateFaqData(index)}>
                        <span>{item.question}</span>
                        <span className="faq-icon">+</span>
                     </button>
                     <div className="faq-answer">
                        <p>{item.answer}</p>
                     </div>
                  </div>;
               })}
            </div>
         </section>

         <footer className='text-center'>
            <p>Будем рады разделить этот день с вами 💚</p>
         </footer>
      </div>
   );
};
