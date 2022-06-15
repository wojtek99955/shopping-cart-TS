import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Title } from "./OrderSummary";

const Container = styled.div`
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;
`;

const StyledField = styled(Field)`
  display: block;
  width: 20rem;
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
interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  zipp: string;
  city: string;
  country: string;
}

const CheckoutForm = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    address: "",
    zipp: "",
    city: "",
    country: "",
  };

  return (
    <Container>
      <Title>
        <span>1</span> <h1>Shipping Address</h1>
      </Title>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <StyledField
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />

            <StyledField
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />

            <StyledField id="address" name="address" placeholder="Address" />

            <StyledField id="zipp" name="zipp" placeholder="Zipp Code" />

            <StyledField id="city" name="city" placeholder="City" />

            <StyledField id="country" name="country" placeholder="Country" />
            <button type="submit">submit</button>
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default CheckoutForm;
