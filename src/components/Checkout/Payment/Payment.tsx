import {
  Title,
  FormContainer,
  RadioInput,
  StyledRadioLabel,
} from "../assets/atoms/CardsStyles";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BtnsContainer } from "../assets/atoms/CardsStyles";
import ValidationError from "../assets/ValidationError";
import { CheckoutDataTypes } from "../assets/interfaces/Interfaces";
import {
  FormWrapper,
  Column,
  CardContainer,
  TextField,
  ExpirationDate,
  ExpirationData,
} from "./PaymentStyles";

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
  cardNumber: Yup.string().when("picked", {
    is: "Card",
    then: Yup.string().required("required"),
  }),
  expirationMonth: Yup.string().when("picked", {
    is: "Card",
    then: Yup.string().required("required"),
  }),
  expirationYear: Yup.string().when("picked", {
    is: "Card",
    then: Yup.string().required("required"),
  }),
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
          {({ values }) => (
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
                    <ErrorMessage
                      name="cardNumber"
                      component={ValidationError}
                    />
                  </Column>
                  <ExpirationDate>
                    <ExpirationData>
                      <TextField
                        type="text"
                        name="expirationMonth"
                        placeholder="expiration month"
                      />
                      <ErrorMessage
                        name="expirationMonth"
                        component={ValidationError}
                      />
                    </ExpirationData>
                    <ExpirationData>
                      <TextField
                        type="text"
                        name="expirationYear"
                        placeholder="expiration year"
                      />
                      <ErrorMessage
                        name="expirationYear"
                        component={ValidationError}
                      />
                    </ExpirationData>
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
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
};

export default Payment;
