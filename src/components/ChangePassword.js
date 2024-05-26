import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ChangePassword.css';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://127.0.0.1:5000/api/auth/change-password',
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      navigate('/settings');
    } catch (error) {
      console.error('Ошибка при смене пароля', error);
      if (error.response && error.response.status === 401) {
        navigate('/login');
      }
    }
  };

  return (
    <Container>
      <Box className="change-password-container">
        <Typography variant="h4" gutterBottom>
          Смена пароля
        </Typography>
        <TextField
          label="Старый пароль"
          variant="outlined"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Новый пароль"
          variant="outlined"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleChangePassword}>
          Сменить пароль
        </Button>
      </Box>
    </Container>
  );
};

export default ChangePassword;
