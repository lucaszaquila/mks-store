import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

export default function Button({type = 'nav', handler, cartCounter = 0}) {
  return (
    <Container onClick={handler}>
        <FaShoppingCart />
        {cartCounter}
    </Container>
);
}


const Container = styled.button`
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