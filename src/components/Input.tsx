import React, { InputHTMLAttributes, useCallback, useMemo } from "react";
import Cancel from "@/assets/icons/Cancel";
import ErrorIcon from "@/assets/icons/ErrorIcon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleReset: () => void;
  label?: string;
  errorMsg?: string;
}

const Input = ({ handleReset, label, errorMsg, ...rest }: Props) => {
  const getIcon = useCallback(() => {
    if (rest.disabled) return null;
    if (!!errorMsg)
      return (
        <div className="absolute right-3">
          <ErrorIcon />
        </div>
      );
    if (!!rest.value)
      return (
        <button className="absolute right-3" onClick={handleReset}>
          <Cancel />
        </button>
      );
  }, [errorMsg, rest.value]);

  const BASE_INPUT_CLASSES =
    "bg-gray-100 pl-4 pr-9 py-3 outline-none text-sm border-2 placeholder:text-gray-400 placeholder:text-sm text-black disabled:text-gray-300 disabled:placeholder:text-gray-300 disabled:border-transparent";

  const getStatus = () => {
    if (!!errorMsg) return "border-red-500";
    if (!rest.value) return "border-transparent border-b-gray-300 focus:border-blue-500 hover:border-b-blue-500";
    if (!!rest.value) return "border-blue-500 focus:border-blue-500 hover:border-b-blue-500";
  };

  const computedClasses = useMemo(() => {
    const statusClass = getStatus();
    return [statusClass].join(" ");
  }, [rest.value, errorMsg]);

  return (
    <div>
      {label && (
        <div className={`text-black text-xs h-7 flex items-center ${rest.disabled && "text-gray-300"}`}>{label}</div>
      )}
      <div className="flex items-center relative">
        <input className={`${BASE_INPUT_CLASSES} ${computedClasses}`} {...rest} />
        {getIcon()}
      </div>
      <div className="text-red-500 text-xs h-7 flex items-center">{errorMsg}</div>
    </div>
  );
};

export default Input;
