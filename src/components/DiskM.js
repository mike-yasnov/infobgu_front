import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, IconButton, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogTitle, Menu, MenuItem } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './DiskM.css';

const DiskM = () => {
  const [items, setItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [newItemName, setNewItemName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAddItem = (isFolder) => {
    setCurrentItem(null);
    setNewItemName('');
    setOpenDialog(true);
    setAnchorEl(null);
  };

  const handleEditItem = (item) => {
    setCurrentItem(item);
    setNewItemName(item.name);
    setOpenDialog(true);
    setAnchorEl(null);
  };

  const handleDeleteItem = (item) => {
    setItems(items.filter(i => i !== item));
    setAnchorEl(null);
  };

  const handleSaveItem = () => {
    if (currentItem) {
      setItems(items.map(i => i === currentItem ? { ...i, name: newItemName } : i));
    } else {
      setItems([...items, { name: newItemName, isFolder: true }]);
    }
    setOpenDialog(false);
  };

  const handleOpenMenu = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentItem(null);
  };

  return (
    <Container>
      <Box className="diskm-container">
        <Typography variant="h4" gutterBottom>
          Диск М
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Button variant="contained" color="primary" onClick={() => handleAddItem(true)} startIcon={<AddIcon />}>
            Добавить папку
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleAddItem(false)} startIcon={<AddIcon />}>
            Добавить документ
          </Button>
        </Box>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} button>
              {item.isFolder ? <FolderIcon /> : <InsertDriveFileIcon />}
              <ListItemText primary={item.name} />
              <IconButton onClick={(event) => handleOpenMenu(event, item)}>
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleAddItem(false)}>Добавить документ</MenuItem>
          <MenuItem onClick={() => handleEditItem(currentItem)}>Переименовать</MenuItem>
          <MenuItem onClick={() => handleDeleteItem(currentItem)}>Удалить</MenuItem>
        </Menu>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{currentItem ? 'Переименовать элемент' : 'Добавить элемент'}</DialogTitle>
          <DialogContent>
            <TextField
              label="Название"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
            <Button onClick={handleSaveItem} color="primary">Сохранить</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default DiskM;
