import React from "react"; 

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-row">
        <div className="contact-container">
        <ul>
          <li>
            <img className="ContactIconSVG" src={require('../Assets/logo/phonecolor.svg').default} alt="" />
            <p className="hours">Telefon</p>
            <span className="phone"><br/>
            <a href="tel:503083602" rel="noreferrer" target="_blank">503-083-602</a><br/>
            <a href="tel:505333789" rel="noreferrer" target="_blank">505-333-789</a>
            </span>
          </li>
          <li>
          <img className="ContactIconSVG" src={require('../Assets/logo/location.svg').default} alt="" />
            <p className="hours">Lokalizacja</p>
            <p>Ul. <span className="time">Płochocińska 35</span><br/>
              03-044 Warszawa</p>
          </li>
          <li>
          <img className="ContactIconSVG" src={require('../Assets/logo/clock.svg').default} alt="" />
            <p className="hours">Godziny otwarcia</p>
            <p>Pon-Pt <span className="time">9:00-17:00</span><br/>
               Sobota <span className="time">9:00-15:00</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div className="info">
    Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
    </div>
    
  </section>
  )
}