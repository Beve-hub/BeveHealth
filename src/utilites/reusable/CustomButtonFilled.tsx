import { Button } from "@mantine/core";
import { ButtonProps } from "@mantine/core";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

interface CustomButtonProps extends ButtonProps {
    label: string;
    onClick: () => void;
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
    size?: ButtonProps['size'];
    fullWidth?: boolean;
    radius?: ButtonProps['radius'];
    role?: "backward" | "forward"; 
}

const CustomButtonFilled = (props: CustomButtonProps) => {
    const { label, onClick, variant, color, size, fullWidth, radius, role } = props;
    return (
        <Button
            onClick={onClick}
            variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            radius={radius}
            style={{ display: 'flex', justifyContent: 'space-between' }} // Align content
        >
            {role === 'backward' && <MdKeyboardDoubleArrowLeft size={24} />}
            <span style={{paddingRight:130}}>{label}</span>
            {role === 'forward' && <MdKeyboardDoubleArrowRight size={24} />}
        </Button>
    );
}

export default CustomButtonFilled;
