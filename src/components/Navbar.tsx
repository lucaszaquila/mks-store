import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Nav = styled.nav`
  height: 3rem;
  background-color: var(--blue-500);
  color: #fff;
  padding: 2rem 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  a {
    font-size: 2rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-size: 1rem;
      font-weight: normal;
    }
  }
`;

const Button = styled.button`
  width: fit-content;
  background-color: var(--white);
  color: var(--black);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  justify-self: end;

  svg {
    margin-right: 0.5rem;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <a href="">
        MKS
        <span>Sistemas</span>
      </a>
      <Button>
        <FaShoppingCart />
        0
      </Button>
    </Nav>
  );
}