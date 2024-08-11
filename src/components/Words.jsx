import React from "react";
import Word from "./Word";

const Words = () => {
  const words =
    "ipsum dolor sit amet consectetur adipisicing elit. Enim, natus nesciunt blanditiis expedita ea quaerat voluptatibus perferendis consequuntur asperiores, sapiente, iusto veritatis quae odit unde explicabo iure velit impedit aspernatur?";
  return (
    <div>
      {words.map((word) => {
        <Word word={word} />;
      })}
    </div>
  );
};

export default Words;
