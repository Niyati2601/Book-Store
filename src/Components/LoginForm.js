import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    'email': '',
    'password': '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  

  const handleLogin = (values) => {
    const requestData = {
      email: values.email,
      password: values.password,
    };
  
    axios
      .post("https://book-e-sell-node-api.vercel.app/api/user/login", requestData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          toast.success("Login successful with API", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
  
          // Redirect to the home page or any other page after successful login
          
          navigate("/bookListing");
        } else {
          toast.error("Login failed with API", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed with API", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login or Create an Account</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <div style={{ display: 'flex', gap: '30px' }}>
        
          <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
            <h2>New Customers</h2>
            <ol style={{ listStyleType: 'circle', marginLeft: '20px' }}>
              <li>Faster checkout</li>
              <br></br>
              <li>Save multiple shipping addresses</li>
              <br></br>
              <li>View and track orders and more...</li>
            </ol>
            <Button variant="contained" component={Link} to="/registrationPage" style={{ alignSelf: 'bottom-left', marginTop: '60px' }}>
              Create an Account
            </Button>
          </div>

          {/* Registered Customers Container */}
          <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin: 'auto',  }}>
            <h2>Registered Customers</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <ErrorMessage name="email" component="div" />

                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <ErrorMessage name="password" component="div" />

                <Button type="submit" onClick={handleLogin} variant="contained" style={{ marginTop: '20px' }}>
                  Login
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
