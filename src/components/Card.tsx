import styled from "styled-components";

import { formatPrice } from "../util/format";
import { RiShoppingBag3Line } from "react-icons/Ri";

interface CardProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
}

export default function Card({
  id,
  name,
  photo,
  price,
  description,
}: CardProps) {
  return (
    <Container key={id}>
      <img src={photo} alt={name} />
      <div>
        <span>{name}</span>
        <span>{formatPrice(price)}</span>
      </div>
      <span>{description}</span>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;

  display: grid;
  gap: 0.5rem;

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }

  div {
    min-height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  div span:first-child {
    font-size: 1.3rem;
  }

  div span:last-child {
    background-color: var(--gray-800);
    color: var(--white);
    height: fit-content;
    width: fit-content;
    font-weight: bold;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
  }

  span:last-child {
    color: var(--gray-900);
    font-size: 0.8rem;
  }
`;