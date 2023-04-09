import React from "react";
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  return (
    <div className="termsAndConditions">
      <p className="termsAndCond1">
        By clicking on Sign up. you agree to Superapp{" "}
        <span>
          {" "}
          Terms and <br /> Conditions of Use
        </span>
      </p>
      <p className="termsAndCond2">
        To learn more about how Superapp collects, uses, shares and <br />{" "}
        protects your personal data please head Superapp{" "}
        <span>
          {" "}
          Privacy <br /> Policy
        </span>
      </p>
    </div>
  );
}
