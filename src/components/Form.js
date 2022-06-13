import React, { useState } from "react";

export default function Form(props) {

  /** useState will return a name and a setName function. */
  const [name, setName] = useState("");

  /** This function is essentially a keylogger. */
  function handleChange(event) {
    console.log(event.target.value); // keylog
    setName(event.target.value);
  }

  /**  This will handle a submission */
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask("Say hello!");
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );

}