import React, { useState } from "react";
import { useFormik } from "formik";
import { formSchema } from "./Validations";
const Example2 = () => {
  const initialValues = { name: "", password: "", email: "", contact: "" };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        console.log(values);
      },
    });

  return (
    <form className="display" onSubmit={handleSubmit}>
      <div>
        <input
          className="inputs"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
      </div>
      <div>
        <input
          className="inputs"
          name="password"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
      </div>
      <div>
        <input
          className="inputs"
          onBlur={handleBlur}
          type="text"
          value={values.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
      </div>
      <div>
        <input
          className="inputs"
          onBlur={handleBlur}
          name="contact"
          value={values.contact}
          onChange={handleChange}
          type="contact"
          placeholder="Contact"
        />
        {touched.contact && errors.contact && (
          <p className="errors">{errors.contact}</p>
        )}
      </div>
      <input className="inputs button-1" type="submit" />
    </form>
  );
};

export default Example2;
