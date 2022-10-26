import React from 'react'

function Footer(props) {
   return (
      <footer class="footer">
         <div class="container">
            <div class="footer__inner">
               <div class="footer__top">
                  <div class="footer__logo">
                     <img src={props.img} alt="footerImage" />
                  </div>
                  <div class="footer__socials">
                     <a href="https://www.google.com/"><i class="fa-brands fa-facebook-f"></i></a>
                     <a href="https://www.google.com/"><i class="fa-brands fa-twitter"></i></a>
                     <a href="https://www.google.com/"><i class="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div class="footer__bottom">
                  <div class="footer__copy">Made by <span>Cruip</span>. All right reserved</div>
                  <nav class="footer__menu">
                     <ul>
                        <li>Contact</li>
                        <li>About us</li>
                        <li>FAQ's</li>
                        <li>Support</li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;