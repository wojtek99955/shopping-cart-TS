import { Field } from "formik";
import styled from "styled-components";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

export const FormWrapper = styled.div`
  padding-top: 1rem;
`;

export const Column = styled.div``;

export const CardContainer = styled.div`
  max-width: 15rem;
`;

export const TextField = styled(Field)`
  border-radius: 0;
  width: 50%;
  width: 100%;
  border: 1px solid #d0d0d0;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 20px;
`;

export const ExpirationDate = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ExpirationData = styled.div``;

export const VisaIcon = styled(FaCcVisa)`
  font-size: 2.5rem;
  color: #0e4390;
`;

export const MasterCardIcon = styled(FaCcMastercard)`
  font-size: 2.5rem;
  color: #003461;
`;

export const PaymentNetwork = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CVC = styled(TextField)`
  width: 50%;
`;

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  display: block;
`;
