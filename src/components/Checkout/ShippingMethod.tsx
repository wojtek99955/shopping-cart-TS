import React from "react";
import { Title, FormContainer } from "./assets/atoms/CardsStyles";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { radioValues } from "./assets/interfaces/Interfaces";
import { BtnsContainer } from "./assets/atoms/CardsStyles";
import * as Yup from "yup";

const FormWrapper = styled.div`
  padding-top: 1rem;
`;

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

const ShippingMethod = ({ setStep, setCheckoutData }: Props) => {
  return (
    <FormContainer>
      <Title>
        <span>3</span>
        <h1>Shipping Methods</h1>
      </Title>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, isValidating) => {
            if (isValidating) {
              setStep((prev) => prev + 1);
            }
            setCheckoutData((prev) => {
              return {
                ...prev,
                shipping: values.picked,
              };
            });
          }}
          validationSchema={validationSchema}
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
            <BtnsContainer>
              <button onClick={() => setStep((prev) => prev - 1)}>prev</button>
              <button type="submit">next</button>
            </BtnsContainer>
          </Form>
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
};

export default ShippingMethod;
