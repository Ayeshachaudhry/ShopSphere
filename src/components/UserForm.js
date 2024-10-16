import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique IDs

const MyForm = () => {
  const [users, setUsers] = useState([]); // State to hold users

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  return (
    <div>
      <h2>Register User</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setUsers([...users, { id: uuidv4(), ...values }]); // Add new user with a unique ID
          resetForm(); // Reset form after submission
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      {/* Display users */}
      <div>
        <h3>Users List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyForm;
