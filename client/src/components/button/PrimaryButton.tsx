import React, { FC } from 'react';
import * as Styled from './button.styles';
import { ButtonProps } from './types';

const PrimaryButton:FC<ButtonProps> = ({ children, ref, ...props }) => {
  return (
    <Styled.PrimaryButton {...props}>
      {children}
    </Styled.PrimaryButton>
  );
};

export default PrimaryButton;