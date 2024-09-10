import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import PaymentDetails from './components/PaymentDetails';
import ReviewDetails from './components/ReviewDetails';

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

const MultiStepForm = () => {
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
    <div className="form-container">
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
          {({ values }) => (
            <Form>
              {step === 1 && <PersonalDetails />}
              {step === 2 && <AddressDetails />}
              {step === 3 && <PaymentDetails />}
              
              <div className="buttons">
                {step > 1 && <button type="button" onClick={handlePrevStep}>Back</button>}
                <button type="submit">{step === 3 ? 'Submit' : 'Next'}</button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <ReviewDetails values={formValues} />
      )}
    </div>
  );
};

export default MultiStepForm;
