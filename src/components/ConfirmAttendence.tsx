import { useState } from "react";
import { DEFAULT_FORM_DATA, ENDPOINT_DIRECTORY } from "../lib/Constants";
import type { ConfirmAttendenceProps } from "../lib/entities/ConfirmAttendenceProps";
import { HttpClient } from "../lib/entities/HttpClient";
import { SwitchAttendance } from "./SwitchAttendance";
import type { SwitchAttendanceProps } from "../lib/entities/SwitchAttendanceProps";

export const ConfirmAttendence = ({onClose}: ConfirmAttendenceProps) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [_, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);



  const httpClient = new HttpClient(ENDPOINT_DIRECTORY.EXCEL.BASE_URL)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    console.log("AJaaa", { name, value, type, checked })
    setFormData((prev) => {
      console.log("previous", {prev})
      return {
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }
    });
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

  const setWithPreviousValue = (value: any) => {
    setFormData((prev) => {
      return {
      ...prev,
      ...value
      }
    })
  }


  const listSwitchAttendace: SwitchAttendanceProps[] = [
    {
      title: "Asistiré a la ceremonia",
      checkedValue: formData.attendingCeremony, 
      voidFunction: setWithPreviousValue,
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
      voidFunction: setWithPreviousValue,
      valueFormData: {
        attendingCeremony: false,
        attendingParty: true,
        attendingBoth: false,
      },
      switchValue: "party"
    },
    {
      title: "Asistiré a la Ambos",
      checkedValue: formData.attendingBoth, 
      voidFunction: setWithPreviousValue,
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

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Nombres</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Nombres"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellidos</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Apellidos"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {
          listSwitchAttendace.map( (switchAttendaceComponent, index) => {
            return <SwitchAttendance key={`SwitchAttendance ${index}`} {...switchAttendaceComponent} />
          })
        }

        <button
          type="submit"
          className="home-button info-button"
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