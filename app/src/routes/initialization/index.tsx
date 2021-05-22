import React from "react";

import { RouteName } from "src/types";
import { Spinner } from "../generalComponents";

const ErrorState: view = ({ isError = observe.session.isError }) => {
  if (!isError) {
    return null;
  }
  return <div>Error was ecountered</div>;
};

const LoadingState: view = ({ isReady = observe.session.isReady }) => {
  if (!isReady) {
    return null;
  }

  return (
    <div className={"w-full h-screen flex justify-center items-center "}>
      <Spinner pink size={50} />
    </div>
  );
};

export const Initialization: view = ({ shouldMount = observe.routes.list[RouteName.INITIALIZATION].isMounted }) => {
  return (
    shouldMount && (
      <div>
        <ErrorState />
        <LoadingState />
      </div>
    )
  );
};
