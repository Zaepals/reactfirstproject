import React from 'react'
import WorkflowList from './WorkflowList'

function Workflow(props){

   const contentBottom = [
      {
         suptitle: 'LIGHTNING FAST WORKFLOW',
         title: 'Data-driven insights',
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         img: 'img/features-split-image-01.d9cb99ce.png',
      },
      {
         suptitle: 'LIGHTNING FAST WORKFLOW',
         title: 'Data-driven insights',
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         img: 'img/features-split-image-01.d9cb99ce.png',
      },
      {
         suptitle: 'LIGHTNING FAST WORKFLOW',
         title: 'Data-driven insights',
         text: 'Lorem ipsum dolor sit amet, consectetur ',
         img: 'img/features-split-image-01.d9cb99ce.png',
      },
   ]

   const renderList = () => {
      return (contentBottom.map((item, idx) =>
         <WorkflowList 
            key={idx}
            {...item}
         />
      ))
   }

   return (
      <section class="workflow">
         <div class="container">
            <div class="workflow__inner">
               <div class="workflow__top">
                  <h2 class="workflow__title">{props.title}</h2>
                  <p class="workflow__info">{props.info}</p>
               </div>
               <div class="workflow__bottom">
                  {renderList()}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Workflow