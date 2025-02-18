import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { APP_NAME } from "./constants/constants";
// Pages
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Volunteer from "./pages/Volunteer";
import Organization from "./pages/Organization";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";
// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ErrorMessage } from "./components/ErrorMessages";

function App() {
  useEffect(() => {
    document.title = APP_NAME;
  }, []);

  const [errorMessages, setErrorMessages] = useState([]);

  const addErrorMessage = (message, title = "Error") => {
    const id = Date.now();
    setErrorMessages((prevMessages) => [
      ...prevMessages,
      { id, message: "Log-in attempt failed!", title: "Error" },
    ]);
    setTimeout(() => {
      setErrorMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );
    }, 10000);
  };

  const deleteErrorMessage = (id) => {
    setErrorMessages((prevErrors) =>
      prevErrors.filter((error) => error.id !== id)
    );
  };

  return (
    <div data-theme="lemonade" className="dark min-h-screen font-poppins text-sm text-primary-content">
      <BrowserRouter>
        <Header/>
        <div className="w-full">
          {errorMessages.map((msg) => (
            <ErrorMessage
              key={msg.id}
              deleteSelf={deleteErrorMessage}
              message={msg.message}
              title={msg.title}
              id={msg.id}
            />
          ))}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <Main>
                <Routes>
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/register" element={<Register />} />
                  {/* Protected Routes */}
                  <Route
                    path="/dashboard"
                    element={<Dashboard addErrorMessage={addErrorMessage} />}
                  />
                  <Route path="/volunteer" element={<Volunteer />} />
                  <Route path="/organization" element={<Organization />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
