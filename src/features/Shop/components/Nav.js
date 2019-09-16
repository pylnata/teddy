import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 10%;
  color: #fff;
  font-size: 10rem;
  @media screen and (max-height: 400px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 5rem;
  }
  opacity: 0.7;
  padding: 1%;
  a,
  a:active,
  a:visited {
    text-decoration: none;
    color: #fff;
    transition: 0.1s all;
  }
  a:hover {
    font-size: 12rem;
  }
`;

const NavNext = styled(Nav)`
  text-align: right;
`;

export default ({ type }) => {
  const link = (
    <Link to={type === "back" ? "/" : ""}>
      {type === "back" ? <>&larr;</> : <>&rarr;</>}
    </Link>
  );

  if (type === "back") return <Nav>{link}</Nav>;
  else return <NavNext>{link}</NavNext>;
};
