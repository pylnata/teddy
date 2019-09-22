import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import useRouter from "./hooks/useRouter";
import Intro from "./features/Intro/Intro";

import { ImagesProvider } from "./contexts/ImagesContext";

const Shop = React.lazy(() => {
  return import("./features/Shop/Shop");
});

const Puzzle = React.lazy(() => {
  return import("./features/Puzzle/Puzzle");
});

const App = props => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: location.pathname !== "/" ? 0 : 1,
      transform: "translateX(0%)"
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-20%)", delay: 0 }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Suspense fallback={""}>
      <Switch location={item}>
        <Route
          path="/shop"
          exact
          render={props => (
            <ImagesProvider
              r={require.context(
                "./features/Shop/images/",
                true,
                /\.(png|jpe?g|svg)$/
              )}
            >
              <Shop {...props} />
            </ImagesProvider>
          )}
        />
        <Route
          path="/puzzle"
          exact
          render={props => (
            <ImagesProvider
              r={require.context(
                "./features/Puzzle/images/",
                false,
                /\.(png|jpe?g|svg)$/
              )}
            >
              <Puzzle {...props} />
            </ImagesProvider>
          )}
        />
        <Route
          path="/"
          exact
          render={props => (
            <ImagesProvider
            intro={true}
              r={require.context(
                "./features/Intro/images/",
                false,
                /\.(png|jpe?g|svg)$/
              )}
            >
              <Intro {...props} />
            </ImagesProvider>
          )}
        />
        <Redirect to="/" />
      </Switch>
      </Suspense>
    </animated.div>
  ));
};

export default App;
