import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import Swal from "sweetalert2";

const AuthModal = ({ show, handleClose, setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login authentication
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        Swal.fire("Success!", "Logged in successfully!", "success");
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        handleClose();
      } else {
        Swal.fire("Error!", "Invalid email or password.", "error");
      }
    } else {
      // Handle signup
      if (formData.password !== formData.confirmPassword) {
        Swal.fire("Error!", "Passwords do not match.", "error");
      } else {
        const newUser = { firstName: formData.firstName, lastName: formData.lastName, email: formData.email, password: formData.password };
        localStorage.setItem("user", JSON.stringify(newUser));
        Swal.fire("Success!", "Account created successfully!", "success");
        setIsLogin(true);
      }
    }

    // Reset form fields
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <LoginModal show={show} onHide={handleClose} centered>
      <ModalContent>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <Title>{isLogin ? "Login" : "Sign Up"}</Title>
        <FormContainer onSubmit={handleSubmit}>
          {/* Only show the email and password fields for login */}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <>
              {/* Show fields for sign up in the specified order */}
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </>
          )}

          <SubmitButton type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </SubmitButton>
        </FormContainer>

        <SwitchText onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Not a Pet Heaven Society Member? Sign Up Now!"
            : "Already a Pet Heaven Society Member? Login"}
        </SwitchText>
      </ModalContent>
    </LoginModal>
  );
};

// Styled Components
const LoginModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 400px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  margin: auto;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #bb7b6b;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-family: "Poppins", serif;
  color: #333;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #bb7b6b;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #a15f56;
  }
`;

const SwitchText = styled.p`
  color: #bb7b6b;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export default AuthModal;
