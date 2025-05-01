import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { Snackbar, Alert } from "@mui/material";
import { useAlert } from "./utils/useAlert";

const App = () => {
  const { handleAlertMessage, ...alertRest } = useAlert();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact handleAlertMessage={handleAlertMessage} />
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={alertRest.showAlert}
          onClose={alertRest.handleCloseAlert}
          autoHideDuration={3000}
        >
          <Alert
            onClose={alertRest.handleCloseAlert}
            elevation={6}
            variant="filled"
            severity={alertRest.alertSeverity}
          >
            {alertRest.alertMessage}
          </Alert>
        </Snackbar>
      </div>
    </BrowserRouter>
  );
};

export default App;
