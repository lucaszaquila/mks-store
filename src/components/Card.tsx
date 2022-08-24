import styled from "styled-components";
import { RiShoppingBag3Line } from "react-icons/Ri";

const Container = styled.div`
  display: grid;
`;

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
    <div key={id}>
      <img src={photo} alt={name} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <span>{description}</span>
      <button>
        <RiShoppingBag3Line />
      </button>
    </div>
  );
}
