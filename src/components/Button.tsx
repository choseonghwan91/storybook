import React, { ButtonHTMLAttributes, useMemo } from "react";

type State = "primary" | "secondary" | "ghost" | "text" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  state?: State;
  icon?: JSX.Element;
}

const Button = ({ label, state = "primary", icon, ...rest }: Props) => {
  const BASE_BUTTON_CLASSES = "px-4 py-3 rounded-sm text-sm";

  const getState = (state: State) => {
    switch (state) {
      case "secondary":
        return "bg-slate-800 text-white border-2 border-slate-800 hover:bg-slate-700 hover:border-slate-700 active:bg-black active:border-black";
      case "ghost":
        return "bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-100 active:bg-blue-200";
      case "text":
        return "bg-transparent text-blue-500 border-2 border-transparent hover:bg-blue-100 hover:border-blue-100 active:bg-blue-200 active:border-blue-200";
      case "danger":
        return "bg-red-500 text-white border-2 border-red-500 hover:bg-red-700 hover:border-red-700 active:bg-red-900 active:border-red-900";
      default:
        return "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:outline";
    }
  };

  const computedClasses = useMemo(() => {
    const stateClass = getState(state);

    return [stateClass].join(" ");
  }, [state]);

  return (
    <button className={`${computedClasses} ${BASE_BUTTON_CLASSES}`} {...rest}>
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {icon && <span>{icon}</span>}
      </div>
    </button>
  );
};

export default Button;
