import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const Image = styled.img`
  height: 11rem;
  width: 11rem;
  object-fit: contain;
  display: block;
  margin: auto;
`;

export const Container = styled.div`
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 1rem;
  transition: transform 100ms ease-in;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemName = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin: 2rem 0;
  font-weight: 600;
`;

export const Price = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  background-color: #00d0a9;
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -1rem);

  &:hover {
    background-color: #008970;
  }
`;
export const HeartIconContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;
export const OutlineHeart = styled(AiOutlineHeart)`
  font-size: 1.5rem;
  color: #ff555f;
`;

export const FilledHeart = styled(AiFillHeart)`
  font-size: 1.5rem;
  color: #ff555f;
`;
