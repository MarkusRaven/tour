import styled from "styled-components";
import { ButtonProps } from "./index";

export const Button = styled.button<ButtonProps>`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
`

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.primary.contrastText};
  &:hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }
`

export const OutlinedButton = styled(Button)`
  color: ${props => props.theme.colors.primary.main};
  border: 1px solid ${props => props.theme.colors.primary.main};
  &:hover {
    border-color: ${props => props.theme.colors.primary.hover};
  }
`