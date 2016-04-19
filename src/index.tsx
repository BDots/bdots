import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloComponent } from "./components/hello";

ReactDOM.render(
    <HelloComponent compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
