import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import './FormComponent.css';

const FormComponent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      return axios.post('http://localhost:3001/formData', formData);
    },
    onSuccess: () => {
      alert('Form submitted successfully!');
      reset();
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">React Hook Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="form-input"
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email format',
                },
              })}
              className="form-input"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="age" className="form-label">Age:</label>
            <input
              id="age"
              type="number"
              {...register('age', {
                required: 'Age is required',
                min: { value: 18, message: 'Minimum age is 18' },
                max: { value: 100, message: 'Maximum age is 100' },
              })}
              className="form-input"
            />
            {errors.age && <p className="error-message">{errors.age.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              id="gender"
              {...register('gender', { required: 'Gender is required' })}
              className="form-select"
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="newsletter" className="checkbox-label">
              <input
                id="newsletter"
                type="checkbox"
                {...register('subscribe')}
              />
              Subscribe to newsletter
            </label>
          </div>

          <button
            type="submit"
            disabled={mutation.isLoading}
            className="submit-button"
          >
            {mutation.isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {mutation.isSuccess && mutation.data?.data && (
          <div className="api-response">
            <h3>Response from API:</h3>
            <pre>{JSON.stringify(mutation.data.data, null, 2)}</pre>
          </div>
        )}

        {mutation.isError && (
          <div className="api-error">
            Error: {mutation.error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
