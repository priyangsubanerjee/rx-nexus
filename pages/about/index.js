import Navbar from "@/components/Navbar";
import React from "react";

function About() {
  return (
    <div>
      <Navbar />
      <div className="px-16 py-20">
        <h1 className="text-4xl font-semibold text-neutral-800">About us</h1>
        <p className="text-sm leading-7 mt-5 max-w-4xl text-neutral-600">
          We are a group of students that are passionate about making use of
          technology to improve healthcare. We believe that every person,
          regardless of income or region, is entitled to secure and efficient
          medication. However, due to the quantity of fraudulent and overpriced
          pharmaceuticals in India, many find it difficult and expensive to get
          the prescriptions they require. Our medication tracking system is
          intended to alleviate this problem by tracking pharmaceuticals from
          the factory to the patient. Using QR codes, we preserve information
          about each medicine, such as its kind, quantity, batch number,
          expiration date, and price. This information is stored in a secure
          database that is accessible only to the government and approved
          healthcare practitioners.
        </p>
      </div>
    </div>
  );
}

export default About;
