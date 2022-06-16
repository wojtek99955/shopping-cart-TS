import React from "react";
import { Title, FormContainer } from "./assets/atoms/CardsStyles";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";

const FormWrapper = styled.div`
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
    <FormContainer>
      <Title>
        <span>3</span>
        <h1>Shipping Methods</h1>
      </Title>
      <FormWrapper>
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
      </FormWrapper>
    </FormContainer>
  );
};

export default ShippingMethod;
