import React from "react";

import { Initialization, Dashboard, Login } from "./routes";
import * as producers from "./producers";

const App: view = ({ refreshLanguage = observe.user.data.language }) => {
  return (
    <div>
      <Initialization />
      <Dashboard />
      {/*<Contract />*/}
      <Login />
    </div>
  );
};

App.producers(Object.values(producers));

export default App;
