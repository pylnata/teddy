import React from "react";

import { Game } from "./styles";

export default ({ img, click }) => (
  <Game>
    <img src={img} width="100" height="100" alt="shop game" onClick={click} />
  </Game>
);
