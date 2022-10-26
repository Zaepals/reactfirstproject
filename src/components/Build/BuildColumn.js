import React from 'react';

function BuildColumn(props) {
   return (
      <div class="build__column column-build">
         <div class="column-build__img">
            <img src={props.img} alt="Image1" />
         </div>
         <h3 class="column-build__title">{props.title}</h3>
         <p>{props.info}</p>
      </div>
   )
}

export default BuildColumn;