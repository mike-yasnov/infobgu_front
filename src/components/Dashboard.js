import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, Paper, IconButton } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Box className="dashboard-container">
      <Outlet />
      <Paper className="footer">
        <Box className="footer-container">
          <IconButton component={Link} to="schedule"><ScheduleIcon /></IconButton>
          <IconButton component={Link} to="students"><PeopleIcon /></IconButton>
          <IconButton component={Link} to="diskm"><StorageIcon /></IconButton>
          <IconButton component={Link} to="phonebook"><ContactsIcon /></IconButton>
          <IconButton component={Link} to="settings"><SettingsIcon /></IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;
