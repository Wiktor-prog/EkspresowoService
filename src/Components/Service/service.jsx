import React from "react";

export default function Service() {
  return (
    <section className="service" id="service">
      <div className="max-width"> 
        <div className="service-container">
          <div className="column left">
            <img src= {require('../Assets/logo/3dcup.png')} alt="" />
          </div>
            <div className="column right">
              <div className="description">Jak pracujemy?</div>
                <p>Dla nas każdy ekspres jest tak samo ważny! Po krótkiej rozmowie z Tobą umówimy się na formę 
                  dowozu / odbioru ekspresu - możesz przywieźć ekspres bezpośrednio do serwisu, lub przyjedziemy 
                  go odebrać za dodatkową opłatą. Gdy sprzęt trafi do nas - zrobimy mu kompleksowy 
                  przegląd i diagnozę - aby sprawdzić przyczynę usterki. Następnie poinformujemy Cię o kosztach i 
                  terminie naprawy - jeśli je zaakceptujesz - zabieramy się do pracy! Czasami mamy "na stanie" 
                  ekspresy które możesz wypożyczyć do domu na czas naprawy - 
                  pytaj na miejscu. Na koniec umawiamy się z Tobą na formę odbioru ekspresu - voila!</p>
            </div>
        </div>
      </div>
    </section>
    
  )
}