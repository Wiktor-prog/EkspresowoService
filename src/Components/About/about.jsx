import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div class="max-width">
        <div className="about-content">
        <div className="column left">
              <img src= {require('../Assets/logo/Coffee_Lover_Isometric.svg').default} alt="" />
            </div>
          <div className="column right">
            <div className="description">Krótko o nas</div>
              <p>Nasza firma powstała  w 2018 roku z pasji do kawy, miłości do majsterkowania, wiary w to, 
              że lepiej naprawić niż wyrzucić i... ponad 35 lat doświadczenia w naprawie różnych sprzętów AGD. 
              Sercem serwisu jest Wiesław Ziejewski - nasz "Adam Słodowy" - pasjonat majsterkowania, 
              naprawiania, szukający rozwiązań. Dla niego nie ma "nie da się" i "nie działa i tyle" - 
              zawsze znajdzie sposób aby coś naprawić i dać mu drugie życie! 
              W serwisie zajmujemy się naprawą pogwarancyjną ekspresów znanych i niszowych marek 
              - wierzymy, że lepiej naprawić niż kupować nowe - dzięki temu dbamy o nasz domowy budżet, 
              o środowisko ale też dajemy przykład następnym pokoleniom.</p>
          </div>
        </div>
        <div className="logoBaner">
          <img src= {require('../Assets/logo/banernew.png')} alt="" />
        </div>
      </div>
    </section>
  );
}