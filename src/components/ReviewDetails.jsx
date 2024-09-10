import React from 'react';

const ReviewDetails = ({ values }) => {
  return (
    <div className="form-section">
      <h2>Review Your Details</h2>
      <ul>
        <li><strong>First Name:</strong> {values.firstName}</li>
        <li><strong>Last Name:</strong> {values.lastName}</li>
        <li><strong>Email:</strong> {values.email}</li>
        <li><strong>Address:</strong> {values.address}</li>
        <li><strong>City:</strong> {values.city}</li>
        <li><strong>Postal Code:</strong> {values.postalCode}</li>
        <li><strong>Card Number:</strong> {values.cardNumber}</li>
        <li><strong>Expiry Date:</strong> {values.expiryDate}</li>
        <li><strong>CVV:</strong> {values.cvv}</li>
      </ul>
    </div>
  );
};

export default ReviewDetails;
