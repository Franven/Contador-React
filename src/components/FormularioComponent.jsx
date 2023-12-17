import React from "react";
import { useForm } from "../hooks/useForm";
import { useRef } from "react";
import { useEffect } from "react";

export const FormularioComponent = () => {

  const focusRef = useRef()

  const inicialForm = {
    userName: "",
    email: "",
    password: "",
  }
  const {onInputChange, formState } = useForm(inicialForm);

  const { userName, email, password,} = formState

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  useEffect(()=>{
    focusRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your UserName"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
