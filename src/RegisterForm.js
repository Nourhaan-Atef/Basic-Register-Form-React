import React, { useState } from "react";

function RegisterForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitMessage, setSubmitMessage] = useState(false);
  const [valid, setValid] = useState(false);
  const handelFirstNameInput = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handelLastNameInput = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handelEmailInput = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitMessage(true);
  };
  return (
    <div className="form">
      <h1>Registeration Form</h1>

      <form onSubmit={handleSubmit}>
        {submitMessage && valid ? (
          <div className="submit-message">Success! Thanks For Registering</div>
        ) : null}

        <input
          onChange={handelFirstNameInput}
          value={values.firstName}
          type="text"
          placeholder="First Name"
          name="firstName"
          className="formField"
        />
        {submitMessage && !values.firstName ? (
          <span>Please enter the first name</span>
        ) : null}
        <input
          onChange={handelLastNameInput}
          value={values.lastName}
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="formField"
        />
        {submitMessage && !values.lastName ? (
          <span>Please enter the last name</span>
        ) : null}
        <input
          onChange={handelEmailInput}
          value={values.email}
          type="email"
          placeholder="Email"
          name="email"
          className="formField"
        />
        {submitMessage && !values.email ? (
          <span>Please enter the email</span>
        ) : null}
        <button>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
