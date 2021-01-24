import React, { useState, useRef, useContext } from "react";
import { Context } from "../lib/context";
import { Form, Div, DivData } from "../styles/PaymentFormStyled";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

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

  const expressions = {
    name: /^[a-zA-ZÀ-ӱ\s]*$/,
    lastname: /^[a-zA-ZÀ-ӱ\s]*$/,
    email: /^[a-zA-Z-_+\.]*@[a-zA-Z0-9-]*\.[a-zA-Z0-9-\.]*$/,
    cardholder: /^[a-zA-ZÀ-ӱ\s]+$/,
  };

  const { emptyCart } = useContext(Context);

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "error",
      summary: "Error Purchase!",
      detail: "Incorrect Data",
      life: 3000,
    });
  };

  const genderSelect = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  const onGenderChange = (e) => {
    setGender(e.value);
  };

  return (
    <div className="p-d-flex p-jc-center">
      <Toast ref={toast} />
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
                className={expressions.name.test(name) ? "" : "p-invalid"}
              />
            </label>
            <label>
              <h3>Last Name</h3>
              <InputText
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                className={
                  expressions.lastname.test(lastname) ? "" : "p-invalid"
                }
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
                className={expressions.email.test(email) ? "" : "p-invalid"}
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
          onClick={(e) => {
            e.preventDefault();
            if (
              name &&
              lastname &&
              birth &&
              email &&
              gender &&
              cardholder &&
              cardNumber &&
              expiration &&
              cvv
            ) {
              emptyCart();
            } else {
              showSuccess();
            }
          }}
        />
      </Form>
    </div>
  );
};

export default paymentForm;
