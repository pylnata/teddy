import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


/*
import tomato from "../../assets/img/items/tomato.svg";
import onion from "../../assets/img/items/onion.svg";
import potato from "../../assets/img/items/potato.svg";
import broccoli from "../../assets/img/items/broccoli.svg";
import cabbage from "../../assets/img/items/cabbage.svg";
import carrot from "../../assets/img/items/carrot.svg";

import watermelon from "../../assets/img/items/watermelon.svg";
import bananas from "../../assets/img/items/bananas.svg";
import grape from "../../assets/img/items/grapes.svg";
import orange from "../../assets/img/items/orange.svg";
import apple from "../../assets/img/items/apple.svg";
import strawberry from "../../assets/img/items/strawberry.svg";
import pineapple from "../../assets/img/items/pineapple.svg";

import milk from "../../assets/img/items/milk.svg";
import pasta from "../../assets/img/items/pasta.svg";
import croissant from "../../assets/img/items/croissant.svg";
import mustard from "../../assets/img/items/mustard.svg";
import cake from "../../assets/img/items/cake.svg";
import eggs from "../../assets/img/items/eggs.svg";
import jam from "../../assets/img/items/jam.svg";
*/
