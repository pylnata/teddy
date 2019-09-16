const balloonColor = "#e74c3c";

export const TimerCss = `
display: block;
width: 100%;
height: 100%;
min-height: 150px;
background-color: ${balloonColor};
border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
color: #fff;
font-size: 5rem;
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
}

&-before {
  width: 2px;
  height: 80%;
  background: #000;
  position: absolute;
  z-index: 1;
  top: 100%;
  margin-left: 50%;
}
`;
export const TimerThreadCss = `
  width: 2px;
  height: 37%;
  background: #000;
  position: absolute;
  z-index: 1;
  top: 50%;
  margin-left: 50%;
`;
