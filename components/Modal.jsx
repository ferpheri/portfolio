import React from "react";
import useLanguage from "./useLanguage";

const Modal = ({ show, onClose, title, message, isError }) => {
  const lang = useLanguage();
  if (!show) {
    return null;
  }
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
        <div
          className={`p-4 ${isError ? "bg-red-500" : "bg-indigo-900 dark:bg-emerald-900"} text-white`}
          style={{ direction: lang === "fa" ? "rtl" : "ltr" }}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div
          className="p-4 text-primary"
          style={{ direction: lang === "fa" ? "rtl" : "ltr" }}
        >
          <p>{message}</p>
        </div>
        <div
          className="flex justify-end p-4"
          style={{ direction: lang === "fa" ? "rtl" : "ltr" }}
        >
          <button
            onClick={onClose}
            className={`${isError ? "bg-red-500 text-white" : "bg-indigo-700 hover:bg-indigo-600 dark:bg-accent dark:hover:bg-accent-hover text-white dark:text-primary"} font-primary px-3 py-2 rounded-md`}
          >
            {lang === "fa" ? "بستن" : "close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
