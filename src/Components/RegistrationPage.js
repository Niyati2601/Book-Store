import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    roleId: '',
  };

  const Navigate = useNavigate();

   const roleList = ([
    {roleId:'1', roleName:"Admin"},
    {roleId:'2', roleName:"Seller"},
    {roleId:'3', roleName:"Buyer"},
  ]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    roleId: Yup.string().required('Role is required'),
  });

  const handleSubmit = async (values) => {
    const requestData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      roleId: 0, // Set the initial value of roleId to 0
      password: values.password,
    };
  
    try {
      const response = await axios.post('https://book-e-sell-node-api.vercel.app/api/user', requestData);
      const { data } = response;
      if (response.status === 201) {
        console.log(data.firstName);
        toast.success('Registration successful with API', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
      localStorage.setItem('userDetails', JSON.stringify(data));
      Navigate.push('/bookListing');
    } catch (error) {
      console.error(error);
      toast.error('Registration failed with API', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form style={{ width: '100%' }}>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { m: 0.5 },
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                padding: '20px',
                borderRadius: '5px',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>Registration Page</h1>
              <h3>Personal Information</h3>
              <hr style={{ color: 'black' }} />
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                  <Field
                    name="firstName"
                    label="First Name"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                  />
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <Field
                    name="lastName"
                    label="Last Name"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                  <Field
                    name="email"
                    label="Email"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <FormControl fullWidth>
                    <Field
                      name="roleId"
                      variant="outlined"
                      as={Select}
                      label="Role"
                      error={touched.role && !!errors.role}
                      helperText={touched.role && errors.role}
                    >
                      <MenuItem value="" disabled>
                        Select Role
                      </MenuItem>
                      <MenuItem>Admin</MenuItem>
                      <MenuItem>Seller</MenuItem>
                      <MenuItem>Buyer</MenuItem>
                    </Field>
                  </FormControl>
                </div>
              </div>
              <h3>Login Information</h3>
              <hr style={{ color: 'black' }} />
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                  <Field
                    name="password"
                    label="Password"
                    type="password"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <Field
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    error={touched.confirmPassword && !!errors.confirmPassword}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                  />
                </div>
              </div>
              <Button variant="contained" onClick={handleSubmit} type="submit" style={{ marginTop: '20px', alignSelf: 'flex-start' }}>
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
