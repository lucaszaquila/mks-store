import styled from "styled-components";
import Card from "./Card";

const Container = styled.main`
    height: calc(100vh - 7rem);
    padding: 1rem 3rem;
    max-width: 1300px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`;

export default function Main() {
    return (
        <Container >
            
        </Container>
    )
}