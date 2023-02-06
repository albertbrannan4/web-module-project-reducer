import React from "react";
import { useReducer } from "react";
import "./App.css";
import { applyNumber, changeOperation } from "../actions";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import reducer, { initialState } from "../reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const NumberHandler = (number) => {
    dispatch(applyNumber(number));
  };
  const OperationHandler = (symbol) => {
    dispatch(changeOperation(symbol));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => NumberHandler(1)} />
              <CalcButton value={2} onClick={() => NumberHandler(2)} />
              <CalcButton value={3} onClick={() => NumberHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => NumberHandler(4)} />
              <CalcButton value={5} onClick={() => NumberHandler(5)} />
              <CalcButton value={6} onClick={() => NumberHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => NumberHandler(7)} />
              <CalcButton value={8} onClick={() => NumberHandler(8)} />
              <CalcButton value={9} onClick={() => NumberHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => OperationHandler("+")} />
              <CalcButton value={"*"} onClick={() => OperationHandler("*")} />
              <CalcButton value={"-"} onClick={() => OperationHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
