import React from "react";
import styled from "styled-components";
import Theam from "../theam";
// import profile from "../Assets/profile.png";

const NavContainer = styled.div<{ theam: any }>`
  height: 80px;
  width: 98vw;
  padding: 10px;
  margin: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theam.tertiaryColor};
  color: ${(props) => props.theam.secondaryColor};
  display: flex;
  border-radius: 11px;
`;

const NavLinkContainer = styled.div<{ theam: any }>`
  height: 50px;
  width: 90px;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Nunito";
  font-weight: 700;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${(props) => props.theam.primaryColor};
    backdrop-filter: 5px;
  }
`;
const ProfileImg = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  /* background-image: url(../Assets/profile.png); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Nav: React.FC = () => {
  return (
    <>
      <NavContainer theam={Theam}>
        {/* <ProfileImg /> */}
        <div style={{ display: "flex", gap: "40px" }}>
          <NavLinkContainer theam={Theam}>Home</NavLinkContainer>
          <NavLinkContainer theam={Theam}>About</NavLinkContainer>
          <NavLinkContainer theam={Theam}>Contact</NavLinkContainer>
        </div>
      </NavContainer>
    </>
  );
};

export default Nav;
