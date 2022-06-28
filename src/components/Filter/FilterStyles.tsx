import styled from "styled-components";
import { device } from "../../assets/media";
import { Field } from "formik";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface IconProps {
  open: boolean;
}

export const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    display: block;
  }

  h3 {
    margin-bottom: 2rem;
  }
`;

export const Row = styled.div`
  margin-bottom: 0.5rem;
`;
export const StyledRadio = styled(Field)`
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
`;

export const Wrapper = styled.div`
  width: 13rem;
  padding: 0.5rem;

  @media ${device.laptop} {
    width: 11rem;
  }
`;

export const CategoryContainer = styled.div`
  padding-top: 1.5rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    vertical-align: middle;
    margin: 0;
  }
`;
export const ArrowIcon = styled(IoIosArrowDropdownCircle)<IconProps>`
  font-size: 2rem;
  color: #00d0a9;
  cursor: pointer;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : null)};
  transition: 250ms ease-in;
`;
