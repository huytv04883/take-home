import React, { CSSProperties, useState } from "react";
import "./InputBase.css";

export type TInputBaseProps = {
  className?: string;
  type?: "text" | "password" | "email";
  fieldName?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  status?: "" | "error" | "warning" | "success";
  style?: CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBase: React.FC<TInputBaseProps> = ({
  className,
  type = "text",
  fieldName,
  label,
  placeholder,
  disabled,
  allowClear = true,
  status = "",
  style,
  onChange,
}) => {
  const [query, setQuery] = useState("");

  const inputStyle: React.CSSProperties = {
    ...style,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange?.(e);
  };

  return (
    <div
      className={`${className} c-field ${
        fieldName ? "c-field-" + fieldName : ""
      }${status}`}
    >
      {label && (
        <label className="c-label">
          <span>{label}</span>
        </label>
      )}
      <div className="c-control">
        <input
          className="input-text"
          id={fieldName}
          name={fieldName}
          type={type}
          value={query}
          placeholder={placeholder}
          onChange={handleInputChange}
          disabled={disabled}
          style={inputStyle}
        />
        {query.length > 0 && allowClear && (
          <div className="c-action">
            <button onClick={() => setQuery("")}>x</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputBase;
