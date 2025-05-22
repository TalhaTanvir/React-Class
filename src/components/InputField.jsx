import React, { useState } from "react";
import MainLayout from "../Layouts/Main";

function InputField() {
  const [text, setText] = useState("");

  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-3xl mb-5 text-red-500">{text}</h1>
        <input
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2"
          type="text"
          placeholder="Please write here"
        />
      </div>
    </MainLayout>
  );
}

export default InputField;
