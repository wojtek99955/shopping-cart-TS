import React, { useState } from "react";
import styled from "styled-components";
import {
  Title,
  FormContainer,
  RadioInput,
  StyledRadioLabel,
} from "./assets/atoms/CardsStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { radioValues } from "./assets/interfaces/Interfaces";
import * as Yup from "yup";
import { BtnsContainer } from "./assets/atoms/CardsStyles";
import ValidationError from "./assets/ValidationError";
import { CheckoutDataTypes } from "./FormStep/FormStep";

const FormWrapper = styled.div`
  padding-top: 1rem;
`;

const Column = styled.div``;

const StyledField = styled(Field)`
  cursor: pointer;
`;

const CardContainer = styled.div`
  max-width: 20rem;
`;

const TextField = styled(Field)`
  border-radius: 0;
  width: 50%;
  width: 100%;
  border: 1px solid #d0d0d0;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 20px;
`;

const ExpirationDate = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface initialValuesTypes {
  picked: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
}

const initialValues: initialValuesTypes = {
  picked: "",
  cardNumber: "",
  expirationMonth: "",
  expirationYear: "",
  cvc: "",
};

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCheckoutData: React.Dispatch<
    React.SetStateAction<CheckoutDataTypes | undefined>
  >;
  checkoutData: CheckoutDataTypes | undefined;
}

const validationSchema = Yup.object().shape({
  picked: Yup.string().required("A radio option is required"),
  cardNumber: Yup.string().required("required"),
  expirationMonth: Yup.string().required("required"),
  expirationYear: Yup.string().required("required"),
});

const Payment = ({ setStep, setCheckoutData, checkoutData }: Props) => {
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
          {({ handleChange, touched, values }) => (
            <Form>
              <Column>
                <StyledRadioLabel>
                  <RadioInput
                    type="radio"
                    name="picked"
                    value="Cash On Delivery"
                  />
                  Cash On Delivery
                </StyledRadioLabel>
              </Column>
              <Column>
                <StyledRadioLabel>
                  <RadioInput type="radio" name="picked" value="Card" />
                  Card
                </StyledRadioLabel>
              </Column>
              {values.picked === "Card" ? (
                <CardContainer>
                  <Column>
                    <TextField
                      type="text"
                      name="cardNumber"
                      placeholder="card number"
                    />
                  </Column>
                  <ExpirationDate>
                    <TextField
                      type="text"
                      name="expirationMonth"
                      placeholder="expiration month"
                    />
                    <TextField
                      type="text"
                      name="expirationYear"
                      placeholder="expiration year"
                    />
                  </ExpirationDate>
                </CardContainer>
              ) : null}
              <Column>
                <StyledRadioLabel>
                  <RadioInput type="radio" name="picked" value="Check" />
                  Check
                </StyledRadioLabel>
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
              <h2>ff</h2>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
};

export default Payment;
