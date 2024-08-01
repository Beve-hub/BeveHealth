// src/utilities/reusable/CustomInput.tsx
import { useState } from 'react';
import { TextInputProps, TextInput, Box, Text } from '@mantine/core';
import { IconType } from 'react-icons/lib';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface Props extends TextInputProps {
  icon: IconType;
  iconPosition: 'left' | 'right';
  type?: string;
  label?: string;
}

const CustomInput = (pass: Props) => {
  const { icon: Icon, type = 'text', iconPosition = 'left', label, ...props } = pass;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const iconElement = type === 'password' ? (
    <Box onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {isPasswordVisible ? <IoMdEyeOff size={16} /> : <IoMdEye size={16} />}
    </Box>
  ) : (
    <Icon size={16} />
  );

  return (
    <Box>
      {label && <Text style={{ marginBottom: '4px', textAlign:'left' }}>{label}</Text>}
      <Box style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: '8px' }}>
        {iconPosition === 'left' && <Box>{iconElement}</Box>}
        <TextInput
          {...props}
          type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
          rightSection={iconPosition === 'right' ? iconElement : null}
          leftSection={iconPosition === 'left' ? iconElement : null}
          
        />
       
      </Box>
    </Box>
  );
};

export default CustomInput;
