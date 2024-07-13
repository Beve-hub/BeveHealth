import { Select } from '@mantine/core';
import React from 'react'

interface Props {
    label: string;
    placeholder: string;
    data: string;
}

const CustomSelect = (pass:Props) => {
    const { label, placeholder, data } = pass;
    return (
        <Select>
            label={label}
            placeholder={placeholder}
            data={data}
        </Select>
    )
}

export default CustomSelect
