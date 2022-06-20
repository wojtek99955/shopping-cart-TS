import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import { Formik, Field, ErrorMessage } from "formik";
import { radioValues } from "./Checkout/assets/interfaces/Interfaces";
import { Products } from "../ContextProvider";
import { device } from "../assets/media";
import { IoIosArrowDropdownCircle } from "react-icons/io";
interface IconProps {
  open: boolean;
}
const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    display: block;
  }

  h3 {
    margin-bottom: 2rem;
  }
`;
const initialValues: radioValues = {
  picked: "",
};

const Row = styled.div`
  margin-bottom: 0.5rem;
`;
const StyledRadio = styled(Field)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 1rem;
  height: 1rem;
  border: 2px solid grey;
  border-radius: 50%;
  position: relative;
  margin-right: 0.5rem;
  display: inline-block;
  vertical-align: middle;

  &:hover {
    background-color: #ccfff5;
  }

  &:checked::after {
    content: "";
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #008970;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Wrapper = styled.div`
  width: 13rem;
  border: 1px solid grey;
  padding: 0.5rem;

  @media ${device.laptop} {
    border: none;
  }
`;

const CategoryContainer = styled.div`
  padding-top: 1.5rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    vertical-align: middle;
    margin: 0;
  }
`;
const ArrowIcon = styled(IoIosArrowDropdownCircle)<IconProps>`
  font-size: 2rem;
  color: #00d0a9;
  cursor: pointer;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : null)};
  transition: 250ms ease-in;
`;

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

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
