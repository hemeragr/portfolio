import React, { useState } from "react";
import "./Form.scss";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Nuevo mensaje de formulario de contacto";
    const body = `Nombre: ${nombre} Email: ${email}  Mensaje: ${mensaje}`;

    const mailtoLink = `mailto:hemeraguerrero15@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  return (
    <form className="form-contact" onSubmit={handleSubmit}>
      <div className="camp">
        <label className="form-text" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="txt-input"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="camp">
        <label className="form-text" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="txt-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="camp-text">
        <label className="form-text" htmlFor="mensaje">
          Cuéntame tus ideas...
        </label>
        <textarea
          className=" txt-input"
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
      </div>

      <button className="button-send " type="submit">
        &gt;
      </button>
    </form>
  );
}

export default ContactForm;
