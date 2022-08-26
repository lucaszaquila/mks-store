import styled from "styled-components";
import Button from "./Button";

export default function Navbar({items}) {
  return (
    <Container>
      <a href="">
        MKS
        <span>Sistemas</span>
      </a>
      <Button 
      handler={()=>{}} 
      cartCounter={items}
      />
    </Container>
  );
}

const Container = styled.nav`
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