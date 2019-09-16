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
