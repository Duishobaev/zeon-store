import React, { useState } from "react";
import styled from "styled-components";
import LeftNav from "./LeftNav";

const StyledBurger = styled.div`
  width: 2.3rem;
  height: 2rem;
  top: 15px;
  left: 20px;
  z-index: 99;
  display: none;

  @media (max-width: 320px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    border: solid 1px #ccc;
    align-items: center;
  }

  div {
    width: 1.9rem;
    height: 0.2rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="burgFlex">
      <div>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </StyledBurger>
        <LeftNav open={open} />
      </div>
    </div>
  );
};

export default Burger;
