import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Pagination,
  TextField,
} from '@mui/material';

const ContactsTable = ({ contacts, updateContact, deleteContact }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleEdit = (contact) => {
    const updatedContact = { ...contact, firstName: prompt('Enter new name:', contact.firstName) };
    updateContact(contact.id, updatedContact);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      deleteContact(id);
    }
  };

  const paginatedContacts = contacts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedContacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phoneNumber}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(contact)} variant="outlined">
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(contact.id)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(contacts.length / rowsPerPage)}
        page={currentPage}
        onChange={(e, page) => setCurrentPage(page)}
        sx={{ mt: 2 }}
      />
    </TableContainer>
  );
};

export default ContactsTable;
