import styled, { keyframes} from "styled-components";

const balloonColor = "#e74c3c";

export const TimerCss = `
display: block;
width: 100%;
height: 100%;
min-height: 150px;
max-height: 180px;
background-color: ${balloonColor};
border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
color: #fff;
font-size: 3rem;
@media screen and (max-height: 568px) {
  font-size: 2rem;
  height: 100px;
  min-height: 100px;
}

@media screen and (max-height: 213px) {
  height: 50px;
  min-height: 50px;
}

@media screen and (max-height: 667px) {
  height: 100px;
  min-height: 100px;
}

@media screen and (min-width: 568px) {
  font-size: 5rem;
}

padding: 0px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 20;

&::after {
  content: "";
  width: 10%;
  height: 10%;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid ${balloonColor};
  position: absolute;
  left: 30%;
  bottom: -6%;
  z-index: 20;
  @media screen and (max-height: 568px) {
    border-left-width:10px;
      border-right-width: 10px;
  }

  @media screen and (max-width: 768px) {
    border-left-width:10px;
      border-right-width: 10px;
  }

}

`;
export const TimerThreadCss = `
  width: 2px;
  height: 57%;
  background: #000;
  position: absolute;
  z-index: 1;
  top: 30%;
  margin-left: 47%;

  @media screen and (max-height: 667px) {
    width: 1px;
}

`;


const balloonColorLight = "#c0392b";

const topBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}`;

const bottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`;

export const Bum = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  bottom: 20%;
  left: 10%;
  display: block;
  border-radius: 50%;
  padding: 0rem;
  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 100px;
    height: 100%;
    left: 0;
    z-index: 1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }
  &:before {
    top: -35%;
    display: block;
    animation: ${topBubbles} ease-in-out 0.75s forwards;
    background-image: radial-gradient(
        circle,
        ${balloonColorLight} 50%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${balloonColorLight} 50%,
        transparent 30%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${balloonColorLight} 35%,
        transparent 20%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%);
    background-size: 2% 2%, 4% 4%, 7% 7%, 4% 4%, 9% 9%, 5% 5%, 3% 3%, 5% 5%,
      2% 2%;
  }
  &:after {
    display: block;
    animation: ${bottomBubbles} ease-in-out 0.75s forwards;
    bottom: -35%;
    background-image: radial-gradient(
        circle,
        ${balloonColorLight} 50%,
        transparent 20%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${balloonColorLight} 35%,
        transparent 20%
      ),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%),
      radial-gradient(circle, ${balloonColorLight} 50%, transparent 20%);
    background-size: 5% 5%, 6% 6%, 7% 7%, 8% 8%, 9% 9%, 10% 10%, 5% 5%;
  }
`;
