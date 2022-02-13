import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  background: ${Colors.BACKGROUND};
`;

export const List = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

export const ErrorMessage = styled.p`
  color: ${Colors.RED};
  font-size: 16px;
`;

export const EmptyListMessage = styled.p`
  color: ${Colors.WHITE};
  font-size: 16px;
`;
