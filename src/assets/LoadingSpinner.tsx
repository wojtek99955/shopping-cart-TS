import styled from "styled-components";

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;

  div {
    position: absolute;
    border: 4px solid #00d0a9;
    opacity: 1;
    border-radius: 50%;
    animation: spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes spinner {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export const LoadingSpinner = () => {
  return (
    <Spinner>
      <div></div>
      <div></div>
    </Spinner>
  );
};

export default LoadingSpinner;
