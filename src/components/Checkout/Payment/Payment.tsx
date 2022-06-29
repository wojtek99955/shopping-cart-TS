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
  CVC,
} from "./PaymentStyles";
import { initialValuesTypes } from "../assets/interfaces/Interfaces";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutDataTypes>>;
  checkoutData: CheckoutDataTypes;
}

const Payment = ({ setStep, setCheckoutData, checkoutData }: Props) => {
  const validationSchema = Yup.object().shape({
    picked: Yup.string().required("A radio option is required"),
    cardNumber: Yup.string().when("picked", {
      is: "Card",
      then: Yup.string()
        .matches(
          /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          "invalid card number"
        )
        .required("required"),
    }),
    expirationMonth: Yup.string().when("picked", {
      is: "Card",
      then: Yup.string()
        .matches(/^(0[1-9]|1[0-2])/, "invalid date")
        .required("required"),
    }),
    expirationYear: Yup.string().when("picked", {
      is: "Card",
      then: Yup.string()
        .matches(/(1[4-9]|[2-9][0-9]|20[1-9][1-9])/)
        .required("required"),
    }),
    cvc: Yup.string().when("picked", {
      is: "Card",
      then: Yup.string()
        .matches(/^[0-9]{3}$/, "invalid code")
        .required("required"),
    }),
  });
  const initialValues: initialValuesTypes = {
    picked:
      checkoutData?.payment?.picked !== undefined
        ? checkoutData.payment.picked
        : "",
    cardNumber:
      checkoutData?.payment?.cardNumber !== undefined
        ? checkoutData.payment.cardNumber
        : "",
    expirationMonth:
      checkoutData?.payment?.expirationMonth !== undefined
        ? checkoutData.payment.expirationMonth
        : "",
    expirationYear:
      checkoutData?.payment?.expirationYear !== undefined
        ? checkoutData.payment.expirationYear
        : "",
    cvc:
      checkoutData?.payment?.cvc !== undefined ? checkoutData.payment.cvc : "",
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
                payment: {
                  cardNumber: values.cardNumber,
                  picked: values.picked,
                  expirationMonth: values.expirationMonth,
                  expirationYear: values.expirationYear,
                  cvc: values.cvc,
                },
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
                      type={"number"}
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
                  <CVC type="text" name="cvc" placeholder="123" />
                  <ErrorMessage name="cvc" component={ValidationError} />
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
