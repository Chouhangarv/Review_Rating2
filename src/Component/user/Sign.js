import React from 'react'
import './userstyle.css'
import * as yup from "yup";
import img from './images/img.png';
import corner from './images/corner.jpg'
import star from './images/stare.png'
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function Sign() {
 
  const defaultValue={
    name:"",
    email:'',
    number:""
  };

  const validationSchema=yup.object().shape({
    name:yup.string().required("please enter your name"),
    email:yup.string().required().email("enter Valid email"),
    number:yup.string().matches( 'Please Enter 10 Digit'),

  })
 
  const handleSubmit=(values)=>{
    console.log("values",values);
  }

 
 
 
  return (
    <div>
      
      <div className="main">
  <div className="row justify-content-evenly block">
    <div className="col-md-5 box1">
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
    <div className="col-md-4 box2">
      <div className="d-flex justify-content-between">
        <img className="corner" src={corner} />
        <h2 id="title">Signup</h2>
        <img className="star" src={star} />
      </div>

      <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={handleSubmit}>

      
      <Form>
        <div className="row">
          <div style={{ maxWidth: 450, margin: 'auto' }}>
            <div className="input-icons">
              <i className="fa fa-user icon" />
              <Field
                name="name"
                className="input-field"
                type="text"
                placeholder="Full Name"
              />
              <p className='text-danger'><ErrorMessage name="name"></ErrorMessage></p>


              <i className="fa fa-envelope icon" />
              <Field
                name="email"
                className="input-field"
                type="text"
                placeholder="Email ID"
                required
              /><p className='text-danger'><ErrorMessage name='email'></ErrorMessage></p>


              <i className="fa fa-phone icon" />
              <Field
                name="number"
                className="input-field"
                type="Number"
                placeholder="phone Number"
                required
              /><p className='text-danger'><ErrorMessage name="number"></ErrorMessage></p>


              <i className="fa fa-home icon" />
              <Field
                 name="city"
                className="input-field"
                type="text"
                placeholder="city"
                required
              /><p></p>


              <i className="fa fa-map icon" />
              <Field
              name="state"
                className="input-field"
                type="text"
                placeholder="state"
                required
              /><p></p>

            </div>
          </div>
        </div>
        
        <div className="row">
          <button
            style={{
              maxWidth: 450,
              margin: 'auto',
              height: 35,
              borderRadius: 3,
              color: 'white',
              width: 130,
            }}
            className="buttons"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div id="line">
          <br />
          <hr />
        </div>
      </Form>

      </Formik>







      <div className="row">
        <p className style={{ color: 'grey', margin: 'auto', width: 260 }}>
          Already have an account{' '}
          <a
            href="index.js"
            style={{
              color: 'black',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  </div>
</div>;


    </div>
  )
}
