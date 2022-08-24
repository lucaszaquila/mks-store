import { GetStaticProps } from "next";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { store } from "../store";
import { fetchProducts } from "../store/slice/products";

export default function Home({products}) {
  const productsRedux = useSelector((state:any) => {
    return state.products.data;
  });

  useEffect(()=>{
    store.dispatch(fetchProducts());
  },[])

  return (
    <>
      <Navbar />
      {productsRedux.length}
      {products.products.length}
      <Main />
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
