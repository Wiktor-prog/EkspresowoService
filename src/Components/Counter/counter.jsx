import React from "react";
import "../../Scss/build/components/_Counter.scss"

export default function Counter() {
  return (
    <section className="counter">
    <div className="counter-wrp">
      <ul>
        <li>
        <img className="iconSVG" src={require('../Assets/logo/wrench.svg').default} alt="" />
          <p id="number1" className="number">900+</p> 
          <p>Wykonane naprawy</p>
        </li>
        <li>
          <img className="iconSVG" src={require('../Assets/logo/exp.svg').default} alt="" />
          <p id="number2" className="number">4</p>
          <p>Lata doświaczenia</p>
        </li>
        <li>
        <img className="iconSVG" src={require('../Assets/logo/like.svg').default} alt="" />
          <p id="number3" className="number">99%</p>
          <p>zadowolonych klientów</p>
        </li>
      </ul>
    </div>
  </section>
  
  )
}