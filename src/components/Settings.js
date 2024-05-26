import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  const handleSupportChat = () => {
    console.log("Чат поддержки кликнут");
  };

  return (
    <Container>
      <Box className="settings-container">
        <Typography variant="h4" gutterBottom>
          Настройки
        </Typography>
        <Button variant="text" className="settings-button" onClick={handleSupportChat}>
          Чат поддержки
        </Button>
        <Button variant="text" className="settings-button" onClick={handleChangePassword}>
          Поменять пароль
        </Button>
        <Button variant="text" className="settings-button" onClick={handleLogout}>
          Выйти из аккаунта
        </Button>
      </Box>
    </Container>
  );
};

export default Settings;
