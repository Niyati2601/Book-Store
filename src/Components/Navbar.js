import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from './logo.png';


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/LoginPage');
  };

  const handleRegister = () => {
    navigate('/RegistrationPage');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" style={{ height: '30px' }} />
      </div>

      {/* Login/Register and Cart buttons */}
      <div>
        <Button onClick={handleLogin} color="inherit" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button onClick={handleRegister} color="inherit" style={{ marginRight: '10px' }}>
          Register
        </Button>
        <Button variant="outlined" style={{ marginRight: '10px' }}>Cart
          <ShoppingCartOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
