import React from "react";
import styled from "styled-components";
import { Title, FormContainer } from "./assets/atoms/CardsStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { radioValues } from "./assets/interfaces/Interfaces";
import * as Yup from "yup";
import { BtnsContainer } from "./assets/atoms/CardsStyles";
import ValidationError from "./assets/ValidationError";

const FormWrapper = styled.div`
  padding-top: 1rem;
`;

const Column = styled.div``;

const initialValues: radioValues = {
  picked: "",
};

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCheckoutData: React.Dispatch<React.SetStateAction<{}>>;
}

const validationSchema = Yup.object().shape({
  picked: Yup.string().required("A radio option is required"),
});

const Payment = ({ setStep, setCheckoutData }: Props) => {
  return (
    <FormContainer>
      <Title>
        <span>2</span>
        <h1>Payment Method</h1>
      </Title>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, isValidating) => {
            if (isValidating) {
              setStep((prev) => prev + 1);
            }
            setCheckoutData((prev) => {
              return {
                ...prev,
                payment: values.picked,
              };
            });
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
            <ErrorMessage name="picked" component={ValidationError} />
            <BtnsContainer>
              <button
                onClick={() => {
                  setStep((prev) => prev - 1);
                }}
              >
                prev
              </button>
              <button type="submit">next</button>
            </BtnsContainer>
          </Form>
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
};

export default Payment;
