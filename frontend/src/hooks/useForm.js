import { useState } from 'react';

const useForm = (initialState) => {
  const [fieldValue, setFieldValue] = useState(initialState);
  const handleChange = (e) => {
    setFieldValue((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  return [fieldValue, handleChange];
};

export default useForm;
