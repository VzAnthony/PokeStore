import React, { useState } from "react";
import styled from "styled-components";

import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

const Form = styled.form`
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin: 20px 0;
  }
`;

const DivData = styled.div`
  @media (min-width: 425px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    label {
      margin: 0 5px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-center;
    flex-wrap: wrap;

    label {
      margin: 0 5px;
    }
  }
`;
const paymentForm = () => {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [birth, setBirth] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [cardholder, setCardholder] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expiration, setExpiration] = useState(null);
  const [cvv, setCvv] = useState(null);

  const genderSelect = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  const onGenderChange = (e) => {
    setGender(e.value);
  };

  const confirm = () => {
    confirmDialog({
      message: "Are you sure you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      // accept: accept,
      // reject: reject,
    });
  };

  return (
    <div className="p-d-flex p-jc-center">
      <Form className="p-d-flex p-flex-column p-ai-center">
        <Div>
          <h2>Personal Information</h2>
          <DivData>
            <label>
              <h3>Name</h3>
              <InputText
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <h3>Last Name</h3>
              <InputText
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </label>
            <label>
              <h3>Date of Birth</h3>
              <Calendar
                value={birth}
                onChange={(e) => setBirth(e.value)}
                monthNavigator
                yearNavigator
                yearRange="1970:2030"
                required
              ></Calendar>
            </label>
            <label>
              <h3>Email</h3>
              <InputText
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </label>
            <div>
              <h3>Gender</h3>
              <Dropdown
                value={gender}
                options={genderSelect}
                onChange={onGenderChange}
                placeholder="Male/Female"
                required
              />
            </div>
          </DivData>
        </Div>
        <Div>
          <h2>Payment information</h2>
          <DivData>
            <label>
              <h3>Cardholder</h3>
              <InputText
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
                required
              />
            </label>
            <label>
              <h3>Card Number</h3>
              <InputMask
                placeholder="9999-9999-9999-9999"
                mask="9999-9999-9999"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.value)}
                required
              ></InputMask>
            </label>
            <label>
              <h3>Expiration</h3>
              <Calendar
                value={expiration}
                onChange={(e) => setExpiration(e.value)}
                view="month"
                dateFormat="mm/yy"
                yearNavigator
                yearRange="2010:2040"
                required
              ></Calendar>
            </label>
            <label>
              <h3>CVV</h3>
              <InputMask
                placeholder="123"
                mask="999"
                value={cvv}
                onChange={(e) => setCvv(e.value)}
                required
              ></InputMask>
            </label>
          </DivData>
        </Div>
        <Button
          label="Submit"
          icon="pi pi-check"
          type="submit"
          // onClick={confirm}
        />
      </Form>
    </div>
  );
};

export default paymentForm;
