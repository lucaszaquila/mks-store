import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { store } from "../store";
import { fetchProducts } from "../store/slice/products";
import {
  addItemToCart,
  decrementItemInCart,
  incrementItemInCart,
  removeItemToCart,
} from "../store/slice/cart";
import Button from "../components/Button";

export default function Home({ products }) {
  const dispatch = useDispatch();

  const {
    products: { data: productsRedux },
    cart,
  } = useSelector((state: any) => {
    return state;
  });

  useEffect(() => {
    store.dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar items={Object.keys(cart.items).length}/>
      <Container>
        {products.products.map((product) => (
          <CardContainer>
            <Card key={product.id} {...product} />
            <Button
              handler={() => {
                dispatch(addItemToCart(product));
              }}
            ></Button>
          </CardContainer>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=id&orderBy=ASC"
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 5 * 60 * 1000,
  };
};

const Container = styled.main`
  min-height: calc(100vh - 7rem);
  padding: 1rem 3rem;
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const CardContainer = styled.div`
  height: fit-content;
  min-height: 350px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
`;