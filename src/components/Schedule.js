import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import ruLocale from 'date-fns/locale/ru';
import axios from 'axios';
import './Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    updateDaysOfWeek(selectedDate);
    fetchScheduleData(selectedDate);
  }, [selectedDate]);

  const updateDaysOfWeek = (date) => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(date, i);
      days.push({
        day: format(day, 'd EE', { locale: ruLocale }),
        date: day
      });
    }
    setDaysOfWeek(days);
  };

  const fetchScheduleData = async (date) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://127.0.0.1:5000/api/schedule/get-schedule',
        { date: format(date, 'yyyy-MM-dd') },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setScheduleData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных расписания', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container>
      <Box className="schedule-container">
        <Typography variant="h4" gutterBottom>
          Расписание
        </Typography>
        <Typography variant="h6" gutterBottom>
          ФИО преподавателя
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
            <DatePicker
              label="Выберите дату"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box className="days-of-week-container">
          {daysOfWeek.map((day, index) => (
            <Button key={index} variant="contained" className="day-button">
              {day.day}
            </Button>
          ))}
        </Box>
        <Box className="schedule-details">
          {scheduleData.map((item, index) => (
            <Box className="schedule-item" key={index}>
              <Typography variant="h6">{item.time}</Typography>
              <Typography>{item.room}</Typography>
              <Typography>{item.subject}</Typography>
              <Typography>{item.group}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Schedule;
