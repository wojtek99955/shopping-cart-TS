import React from "react";
import styled from "styled-components";
import { Title } from "./OrderSummary";
import { Formik, Field, Form } from "formik";

const Container = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
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

const Column = styled.div``;

interface formValues {
  picked: string;
}

const initialValues: formValues = {
  picked: "",
};

const Payment = () => {
  return (
    <Container>
      <Title>
        <span>2</span>
        <h1>Payment Method</h1>
      </Title>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Column>
              <label>
                <Field type="radio" name="picked" value="Cash On Delivery" />
                Cash On Delivery
              </label>
            </Column>
            <Column>
              <label>
                <Field type="radio" name="picked" value="Bank Transfer" />
                Bank Transfer
              </label>
            </Column>
            <Column>
              <label>
                <Field type="radio" name="picked" value="Check" />
                Check
              </label>
            </Column>
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Payment;
