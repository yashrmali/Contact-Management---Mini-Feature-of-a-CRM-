import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

const ContactForm = ({ addContact }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newContact = { id: Date.now(), ...data };
    addContact(newContact);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
    >
      <TextField label="First Name" {...register('firstName')} required />
      <TextField label="Last Name" {...register('lastName')} required />
      <TextField label="Email" {...register('email')} type="email" required />
      <TextField label="Phone Number" {...register('phoneNumber')} required />
      <TextField label="Company" {...register('company')} />
      <TextField label="Job Title" {...register('jobTitle')} />
      <Button type="submit" variant="contained">
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
