import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="bg-gray-200 w-screen">
      <div className="pt-10">
        <Form
          width="2/5"
          height="max"
          text="base"
          font="semibold"
          titleText="2xl"
          titleFont="semibold"
        />
      </div> 
      <div>
        <Card mdWidth="3/5" lgWidth="2/5"/>
      </div>
    </div>
  );
};

export default App;
