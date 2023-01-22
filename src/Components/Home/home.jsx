import React from "react";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="logo"><img src={require('../Assets/logo/logoekspresnew.png')} alt="" /></div>
          <div className="text-1">Pogwarancyjny serwis</div>
          <div className="text-2">Przywrócimy Twój ekspres do życia</div>
        </div>
      </div>
    </section>
  )
}