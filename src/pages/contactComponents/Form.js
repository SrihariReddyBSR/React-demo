import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <h1 className="heading">Contact Us</h1>
      <section className="container">
        <form>
          <div className="field">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="field">
            <p>Email</p>
            <input type="text" />
          </div>
          <div className="field">
            <p>Phone Number</p>
            <input type="number" />
          </div>
          <div className='form-button'>
            <button>Submit!</button>
            </div>
        </form>
      </section>
    </>
  );
};

export default Form;
