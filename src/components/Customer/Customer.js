import React from 'react'
import CustomerColumn from './CustomerColumn'

function Customer(props) {

   const customerContent = [
      {
         text: '— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.',
         footer1: 'Roman Level',
         footer2: 'AppName',
      },
      {
         text: '— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.',
         footer1: 'Diana Rynzhuk',
         footer2: 'AppName',
      },
      {
         text: '— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.',
         footer1: 'Ben Stafford',
         footer2: 'AppName',
      },
   ]

   const renderItems = () => {
      return (customerContent.map((item, idx) => 
         <CustomerColumn 
            key={idx}
            {...item}
         />
      ))
   }

   return (
      <section class="customer">
         <div class="container">
            <div class="customer__inner">
               <div class="customer__top">
                  <h2 class="customer__title">{props.title}</h2>
                  <p class="customer__info">{props.info}</p>
               </div>
               <div class="customer__content">
                  {renderItems()}
               </div>
               <div class="customer__form form-customer">
                  <div class="form-customer__inner">
                     <h3 class="form-customer__title">{props.formTitle}</h3>
                     <input type="text" placeholder={props.inputPlaceholder} class="form-customer__input" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Customer;