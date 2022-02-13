import styled, { css } from 'styled-components';
import { Colors } from '../../constants/colors';

interface ILikeIconProps {
  liked: boolean;
}

export const CardWrapper = styled.div`
  position: relative;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 240px;
  margin: 15px;
  padding: 15px 25px;
  border-radius: 25px;
  background: ${Colors.SECONDARY};
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  bottom: 20px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: 0.2s;
    width: 25px;
    height: 25px;
    fill: ${Colors.GRAY};
  }

  &:hover {
    svg {
      fill: ${Colors.RED};
    }
  }
`;

export const LikeIconWrapper = styled(IconWrapper)`
  ${({ liked }: ILikeIconProps) =>
    (liked &&
      css`
        svg {
          fill: ${Colors.RED};
        }
      `) ||
    (!liked &&
      css`
        svg {
          fill: ${Colors.GRAY};
        }
      `)}
`;

export const DeleteIconWrapper = styled(IconWrapper)``;
