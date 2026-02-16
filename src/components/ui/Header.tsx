import { HomeAlt1Icon } from '@/components/ui/icons/akar-icons-home-alt1';
import { ReceiptIcon } from '@/components/ui/icons/akar-icons-receipt';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { useState, type FunctionComponent } from 'react';
import { NavLink } from 'react-router';

interface HeaderProps {
   onLanguageChange: (value: string) => void;
}

export const Header: FunctionComponent<HeaderProps> = ({
   onLanguageChange,
}: HeaderProps) => {
   const [language, setLanguage] = useState('en');
   const changeLanguage = (language: string) => {
      setLanguage(language);
      onLanguageChange(language);
   };
   return (
      <div className="fixed w-full flex justify-center top-0">
         <div className="shadow-lg flex text-lg items-center justify-center bg-white w-max py-4 px-8 rounded-2xl mt-4">
            <NavLink
               to="/"
               className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
               <div className="mr-4 flex cursor-pointer hover:text-primary">
                  <HomeAlt1Icon className="mr-2" />
                  <span>Home</span>
               </div>
            </NavLink>

            <NavLink
               to="/projects"
               className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
               <div className="mr-4 flex cursor-pointer hover:text-primary">
                  <ReceiptIcon className="mr-2" />
                  <span>Projects</span>
               </div>
            </NavLink>

            <Select onValueChange={changeLanguage} value={language}>
               <SelectTrigger className="text-lg">
                  <SelectValue
                     className="text-secondary"
                     placeholder="Select language"
                  />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem className="text-secondary" value="ru">
                     Russian
                  </SelectItem>
                  <SelectItem className="text-secondary" value="en">
                     English
                  </SelectItem>
                  <SelectItem className="text-secondary" value="de">
                     German
                  </SelectItem>
               </SelectContent>
            </Select>
         </div>
      </div>
   );
};
