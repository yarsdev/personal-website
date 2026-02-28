import { useEffect, useState } from 'react';
import './Wedding.css';
import { CalendarIcon, MapPinnedIcon, UserRound } from 'lucide-react';

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
      document.title = 'Я&А';
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
      return () => {
         observer.disconnect();
      };
   }, []);

   const updateFaqData = (index: number) => {
      const newData = [...faqData];
      newData[index].open = !newData[index].open;
      setFaqData(newData);
   };

   return (
      <div className="wedding-page">
         <header className="fade-in w-header">
            <h1 className="font-bold">Ярослав и Анастасия</h1>
            <p>Какой-то текст</p>
         </header>

         <section className="event-details fade-in">
            <div className="flex justify-center mb-6">
               <img className="h-15 w-25" src="../../../decor.svg" alt="" />
               <h2>Детали мероприятия</h2>
               <img
                  className="-scale-x-100 h-15 w-25"
                  src="../../../decor.svg"
                  alt=""
               />
            </div>
            <div className="card hidden">
               <p>
                  <strong>Дата:</strong> 25 сентября 2026
               </p>
               <p>
                  <strong>Время:</strong> 15:00
               </p>
               <p>
                  <strong>Место:</strong> Шатер Зимний сад, г. Пенза, ул.
                  Рахманинова, 3
               </p>
            </div>

            <div className="card">
               <div className="grid grid-cols-2 gap-8">
                  <div className="col-span">
                     <div className="flex">
                        <CalendarIcon className="mr-2" />
                        <h3 className="text-header-details text-xl mb-2 font-bold">
                           Когда и где
                        </h3>
                     </div>
                     <p>
                        <strong>Дата:</strong> 25 сентября 2026
                     </p>
                     <p>
                        <strong>Время:</strong> 15:00
                     </p>
                     <p>
                        <strong>Место:</strong> Шатер Зимний сад, г. Пенза, ул.
                        Рахманинова, 3
                     </p>

                     <img
                        src="https://restoranforyou.ru/assets/images/zimniy-sad/slider-7/slide-2.jpg"
                        className="rounded-2xl"
                     />
                  </div>
                  <div className="col-span">
                     <div>
                        <div className="flex">
                           <MapPinnedIcon className="mr-2" />
                           <h3 className="text-header text-xl mb-2 font-bold">
                              Как добраться
                           </h3>
                        </div>
                        <p>
                           Парковка рядом с главным входом • такси подъезжает
                           прямо к воротам
                        </p>
                     </div>
                     <div>
                        <div className="flex">
                           <UserRound className="mr-2" />
                           <h3 className="text-header text-xl mb-2 font-bold">
                              Дресс код
                           </h3>
                        </div>

                        <p>
                           Парковка рядом с главным входом • такси подъезжает
                           прямо к воротам
                        </p>
                     </div>
                  </div>
               </div>
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
               Фотографии скоро появятся! Мы с нетерпением ждем возможности
               поделиться этими моментами с вами.
            </div>
         </section>

         <section className="fade-in">
            <h2>Контакты и вопросы</h2>
            <div className="faq-card">
               {faqData.map((item, index) => {
                  const faqIconClass = item.open ? 'faq-item open' : 'faq-item';

                  return (
                     <div className={faqIconClass} key={index}>
                        <button
                           className="faq-question"
                           onClick={() => updateFaqData(index)}
                        >
                           <span>{item.question}</span>
                           <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                           <p>{item.answer}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </section>

         <footer className="text-center">
            <p>Будем рады разделить этот день с вами 💚</p>
         </footer>
      </div>
   );
};
