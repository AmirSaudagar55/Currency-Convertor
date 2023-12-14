import React from 'react';
import PropTypes from 'prop-types';
import "../App.css"

function Inputs_or_Auto_Convert_Panel(props) {
  return (
    <div className="my-4 flex items-center justify-center">
      <input
        type="text"
        value={props.amount}
        onChange={(e) => {
          props.onAmountChange(Number(e.target.value));
        }}
        readOnly={props.readOnly}
        className={`border rounded p-2 mr-2 focus:outline-none focus:border-blue-500 ${props.readOnly ? "notAllowedInput" : ""}`}
      />
      <select
        value={props.currency}
        onChange={(e) => {
          props.onCurrencyChange(e.target.value);
        }}
        className="border rounded p-2 focus:outline-none focus:border-blue-500"
      >
        {props.currency_names.map((item) => {
          return <option key={item[0]} value={item[0]}>{item[0]}</option>;
        })}
      </select>
    </div>
  );
}

Inputs_or_Auto_Convert_Panel.propTypes = {
  amount: PropTypes.number.isRequired,
  currency_names: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default Inputs_or_Auto_Convert_Panel;
