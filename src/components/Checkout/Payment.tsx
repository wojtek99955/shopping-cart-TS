import React from "react";
import styled from "styled-components";
import { Title, FormContainer } from "./assets/atoms/CardsStyles";
import { Formik, Field, Form } from "formik";
import { radioValues } from "./assets/interfaces/Interfaces";
import * as Yup from "yup";
import { BtnsContainer } from "./assets/atoms/CardsStyles";

const FormWrapper = styled.div`
  padding-top: 1rem;
`;

const Column = styled.div``;

const initialValues: radioValues = {
  picked: "",
};

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const validationSchema = Yup.object().shape({
  picked: Yup.string().required("A radio option is required"),
});

const Payment = ({ step, setStep }: Props) => {
  console.log(step);
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
