import React from 'react'
import img from './images/img.png';
import corner from './images/corner.jpg'
import star from './images/stare.png'
import './userstyle.css';
import * as yup from "yup";
import {Formik,Form,Field,ErrorMessage} from 'formik';

export default function Login() {


  
  const defaultValue={
    email:"",
    password:""
  }

  const validationSchema=yup.object().shape({
    email:yup.string().required().email("enter Valid email"),
    password: yup.string().required("Please enter a password").min(8, "Password must have at least 8 characters")
    // .matches(/[0-9]/,"")
    // .matches(/[a-z]/,"lowercase")
    // .matches(/[A-Z]/,"uppercase")
  });

  const handleSubmit=(values)=>{
    console.log("values",values)
  };


  return (
    <div>
      <div className="main">
  <div className="row justify-content-evenly block">
    <div className="col-5 box1">
      <div className="row">
        <div className="col-12 ">
          <h1 id="heading">Welcome</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p id="desc">
            Lorem ipsum dolor sit amet,consectetur
            <br /> adipiscing elit.
          </p>
        </div>
      </div>
      <div className="row">
        <img src={img} />
      </div>
    </div>
    <div className="col-4 box2">
      <div className="d-flex justify-content-between">
        <img className="corner" src={corner} />
        <h2 id="title">Login</h2>
        <img className="star" src={star} />
      </div>
      <div id="login-des">Hello! Please Enter your detail for login. </div>
      
      
      
      
      
      <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
      
      <Form>
        <div className="row">
          <div style={{ maxWidth: 450, margin: 'auto' }}>
            <div className="input-icons">
              <i className="fa fa-envelope icon" />
              <Field
                className="input-field"
                name="email"
                type="text"
                placeholder="Email ID"
                required
              /><p><ErrorMessage name="email"></ErrorMessage></p>

              <i className="fa fa-lock icon" />
              <Field
              name="password"
                className="input-field"
                type="text"
                placeholder="Password"
              />
              <p><ErrorMessage name="password"></ErrorMessage></p>

              <div id="forgot">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <button
            style={{
              maxWidth: 130,
              margin: 'auto',
              height: 35,
              borderRadius: 3,
              color: 'white',
            }}
            className="buttons"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div id="line">
          {' '}
          <br />
          <hr />
        </div>
      </Form>

      </Formik>







      <div className="row">
        <p
          style={{
            color: 'grey',
            textAlign: 'center',
            width: 360,
            margin: 'auto',
          }}
        >
          I don't have an account on Review &amp; Rate{' '}
          <a
            href="Sign.js"
            style={{
              color: 'black',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  </div>
</div>;

    </div>
  )
}
