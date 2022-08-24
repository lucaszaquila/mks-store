import styled from "styled-components";

const Container = styled.footer`
  background-color: var(--gray-300);
  height: 3rem;
  line-height: 3rem;
  text-align: center;
`;

export default function Footer() {
  return <Container>MKS sistemas © Todos os direitos reservados</Container>;
}
