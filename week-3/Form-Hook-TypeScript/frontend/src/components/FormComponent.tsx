import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type FormData = {name: string;email: string;age: number;gender: string; subscribe?: boolean;};

const FormComponent: React.FC = () => {
  const { register,  handleSubmit,  reset,  formState: { errors },} = useForm<FormData>();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return await axios.post('http://localhost:3001/formData', formData);
    },
    onSuccess: () => {
      alert('Form submitted successfully!');
      reset();
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>React Hook Form with React Query</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Name:</label>
          <input {...register('name', { required: 'Name is required' })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            {...register('age', {
              min: { value: 18, message: 'Minimum age is 18' },
              max: { value: 100, message: 'Maximum age is 100' },
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <select {...register('gender', { required: 'Gender is required' })}>
            <option value="">Select gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" {...register('subscribe')} /> Subscribe to newsletter
          </label>
        </div>

        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
