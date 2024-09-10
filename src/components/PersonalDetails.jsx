import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PersonalDetails = () => {
  return (
    <div className="form-section">
      <h2>Personal Details</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          className="input"
        />
        <ErrorMessage name="firstName" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          className="input"
        />
        <ErrorMessage name="lastName" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="input"
        />
        <ErrorMessage name="email" component="div" className="error" />
      </div>
    </div>
  );
};

export default PersonalDetails;
