import React from "react";
import { Title } from "./OrderSummary";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";

const Container = styled.div`
  width: 100%;
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;

  label {
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
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
  }
`;

const FormContainer = styled.div`
  padding-top: 1rem;
`;

interface formValues {
  picked: string;
}

const initialValues = {
  picked: "",
};

const ShippingMethod = () => {
  return (
    <Container>
      <Title>
        <span>3</span>
        <h1>Shipping Methods</h1>
      </Title>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <label>
              <Field type="radio" name="picked" value="UPS" />
              UPS
            </label>
            <label>
              <Field type="radio" name="picked" value="FedEx" />
              FedEx
            </label>
            <label>
              <Field type="radio" name="picked" value="DHL" />
              DHL
            </label>
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default ShippingMethod;
