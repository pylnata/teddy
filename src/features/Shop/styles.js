import styled from "styled-components";

export const GameContainer = styled.div`
  max-width: 990px;
  height: 95vh;
  max-height: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: minmax(40px, 9%) 1fr minmax(40px, 9%);
  grid-template-rows: 1fr minmax(40px, 13%);
  grid-template-areas:
    "items-left cart items-right"
    "items-left items-bottom items-right";

    @media screen and (max-width: 768px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-height: 480px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ShopContainer = styled.div`
width: 100%;
padding: 70px 0 10px 0;

@media screen and (max-height: 667px) {
  padding-top: 20px;
}

display: flex;
height: 100%;
//min-height: 400px;
min-width: 230px;
justify-content: center;
position: relative;`
