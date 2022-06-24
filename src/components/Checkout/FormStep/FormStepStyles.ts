import styled from "styled-components";

interface StyleProps {
  step: number;
}

export const Container = styled.div`
  padding-top: 8rem;
  max-width: 33rem;
  margin: auto;
`;

export const Line = styled.div<StyleProps>`
  height: 0.3rem;
  background-color: #e2e2e3;
  width: 4rem;

  &:last-of-type {
    &:last-child {
      background-color: ${({ step }) => step >= 4 && "#00d0a9"};
    }
  }
`;

export const CurrentStep = styled.div`
  display: flex;
  gap: 0rem;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: center;
  gap: 0.5rem;
`;
export const StepName = styled.div<StyleProps>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #e2e2e3;
  color: #00d0a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepContainer = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  &:nth-of-type(1) {
    ${Line} {
      background-color: ${({ step }) => step >= 1 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 1 && "#00d0a9"};
      color: ${({ step }) => step >= 1 && "white"};
    }
  }
  &:nth-of-type(2) {
    ${Line} {
      background-color: ${({ step }) => step >= 2 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 2 && "#00d0a9"};
      color: ${({ step }) => step >= 2 && "white"};
    }
  }
  &:nth-of-type(3) {
    ${Line} {
      background-color: ${({ step }) => step >= 3 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 3 && "#00d0a9"};
      color: ${({ step }) => step >= 3 && "white"};
    }
  }
  &:nth-of-type(4) {
    ${Line} {
      background-color: ${({ step }) => step === 4 && "#00d0a9"};
    }
    ${StepName} {
      background-color: ${({ step }) => step >= 4 && "#00d0a9"};
      color: ${({ step }) => step >= 4 && "white"};
    }
  }
`;
