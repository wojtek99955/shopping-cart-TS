import { Formik, Form, ErrorMessage } from "formik";
import { Title } from "../assets/atoms/CardsStyles";
import { FormValues } from "../assets/interfaces/Interfaces";
import * as Yup from "yup";
import ValidationError from "../assets/ValidationError";
import { BtnsContainer } from "../assets/atoms/CardsStyles";
import {
  Container,
  CheckboxLabel,
  Divider,
  Checkbox,
  StyledField,
  FormContainer,
} from "./CheckoutFormStyles";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CheckoutForm = ({ setStep }: Props) => {
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
    zip: Yup.string().required("required"),
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
          onSubmit={(values, isValidating) => {
            if (isValidating) {
              setStep((prev) => prev + 1);
            }
          }}
        >
          <Form>
            <StyledField id="email" name="email" placeholder="Email *" />
            <ErrorMessage name="firstName" component={ValidationError} />
            <CheckboxLabel>
              <Checkbox id="newsletter" name="newsletter" type="checkbox" />
              Subscribe to Newsletter
            </CheckboxLabel>
            <Divider />
            <StyledField
              id="firstName"
              name="firstName"
              placeholder="First Name *"
            />
            <ErrorMessage name="firstName" component={ValidationError} />
            <StyledField
              id="lastName"
              name="lastName"
              placeholder="Last Name *"
            />
            <ErrorMessage name="lastName" component={ValidationError} />
            <StyledField id="address" name="address" placeholder="Address *" />
            <ErrorMessage name="address" component={ValidationError} />
            <StyledField id="zip" name="zip" placeholder="ZIP Code *" />
            <ErrorMessage name="zip" component={ValidationError} />
            <StyledField id="city" name="city" placeholder="City *" />
            <ErrorMessage name="city" component={ValidationError} />
            <StyledField id="country" name="country" placeholder="Country *" />
            <ErrorMessage name="country" component={ValidationError} />
            <BtnsContainer>
              <button disabled>prev</button>
              <button type="submit">next</button>
            </BtnsContainer>
          </Form>
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default CheckoutForm;
