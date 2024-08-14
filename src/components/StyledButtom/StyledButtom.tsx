import { Button, ButtonProps, styled } from "@mui/material";
import { ReactNode } from "react";

// Interface para as propriedades do StyledButton, estendendo ButtonProps para aceitar propriedades do botão padrão
interface StyledButtonProps extends ButtonProps {
    children: ReactNode;
}

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
        backgroundColor: theme.palette.primary.light
    }
}));

const CustomStyledButton: React.FC<StyledButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default CustomStyledButton;
