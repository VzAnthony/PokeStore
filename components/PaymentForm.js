import React, { useState } from "react";
import { Form, Div, DivData } from "../styles/PaymentFormStyled";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

const paymentForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

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
