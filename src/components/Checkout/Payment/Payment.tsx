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
  VisaIcon,
  PaymentNetwork,
  MasterCardIcon,
} from "./PaymentStyles";
import { initialValuesTypes } from "../assets/interfaces/Interfaces";

const regExp = "^4[0-9]{12}(?:[0-9]{3})?$";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCheckoutData: React.Dispatch<
    React.SetStateAction<CheckoutDataTypes | undefined>
  >;
  checkoutData: CheckoutDataTypes | undefined;
}

const validationSchema = Yup.object().shape({
  picked: Yup.string().required("A radio option is required"),
  cardNumber: Yup.string()
    .when("picked", {
      is: "Card",
      then: Yup.string().required("required"),
    })
    .matches(/4[0-9]{12}(?:[0-9]{3})?$/, "invalid card number"),
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
  const initialValues: initialValuesTypes = {
    picked: checkoutData?.payment !== undefined ? checkoutData.payment : "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvc: "",
  };
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
                  <PaymentNetwork>
                    <VisaIcon />
                    <MasterCardIcon />
                  </PaymentNetwork>
                  <Column>
                    <TextField
                      type="text"
                      name="cardNumber"
                      placeholder="xxxx xxxx xxxx xxxx"
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
                        placeholder="xx"
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
                        placeholder="xx"
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
