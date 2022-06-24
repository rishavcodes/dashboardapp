import React from "react";
import "./app.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
// import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Myprofile from "./pages/profile/Myprofile";
import Fees from "./pages/fees/Fees";
import Result from "./pages/result/Result";
import Form from "./pages/form/Form";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      // label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      // label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      // label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      // label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      // label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Router className="App">
      <Navbar />

      <div className="container">
        <Sidebar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}

          <Route path="/Myprofile">
            <Myprofile />
          </Route>

          <Route path="/courses">
            <Courses />
          </Route>

          <Route path="/fees">
            <Fees />
          </Route>

          <Route path="/Result">
            <Result />
          </Route>

          <Route className="form" path="/Form">
            <form onSubmit={handleSubmit}>
              <h1>Fill the details</h1>
              {inputs.map((input) => (
                <Form
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <button className="formButton">Submit</button>
            </form>
          </Route>

          <Route path="/Settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
