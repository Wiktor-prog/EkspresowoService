import React from "react";
import styled from 'styled-components';

const StyledNav = styled.ul`

.menu_top {
  display: flex;
  list-style: none;
  position: relative;
  text-decoration: none;
}
.menu_top li {
  padding: 20px;
  position: relative;
  font-weight: 900;
  font-size: 20px;
}
.menu_top li a {
  color:  #2b2b2b;
  text-decoration: none;
}

.nav_Btns:hover {
  color: #c29e84;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .menu_top {
    position: fixed;
    transform: ${({ open }) => open ? ' translate(0)' : ' translate(100%)'};
    flex-flow: column nowrap;
    background : #f7f7f7;
    border-top: solid 2px #a98970;
    border-top-left-radius: 20px;
    padding-top: 8rem;
    margin: 0;
    right:0;
    font-weight: 700;
    height: 100vh;
    width:250px;
    z-index: 2;
    transition: all 0.5s ease-in-out;
  }
}`;

export default function RightNav({ open }) {
  return(
    <StyledNav open={ open }>
      <ul className="menu_top">
        <li>
          <a 
          className="nav_Btns" 
          href="#about" >O Nas</a>
        </li>
        
        <li>
          <a 
          className="nav_Btns" 
          href="#service">Jak pracujemy</a>
        </li>

        <li>
          <a 
          className="nav_Btns" 
          href="#map">Jak dojechać</a>
        </li>  
        
        <li>
          <a 
          className="nav_Btns" 
          href="#contact">Kontakt</a>
        </li>   
    </ul>
    </StyledNav>
  )
}