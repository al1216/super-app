import React from "react";
import HAndL from './HeadingAndLoginOptions.jsx';
import Form from './Form.jsx';
import TAndC from './TermsAndConditions.jsx';
import './Right.css';

export default function Right() {
  return (
    <div className="right">
      <HAndL></HAndL>
      <Form></Form>
      <TAndC></TAndC>
    </div>
  );
}
