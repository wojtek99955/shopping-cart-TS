import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0px 24px -15px rgba(66, 68, 90, 1);
  border-radius: 15px;
  padding: 1rem;

  label {
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 1rem;
    height: 1rem;
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
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #00d0a9;
  span {
    color: white;
    background-color: #00d0a9;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
