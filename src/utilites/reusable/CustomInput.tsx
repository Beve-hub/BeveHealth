import React, { useState } from 'react';
import { TextInputProps, TextInput } from '@mantine/core';
import { IconType } from 'react-icons/lib';
import {  IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface Props extends TextInputProps {
    icon: IconType;
    iconPosition: 'left' | 'right';
    type?: string;
}

const CustomInput = (pass: Props) => {
    const { icon: Icon, type = 'text', iconPosition = 'left', ...props } = pass;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const iconElement = type === 'password' ? (
        <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {isPasswordVisible ? <IoMdEyeOff size={16} /> : <IoMdEye size={16} />}
        </div>
    ) : (
        <Icon size={16} />
    );

    return (
        <TextInput
            {...props}
            type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
            rightSection={iconPosition === 'right' ? iconElement : null}
            leftSection={iconPosition === 'left' ? iconElement : null}
        />
    );
};

export default CustomInput;
