import React from 'react'

function CustomerColumn(props) {
   return (
      <div class="customer__column column-customer">
         <div class="column-customer__content">
            <p class="column-customer__text">{props.text}</p>
            <div class="column-customer__footer">{props.footer1}<i>/</i> <span>{props.footer2}</span></div>
         </div>
      </div>
   )
}

export default CustomerColumn;