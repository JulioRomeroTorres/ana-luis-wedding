import { useState } from "react";
import { DEFAULT_FORM_DATA, ENDPOINT_DIRECTORY } from "../lib/Constants";
import type { ConfirmAttendenceProps } from "../lib/entities/ConfirmAttendenceProps";
import { HttpClient } from "../lib/entities/HttpClient";
import { SwitchAttendance } from "./SwitchAttendance";
import type { SwitchAttendanceProps } from "../lib/entities/SwitchAttendanceProps";

export const ConfirmAttendence = ({onClose}: ConfirmAttendenceProps) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);



  const httpClient = new HttpClient(ENDPOINT_DIRECTORY.EXCEL.BASE_URL)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    console.log("AJaaa", { name, value, type, checked })
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const rersponseHttpClient = await httpClient.post("", formData)
      console.log(`Response HttpClient ${rersponseHttpClient}`);

      setSubmitSuccess(true);
      setFormData(DEFAULT_FORM_DATA);
      onClose();
      
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el formulario. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const listSwitchAttendace: SwitchAttendanceProps[] = [
    {
      title: "Asistiré a la ceremonia",
      checkedValue: formData.attendingCeremony, 
      voidFunction: setFormData,
      valueFormData: {
        attendingCeremony: true,
        attendingParty: false,
        attendingBoth: false,
      },
      switchValue: "ceremony"
    },
    {
      title: "Asistiré a la fiesta",
      checkedValue: formData.attendingParty, 
      voidFunction: setFormData,
      valueFormData: {
        attendingCeremony: false,
        attendingParty: true,
        attendingBoth: false,
      },
      switchValue: "party"
    },
    {
      title: "Asistiré a la Ambos (Terrible lo que pasara)",
      checkedValue: formData.attendingBoth, 
      voidFunction: setFormData,
      valueFormData: {
        attendingCeremony: false,
        attendingParty: false,
        attendingBoth: true,
      },
      switchValue: "both"
    }
  ]

  return (
    <div className="attendance-container">
      <h2>Confirmar Asistencia</h2>
      <form onSubmit={handleSubmit} className="attendance-form">
        <input
          type="text"
          name="firstName"
          placeholder="Nombres"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Apellidos"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {
          listSwitchAttendace.map( (switchAttendaceComponent, index) => {
            return <SwitchAttendance key={`SwitchAttendance ${index}`} {...switchAttendaceComponent} />
          })
        }

        <button
          type="submit"
          className="info-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        <button
          type="button"
          className="close-popup-button close-top-right"
          onClick={onClose}
        >
          ×
        </button>
      </form>
    </div>
  );

}