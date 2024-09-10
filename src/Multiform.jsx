import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const personalDetailsSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const addressDetailsSchema = Yup.object({
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  postalCode: Yup.string().required('Postal Code is required'),
});

const paymentDetailsSchema = Yup.object({
  cardNumber: Yup.string().required('Card Number is required'),
  expiryDate: Yup.string().required('Expiry Date is required'),
  cvv: Yup.string().required('CVV is required'),
});

const Multiform = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = (values) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...values,
    }));
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...values,
    }));
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      {!submitted ? (
        <Formik
          initialValues={formValues}
          validationSchema={
            step === 1
              ? personalDetailsSchema
              : step === 2
              ? addressDetailsSchema
              : paymentDetailsSchema
          }
          onSubmit={(values) => {
            if (step === 3) {
              handleSubmit(values);
            } else {
              handleNextStep(values);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {step === 1 && (
                <div>
                  <h2>Personal Details</h2>
                  <div>
                    <label>First Name</label>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div style={{ color: 'red' }}>{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div>
                    <label>Last Name</label>
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      <div style={{ color: 'red' }}>{errors.lastName}</div>
                    ) : null}
                  </div>
                  <div>
                    <label>Email</label>
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div style={{ color: 'red' }}>{errors.email}</div>
                    ) : null}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2>Address Details</h2>
                  <div>
                    <label>Address</label>
                    <Field name="address" />
                    {errors.address && touched.address ? (
                      <div style={{ color: 'red' }}>{errors.address}</div>
                    ) : null}
                  </div>
                  <div>
                    <label>City</label>
                    <Field name="city" />
                    {errors.city && touched.city ? (
                      <div style={{ color: 'red' }}>{errors.city}</div>
                    ) : null}
                  </div>
                  <div>
                    <label>Postal Code</label>
                    <Field name="postalCode" />
                    {errors.postalCode && touched.postalCode ? (
                      <div style={{ color: 'red' }}>{errors.postalCode}</div>
                    ) : null}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2>Payment Details</h2>
                  <div>
                    <label>Card Number</label>
                    <Field name="cardNumber" />
                    {errors.cardNumber && touched.cardNumber ? (
                      <div style={{ color: 'red' }}>{errors.cardNumber}</div>
                    ) : null}
                  </div>
                  <div>
                    <label>Expiry Date</label>
                    <Field name="expiryDate" />
                    {errors.expiryDate && touched.expiryDate ? (
                      <div style={{ color: 'red' }}>{errors.expiryDate}</div>
                    ) : null}
                  </div>
                  <div>
                    <label>CVV</label>
                    <Field name="cvv" />
                    {errors.cvv && touched.cvv ? (
                      <div style={{ color: 'red' }}>{errors.cvv}</div>
                    ) : null}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '20px' }}>
                {step > 1 && <button type="button" onClick={handlePrevStep}>Back</button>}
                <button type="submit" style={{ marginLeft: '10px' }}>
                  {step === 3 ? 'Submit' : 'Next'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <h2>Form Submitted Successfully!</h2>
          <h3>Your Details:</h3>
          <ul>
            <li><strong>First Name:</strong> {formValues.firstName}</li>
            <li><strong>Last Name:</strong> {formValues.lastName}</li>
            <li><strong>Email:</strong> {formValues.email}</li>
            <li><strong>Address:</strong> {formValues.address}</li>
            <li><strong>City:</strong> {formValues.city}</li>
            <li><strong>Postal Code:</strong> {formValues.postalCode}</li>
            <li><strong>Card Number:</strong> {formValues.cardNumber}</li>
            <li><strong>Expiry Date:</strong> {formValues.expiryDate}</li>
            <li><strong>CVV:</strong> {formValues.cvv}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Multiform;
