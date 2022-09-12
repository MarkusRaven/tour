import React, { FC } from 'react';
import * as Styled from './headerStyles';

const Header:FC = () => {
  const menu = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Table',
      path: '/table'
    }
  ]

  return (
    <div>
      <Styled.Header>
        {menu.map((item) => (
          <Styled.LinkItem key={item.path}>
            <Styled.Link
              to={item.path}
            >
              {item.name}
            </Styled.Link>
          </Styled.LinkItem>
        ))}
      </Styled.Header>
    </div>
  );
};

export default Header;