import React from 'react';
import { Container, Typography, Box, TextField } from '@mui/material';
import './PhoneBook.css';

const PhoneBook = () => {
  return (
    <Container>
      <Box className="phonebook-container">
        <Typography variant="h4" gutterBottom>
          Телефонная книга
        </Typography>
        <Box className="search-box">
          <Typography variant="body1" gutterBottom>
            Чтобы позвонить на внутренние номера, наберите 500-008 и трехзначный внутренний номер.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Введите ФИО, должность или e-mail сотрудника, название структурного подразделения, аудиторию или номер телефона (только цифры)
          </Typography>
          <TextField
            variant="outlined"
            placeholder="..."
            fullWidth
          />
        </Box>
        <Box className="contacts-box">
          <Typography variant="h5" gutterBottom>
            Контакты
          </Typography>
          <Box className="social-icons">
            <img src="https://img.icons8.com/?size=100&id=13977&format=png&color=000000" alt="VK" />
            <img src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="YouTube" />
            <img src="https://img.icons8.com/?size=100&id=19622&format=png&color=000000" alt="OK" />
            <img src="https://img.icons8.com/?size=100&id=Smsl6LYXtHfF&format=png&color=000000" alt="Дзен" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PhoneBook;
