import React from "react";
import styled from "styled-components";
import { Title, FormContainer } from "./assets/atoms/CardsStyles";
import { Formik, Field, Form } from "formik";

const FormWrapper = styled.div`
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
    <FormContainer>
      <Title>
        <span>2</span>
        <h1>Payment Method</h1>
      </Title>
      <FormWrapper>
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
      </FormWrapper>
    </FormContainer>
  );
};

export default Payment;
