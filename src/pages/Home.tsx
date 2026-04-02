import { useTranslation } from 'react-i18next';
import photo from '/photo.webp';

export const Home = () => {
   const { t } = useTranslation();
   return (
      <section>
         <div className="mt-40 container mx-auto flex rounded-2xl bg-white shadow-md">
            <div className="basis-1/4 p-9">
               <h1 className="text-7xl">Hello</h1>
               <h1 className="text-7xl font-bold">I'm Yar</h1>
               <p className="mt-6">{t('intro')}</p>
            </div>
            <div className="basis-1/2 flex items-end">
               <img className="h-auto w-max" src={photo} alt="" />
            </div>
            <div className="basis-1/4 p-9 flex-wrap flex gap-1.5 h-max">
               <div className="rounded-2xl border border-border p-2 w-max h-max">
                  <span className="font-bold">DevOps</span>
               </div>
               <div className="rounded-2xl border border-border p-2 w-max h-max">
                  <span className="font-bold">Programming</span>
               </div>
               <div className="rounded-2xl border border-border p-2 w-max h-max">
                  <span className="font-bold">UI/UX Design</span>
               </div>
               <div className="rounded-2xl border border-border p-2 w-max h-max">
                  <span className="font-bold">Software</span>
               </div>
            </div>
         </div>
         <div className="mt-20 container mx-auto flex rounded-2xl bg-white p-9 flex-col shadow-md">
            <div>
               <h3 className="text-3xl font-bold">Contact</h3>
            </div>
            <div className="flex flex-col">
               <div>
                  <p className="my-6">Let’s build something clear and fast.</p>
               </div>
               <div className="uppercase">
                  <a
                     className="bg-[#0e76a8] text-white p-6 rounded-2xl w-max flex shadow-md"
                     target="_blank"
                     href="https://www.linkedin.com/in/yaroslav-maximov-36a8801b3"
                  >
                     Linkedin
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};
