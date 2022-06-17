import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import { Formik, Field, ErrorMessage } from "formik";
import { radioValues } from "./Checkout/assets/interfaces/Interfaces";
import { Products } from "../ContextProvider";

const Container = styled.div`
  padding-top: 5rem;
`;
const initialValues: radioValues = {
  picked: "",
};

const Row = styled.div``;

const Filter = () => {
  const [category, setCategory] = useState<null | string>(null);
  console.log(category + "category");

  const ctx = useContext(Context);

  const fetchData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const products = await response.json();
    ctx?.setProductsList(
      products.map((item: Products) => {
        return {
          ...item,
          amount: 0,
          liked: false,
        };
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <Container>
      <h3>Categories</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setCategory(values.picked.toString());
        }}
      >
        {({ submitForm, handleChange }) => (
          <>
            <Row>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="electronics"
                  onChange={(e: any) => {
                    submitForm();
                    handleChange(e);
                  }}
                />
                Electronics
              </label>
            </Row>
            <Row>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="women's%20clothing"
                  onChange={(e: any) => {
                    submitForm();
                    handleChange(e);
                  }}
                />
                Women's Clothing
              </label>
            </Row>
            <Row>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="men's%20clothing"
                  onChange={(e: any) => {
                    submitForm();
                    handleChange(e);
                  }}
                />
                Men's Clothing
              </label>
            </Row>
            <Row>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="jewelery"
                  onChange={(e: any) => {
                    submitForm();
                    handleChange(e);
                  }}
                />
                Jewelery
              </label>
            </Row>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Filter;
