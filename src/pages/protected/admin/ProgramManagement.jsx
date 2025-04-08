import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Add as AddIcon,
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';

const ProgramManagement = () => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: 'Business Incubation Program',
      category: 'Business',
      status: 'active',
      participants: 25,
      startDate: '2024-03-01',
      endDate: '2024-09-01',
    },
    {
      id: 2,
      name: 'Digital Skills Workshop',
      category: 'Education',
      status: 'upcoming',
      participants: 0,
      startDate: '2024-04-01',
      endDate: '2024-06-30',
    },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(0);
  };

  const handleEdit = (program) => {
    setSelectedProgram(program);
    setEditMode(true);
    setOpenDialog(true);
  };

  const handleAdd = () => {
    setSelectedProgram({
      name: '',
      category: 'Business',
      status: 'upcoming',
      participants: 0,
      startDate: '',
      endDate: '',
      description: '',
      capacity: 30,
    });
    setEditMode(false);
    setOpenDialog(true);
  };

  const handleDelete = async (programId) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      setPrograms(programs.filter(program => program.id !== programId));
    }
  };

  const handleSave = async () => {
    try {
      if (editMode) {
        setPrograms(programs.map(program => 
          program.id === selectedProgram.id ? selectedProgram : program
        ));
      } else {
        setPrograms([...programs, { ...selectedProgram, id: programs.length + 1 }]);
      }
      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving program:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'upcoming': return 'info';
      case 'completed': return 'default';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(search.toLowerCase()) ||
    program.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Program Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Program
        </Button>
      </Box>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            placeholder="Search programs..."
            value={search}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Participants</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPrograms
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((program) => (
                  <TableRow key={program.id}>
                    <TableCell>{program.name}</TableCell>
                    <TableCell>{program.category}</TableCell>
                    <TableCell>
                      <Chip
                        label={program.status}
                        color={getStatusColor(program.status)}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PeopleIcon sx={{ mr: 1, fontSize: 'small' }} />
                        {program.participants}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarIcon sx={{ mr: 1, fontSize: 'small' }} />
                        {`${program.startDate} - ${program.endDate}`}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(program)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(program.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredPrograms.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {editMode ? 'Edit Program' : 'Add New Program'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Program Name"
                  value={selectedProgram?.name || ''}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={selectedProgram?.category || 'Business'}
                    onChange={(e) => setSelectedProgram({ ...selectedProgram, category: e.target.value })}
                  >
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Agriculture">Agriculture</MenuItem>
                    <MenuItem value="Technology">Technology</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={selectedProgram?.status || 'upcoming'}
                    onChange={(e) => setSelectedProgram({ ...selectedProgram, status: e.target.value })}
                  >
                    <MenuItem value="upcoming">Upcoming</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  value={selectedProgram?.startDate || ''}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, startDate: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  value={selectedProgram?.endDate || ''}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, endDate: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Capacity"
                  type="number"
                  value={selectedProgram?.capacity || ''}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, capacity: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  value={selectedProgram?.description || ''}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, description: e.target.value })}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProgramManagement; 