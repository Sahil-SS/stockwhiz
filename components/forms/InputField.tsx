import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type InputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: any;
  error?: any;
  validation?: object;
  disabled?: boolean;
  value?: string;
};

const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation = {},
  disabled = false,
  value,
}: InputFieldProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='form-label'>
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        className={`form-input ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
        disabled={disabled}
        {...register(name, validation)}
      />
      {error && (
        <p className='text-sm text-red-500 mt-1'>{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
