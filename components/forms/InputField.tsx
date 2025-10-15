import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const InputField = ({name,label,placeholder,type="text",register,error,validation,disabled,value}:FormInputProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>
            {label}
        </Label>
        <Input
        type={type}
        id={name}
        placeholder={placeholder}
        className={`form-input ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`} 
        disabled={disabled}
        value={value} 
        />
        {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  )
}

export default InputField