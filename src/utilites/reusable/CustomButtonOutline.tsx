import { Button,  ButtonProps } from "@mantine/core";


interface CustomButtonProps extends ButtonProps {
    label: string;
    onClick: () => void;
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
    size?: ButtonProps['size'];
    fullWidth?: boolean;
    radius?: ButtonProps['radius'];
}
const CustomButtonOutline = ({radius,label, onClick,  color, size, fullWidth}: CustomButtonProps) => {
    return (
        <Button
        onClick={onClick}
        variant="outline"
        color={color}
        size={size}
        fullWidth={fullWidth}
        radius={radius}
        >
            {label}
        </Button>
    )
}

export default CustomButtonOutline
