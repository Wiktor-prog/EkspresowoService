
import React from "react";

export default function Map(){
  return (
    <section className="map" id="map">
      <div className="description">Jak dojechać?</div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe 
            width="1400" 
            height="400" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Ekspresowo%20Serwis%20plochocinska&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"></iframe>
            <a href="https://fmovies-online.net"></a><br/>
          </div>
        </div>
    </section>
  );
}