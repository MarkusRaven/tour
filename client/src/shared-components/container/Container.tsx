import React, { FC } from 'react';
import * as Styled from './containerStyles';


const Container:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

export default Container;