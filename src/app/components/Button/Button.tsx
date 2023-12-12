import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import "./Button.css";

export type TButtonProps = {
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  type?: "primary" | "secondary";
  children: ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
};

const Button: React.FC<TButtonProps> = ({
  className,
  htmlType = "button",
  type = "primary",
  children,
  size = "small",
  disabled,
  loading,
  icon,
  style,
  onClick,
  ...props
}) => {
  let customClass = "btn";

  switch (type) {
    case "primary":
      customClass += " btn-primary";
      break;
    case "secondary":
      customClass += " btn-secondary";
      break;
    default:
      break;
  }

  const buttonStyle: React.CSSProperties = {
    ...style,
  };

  return (
    <button
      type={htmlType}
      className={`${className} ${customClass} btn-${size} ${
        disabled ? "disabled" : ""
      }`}
      style={buttonStyle}
      {...props}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
