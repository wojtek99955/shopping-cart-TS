import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Title } from "./assets/atoms/CardsStyles";
import { FormValues } from "./assets/interfaces/Interfaces";
import * as Yup from "yup";

const Container = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #b4b4b4;
`;

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid #b4b4b4;
  margin: 1.5rem 0;
`;

const Checkbox = styled(Field)`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 2px solid grey;
  border-radius: 50%;
  vertical-align: middle;
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

const StyledField = styled(Field)`
  display: block;
  width: 100%;
  height: 2.5rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #d0d0d0;

  &::placeholder {
    color: #b4b4b4;
  }
`;

const FormContainer = styled.div`
  padding-top: 1rem;
`;

const CheckoutForm = () => {
  const initialValues: FormValues = {
    email: "",
    newsletter: false,
    firstName: "",
    lastName: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    address: Yup.string().required("required"),
    zip: Yup.number().required("required"),
    city: Yup.string().required("required"),
    country: Yup.string().required("required"),
  });

  return (
    <Container>
      <Title>
        <span>1</span> <h1>Shipping Address</h1>
      </Title>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <StyledField id="email" name="email" placeholder="Email *" />
            <CheckboxLabel>
              <Checkbox id="newsletter" name="newsletter" type="checkbox" />
              Subscribe to Newsletter
            </CheckboxLabel>
            <ErrorMessage name="email" />
            <Divider />
            <StyledField
              id="firstName"
              name="firstName"
              placeholder="First Name *"
            />
            <ErrorMessage name="firstName" />
            <StyledField
              id="lastName"
              name="lastName"
              placeholder="Last Name *"
            />
            <ErrorMessage name="lastName" />
            <StyledField id="address" name="address" placeholder="Address *" />
            <ErrorMessage name="address" />
            <StyledField id="zip" name="zip" placeholder="ZIP Code *" />
            <ErrorMessage name="zipp" />
            <StyledField id="city" name="city" placeholder="City *" />
            <ErrorMessage name="city" />
            <StyledField id="country" name="country" placeholder="Country *" />
            <ErrorMessage name="country" />
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default CheckoutForm;
