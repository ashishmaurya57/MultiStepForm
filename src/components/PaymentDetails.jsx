import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PaymentDetails = () => {
  return (
    <div className="form-section">
      <h2>Payment Details</h2>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <Field
          name="cardNumber"
          id="cardNumber"
          placeholder="Enter your card number"
          className="input"
        />
        <ErrorMessage name="cardNumber" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date</label>
        <Field
          name="expiryDate"
          id="expiryDate"
          placeholder="DD/MM/YYYY"
          className="input"
        />
        <ErrorMessage name="expiryDate" component="div" className="error" />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <Field
          name="cvv"
          id="cvv"
          placeholder="Enter CVV"
          className="input"
        />
        <ErrorMessage name="cvv" component="div" className="error" />
      </div>
    </div>
  );
};

export default PaymentDetails;
