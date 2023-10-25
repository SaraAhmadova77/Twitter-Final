import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6">Log in to Twitter</h2>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Phone, email, or username"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? <div className="text-red-500">{formik.errors.username}</div> : null}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Log in
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-blue-500">
          <p>Forgot password?</p>
          <p>·</p>
          <p>Sign up for Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
