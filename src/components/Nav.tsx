import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

// import profile from "../Assets/profile.png";

const NavContainer = styled.div`
  height: 80px;
  width: 98vw;
  padding: 10px;
  margin: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};
  display: flex;
  border-radius: 11px;
`;

const NavLinkContainer = styled.button`
  height: 50px;
  width: 90px;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Nunito";
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 63px;
  background: #454545;
  box-shadow: inset 24px -24px 47px #303030, inset -24px 24px 47px #5a5a5a;
  color: white;
  border: 0;
  z-index: 1;
  :hover {
    border-radius: 63px;
    background: #454545;
    box-shadow: 24px -24px 47px #303030, -24px 24px 47px #5a5a5a;
  }
`;
const Nav: React.FC = () => {
  return (
    <>
      <NavContainer>
        <Logo></Logo>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <NavLinkContainer>Home</NavLinkContainer>
          <NavLinkContainer>Contact</NavLinkContainer>
        </div>
      </NavContainer>
    </>
  );
};

export default Nav;
