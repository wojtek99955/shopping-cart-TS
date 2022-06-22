import styled from "styled-components";
import { device } from "../../assets/media";

interface StyleProps {
  loading: boolean;
}

export const Container = styled.div<StyleProps>`
  max-width: 1000px;
  margin: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 8rem 1rem;
  display: grid;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

export const Wrapper = styled.section`
  max-width: 1300px;
  margin: auto;

  @media ${device.laptop} {
    display: flex;
  }
`;
