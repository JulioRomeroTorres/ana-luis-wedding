import type { SwitchAttendanceProps } from "../lib/entities/SwitchAttendanceProps";

export const SwitchAttendance = (args: SwitchAttendanceProps) => {
  
  const {
    title, checkedValue, voidFunction, valueFormData, switchValue
  } = args;

  return (
    <div className="switch-wrapper">
    <span>{title}</span>
    <label className="switch">
      <input
        type="radio"
        name="attending"
        value={switchValue}
        checked={checkedValue}
        onChange={() =>
          voidFunction(valueFormData)
        }
      />
      <span className="slider"></span>
    </label>
  </div>
  );
}

