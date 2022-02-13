import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { ICard } from '../../models/ICard';
import { DeleteIcon, LikeIcon } from '../Icons';
import * as UI from './CardStyles';

interface ICardsProps {
  card: ICard;
}

export const Card: React.FC<ICardsProps> = ({ card }) => {
  const [liked, setLiked] = useState(card.liked);
  const { deleteCard, likeCard, unlikeCard } = useActions();

  const deleteCardHandler = () => {
    deleteCard(card.id);
  };

  const likeCardHandler = () => {
    if (liked) {
      setLiked(false);
      return unlikeCard(card.id);
    }

    setLiked(true);
    return likeCard(card.id);
  };

  return (
    <UI.CardWrapper>
      <UI.Image src={card.image_link} />
      <UI.Description>{card.name}</UI.Description>
      <UI.IconsWrapper>
        <UI.LikeIconWrapper onClick={likeCardHandler} liked={liked}>
          <LikeIcon />
        </UI.LikeIconWrapper>
        <UI.DeleteIconWrapper onClick={deleteCardHandler}>
          <DeleteIcon />
        </UI.DeleteIconWrapper>
      </UI.IconsWrapper>
    </UI.CardWrapper>
  );
};
