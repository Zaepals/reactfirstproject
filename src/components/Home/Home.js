import React from 'react'

function Home(props) {
   return (
      <section class="home-section">
         <div class="container">
            <div class="home-section__inner">
               <h1 class="home-section__title">{props.title} <span>startups</span></h1>
               <p class="home-section__subtitle">{props.subtitle}</p>
               <div class="home-section__btns">
                  <a href="/">{props.firstbtn}</a>
                  <a href="/">{props.secondbtn}</a>
               </div>
               <div class="home-section__video">
                  <img src={props.image} width="896" height="504"
                     alt="Image" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Home