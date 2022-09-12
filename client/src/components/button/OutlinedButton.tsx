import React, { FC } from 'react';
import * as Styled from './button.styles';
import { ButtonProps } from './types';

const OutlinedButton:FC<ButtonProps> = ({ children, ref, ...props }) => {
  return (
    <Styled.OutlinedButton {...props}>
      {children}
    </Styled.OutlinedButton>
  );
};

export default OutlinedButton;