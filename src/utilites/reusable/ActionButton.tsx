import React from 'react'
import {Button, Loader, ButtonProps } from '@mantine/core'

interface Props extends ButtonProps {
    isLoading: boolean;
    onClick: () => void;
    children: React.ReactNode;   
    size?: ButtonProps['size'];
    fullWidth?: boolean;
    radius?: ButtonProps['radius'];
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
}

const ActionButton: React.FC<Props> = ({isLoading, onClick, children,  size,fullWidth,radius,variant,color}) => {
    return (
        <Button
        onClick={onClick}
         disabled={isLoading}
         variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            radius={radius}
         style={{ position: 'relative' }}
        >
            {isLoading && (
                <Loader size="sm" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' , color:"#008C73"}} />
            )}
            {children}
        </Button>
    )
}

export default ActionButton
