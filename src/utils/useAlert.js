import { useState } from "react";

export const useAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success"); 
  const [alertMessage, setAlertMessage] = useState("");

  const handleAlertMessage = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return {
    showAlert,
    alertSeverity,
    alertMessage,
    handleAlertMessage,
    handleCloseAlert,
  };
};
