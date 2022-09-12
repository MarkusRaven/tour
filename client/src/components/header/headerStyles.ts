import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 30px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: ${props => props.theme.colors.main.main}
`

export const LinkItem = styled.li`
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.colors.primary.main}
`