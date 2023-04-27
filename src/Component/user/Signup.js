import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./userstyle.css";
import Image1 from "./img.png"

export default function Adduser() {
  const defaultValue = {
    name: "",
    email: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email: yup.string().required().email("please enter email your email"),
  });

  const handleSubmit = (values) => {
    console.log("Values:", values);
  };
  

  return (
    <>
      <div className="container bg-warning">
        <br></br>

        <div className="col-md-12 text-center">
          <h2>Sign-up page by Using Formic</h2>
          <br></br>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="col-md-10">
                <Field
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="form-control"
                ></Field>
                <p>
                  <ErrorMessage name="name"></ErrorMessage>
                </p>

                

                
                
                
                <Field
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="form-control"
                ></Field>
                <p>
                  <ErrorMessage name="email"></ErrorMessage>
                </p>

                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
