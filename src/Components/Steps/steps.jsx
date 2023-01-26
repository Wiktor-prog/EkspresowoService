import React from "react";

export default function StepRow() {
  return (
    <section className="step">
    <div className="steps-row">
      
      <ul>
        <li className="color-square">
          <p className="number">Krok 1</p>
          <img className="iconSVG" src={require('../Assets/logo/phonecolor.svg').default} alt="" />
          <p>Zadzwoń do nas!<br/>i zgłoś naprawę<br/>
          
          </p>
        </li>
        <li className="color-square">
          <p className="number">Krok 2</p>
          <img className="iconSVG" src={require('../Assets/logo/box.svg').default} alt="" />
          <p>Umów się na formę dostawy <br/>lub odbioru ekspresu
          </p> 
        </li>
        <li className="color-square">
          <p className="number">Krok 3</p>
          <img className="iconSVG" src={require('../Assets/logo/wrench.svg').default} alt="" />
          <p>Sprawdzamy sprzęt,<br/> informujemy o kosztach i terminach
          </p>
        </li>
        <li className="color-square">
          <p className="number">Krok 4</p>
          <img className="iconSVG" src={require('../Assets/logo/coffemachine.svg').default} alt="" />
          <p>Umów się na formę odbioru<br/> lub dostawy naprawionego ekspresu
          </p>
        </li>
      </ul>
    </div>    
  </section>
  )
}