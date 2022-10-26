import React from 'react';

import classes from './Header.module.css';

function Header(props) {
   return (
      <header>
         <div className="container">
            <div className={classes.header__inner}>
               <div className={classes.header__logo}>
                  <img src={props.logo} width="32" height="32" alt="Logo" />
               </div>
               <div className={classes.header__content}>
                  <div className={classes.header__doc}>{props.doc}</div>
                  <div className={classes.header__btn}>
                     <a href="/">{props.btn}</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header