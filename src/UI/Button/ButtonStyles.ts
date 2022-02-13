import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Button = styled.button`
  transition: 0.2s;
  cursor: pointer;
  background: ${Colors.SECONDARY};
  height: 40px;
  color: ${Colors.WHITE};
  font-size: 16px;
  padding: 0 20px;
  border-radius: 20px;

  &:hover {
    background: ${Colors.SECONDARY_LIGHT};
  }
`;
