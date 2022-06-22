import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../ContextProvider";
import { Formik, Field, ErrorMessage } from "formik";
import { radioValues } from "../Checkout/assets/interfaces/Interfaces";
import { Products } from "../../ContextProvider";
import { device } from "../../assets/media";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  Container,
  Row,
  StyledRadio,
  Wrapper,
  CategoryContainer,
  ArrowIcon,
  Title,
} from "./FilterStyles";

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: radioValues = {
  picked: "",
};

const Filter = ({ loading, setLoading }: Props) => {
  const [category, setCategory] = useState<null | string>(null);
  console.log(category + "category");

  const ctx = useContext(Context);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://fakestoreapi.com/products/${category}`
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
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  const [showCategories, setShowCategories] = useState(false);
  const handleShowCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <Container>
      <Wrapper>
        <Title onClick={handleShowCategories}>
          <h3>Categories</h3>
          <ArrowIcon open={showCategories} />
        </Title>
        {showCategories ? (
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              setCategory(values.picked.toString());
            }}
          >
            {({ submitForm, handleChange }) => (
              <CategoryContainer>
                <Row>
                  <label>
                    <StyledRadio
                      type="radio"
                      name="picked"
                      value=""
                      onChange={(e: any) => {
                        submitForm();
                        handleChange(e);
                      }}
                    />
                    All
                  </label>
                </Row>
                <Row>
                  <label>
                    <StyledRadio
                      type="radio"
                      name="picked"
                      value="category/electronics"
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
                    <StyledRadio
                      type="radio"
                      name="picked"
                      value="category/women's%20clothing"
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
                    <StyledRadio
                      type="radio"
                      name="picked"
                      value="category/men's%20clothing"
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
                    <StyledRadio
                      type="radio"
                      name="picked"
                      value="category/jewelery"
                      onChange={(e: any) => {
                        submitForm();
                        handleChange(e);
                      }}
                    />
                    Jewelery
                  </label>
                </Row>
              </CategoryContainer>
            )}
          </Formik>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Filter;
