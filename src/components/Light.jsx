import classNames from "classnames";
import "./styles.css";
import { useState } from "react";

const Light = ({ color = "red", isOn }) => {
  //classNames('foo', { bar: true, duck: false },
  //'baz', { quux: true }); // => 'foo bar baz quux'

  const classes = classNames(
    "myClass",
    { "bg-red-500": color === "red", "opacity-100": true },
    {
      "bg-red-500": color == "red",
      "bg-green-500": color == "green",
      "bg-yellow-500": color == "yellow",
    }
  );

  return <div className={classes}>Light</div>;
};

export default Light;
