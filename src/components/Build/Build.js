import React from 'react'
import BuildColumn from './BuildColumn';

function Build(props) {

   const buildContent = [
      {
         img: 'img/01.svg',
         title: 'Robust Workflow',
         info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
      },
      {
         img: 'img/02.svg',
         title: 'Robust Workflow',
         info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
      },
      {
         img: 'img/03.svg',
         title: 'Robust Workflow',
         info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
      },
      {
         img: 'img/04.svg',
         title: 'Robust Workflow',
         info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
      },
      {
         img: 'img/05.svg',
         title: 'Robust Workflow',
         info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
      },
      {
         img: 'img/06.svg',
         title: 'Robust Workflow',
         info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
      }
   ]

   const renderItems = () => {
      return (buildContent.map((item, index) => (
         <BuildColumn
            key={index}
            {...item}
         />
      )))
   };

   return (
      <section class="build">
         <div class="container">
            <div class="build__inner">
               <div class="build__top">
                  <h2 class="build__title">{props.title}</h2>
                  <p class="build__info">{props.info}</p>
               </div>
               <div class="build__content">
                  {renderItems()}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Build