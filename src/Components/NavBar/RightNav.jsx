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
  font-weight: 700;
  font-size: 20px;
}
.menu_top li a {
  color:  rgb(236, 236, 230);
  text-decoration: none;
}

.nav_Btns:hover {
  color: #FFF;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .menu_top {
    position: fixed;
    transform: ${({ open }) => open ? ' translate(0)' : ' translate(100%)'};
    flex-flow: column nowrap;
    background : linear-gradient(#eb008d,#5e0f3e) ;
    border-top: solid 2px #01c4ff;
    border-top-left-radius: 20px;
    padding-top: 8rem;
    margin: 0;
    right:0;
    height: 100vh;
    width:200px;
    z-index: 1;
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
          href="#home" >Home</a>
        </li>
        
        <li>
          <a 
          className="nav_Btns" 
          href="https://github.com/Wiktor-prog">GitHub</a>
        </li>  
        
        <li>
          <a 
          className="nav_Btns" 
          href="#contact">Contact</a>
        </li>   
    </ul>
    </StyledNav>
  )
}