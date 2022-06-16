import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Title } from "./OrderSummary";

const Container = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 1rem;
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
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default CheckoutForm;
