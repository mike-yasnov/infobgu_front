import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Students.css';

const Students = () => {
  const [group, setGroup] = useState('');
  const [student, setStudent] = useState('');
  const [grades, setGrades] = useState([]);

  const handleGradeChange = (index, field, value) => {
    const newGrades = [...grades];
    newGrades[index][field] = value;
    setGrades(newGrades);
  };

  const handleAddRow = () => {
    setGrades([...grades, { date: '', grade: '' }]);
  };

  return (
    <Container>
      <Box className="students-container">
        <Typography variant="h4" gutterBottom>
          Студенты
        </Typography>
        <Box className="input-group">
          <TextField
            label="Группа"
            variant="outlined"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="ФИО студента"
            variant="outlined"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
        <TableContainer component={Paper}>
          <Table className="students-table">
            <TableHead>
              <TableRow>
                <TableCell>Дата</TableCell>
                <TableCell align="center">Н/Оценка</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grades.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      type="date"
                      value={row.date}
                      onChange={(e) => handleGradeChange(index, 'date', e.target.value)}
                      fullWidth
                      margin="none"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      value={row.grade}
                      onChange={(e) => handleGradeChange(index, 'grade', e.target.value)}
                      fullWidth
                      margin="none"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          <IconButton onClick={handleAddRow}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Students;
