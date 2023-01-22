import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from "../NavBar/RightNav"

const StyledBurgerMenu = styled.div`
  width: 1rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  padding:20px;
  right: 20px;
  z-index: 999;
  display: none;
  
@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}

div {
  width: 2rem;
  height: 0.2rem;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s linear;
  transform-origin: 1px;
  
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: ${({ open }) => open ? ' translateX(100%)' : ' translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}`;

export default function BurgerMenu() {  
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurgerMenu>
      <RightNav open={open} setOpen={setOpen}/>
    </>
  )
}

