import React from 'react'

function WorkflowList(props) {
   return (
      <div class="workflow__content">
         <div class="workflow__column column-workflow">
            <div class="column-workflow__suptitle">{props.suptitle}</div>
            <h3 class="column-workflow__title">{props.title}</h3>
            <p class="column-workflow__text">{props.text}</p>
         </div>
         <div class="workflow__column column-workflow">
            <img src={props.img} alt="Image1" />
         </div>
      </div>
   )
}

export default WorkflowList;