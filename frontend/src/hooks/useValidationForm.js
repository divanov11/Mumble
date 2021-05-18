import { useState } from 'react';

const useValidationForm = ({ validation, onSubmit }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [key]: value,
    });
    if (isFormSubmitted) {
      setErrors({
        ...errors,
        [key]: !validation[key]?.(value),
      });
    }
  };

  const hasErrors = () => {
    const newErrors = {};
    Object.keys(validation).forEach((key) => (newErrors[key] = !validation[key](form[key] || '')));
    setErrors(newErrors);
    return Object.keys(validation).some((key) => newErrors[key]);
  };

  const _onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (!hasErrors()) {
      onSubmit();
    }
  };

  return [form, errors, _onSubmit, onInputChange];
};

export default useValidationForm;
