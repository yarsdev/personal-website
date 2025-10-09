import type { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
   const year = new Date().getFullYear();
   return (
      <div className='mt-20'>
         <hr />
         <div className="container m-auto my-8">
            <span>© {year} All rights reserved</span>
         </div>
      </div>
   );
};
