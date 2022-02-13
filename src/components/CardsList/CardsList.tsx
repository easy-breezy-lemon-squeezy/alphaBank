import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Common, Errors } from '../../constants/phrases';
import { useActions } from '../../hooks/useActions';
import { ICard } from '../../models/ICard';
import { cardsHasErrorSelector, cardsLoadingSelector, cardsSelector } from '../../store/Cards';
import { Button, LoadingSpinner } from '../../UI';
import { Card } from '../Card';
import * as UI from './CardsListStyles';

export const CardsList = () => {
  const { getCards } = useActions();

  const cards = useSelector(cardsSelector);
  const cardsIsLoading = useSelector(cardsLoadingSelector);
  const cardsHasErrorLoading = useSelector(cardsHasErrorSelector);

  const [showLikedCards, setShowLikedCards] = useState(false);
  const [likedCards, setLikedCards] = useState<ICard[]>([]);

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    const filteredLikedCards = cards.filter((card) => card.liked);
    setLikedCards(filteredLikedCards);
  }, [cards]);

  const showLikedCardsHandler = () => {
    setShowLikedCards((prev) => !prev);
  };

  const renderContent = () => {
    if (cardsHasErrorLoading) {
      return <UI.ErrorMessage>{Errors.NOT_FOUND}</UI.ErrorMessage>;
    } else if (cardsIsLoading) {
      return <LoadingSpinner />;
    }

    const targetCards = showLikedCards ? likedCards : cards;

    if (targetCards.length === 0) {
      return <UI.EmptyListMessage>{Common.EMPTY_LIST}</UI.EmptyListMessage>;
    }

    return targetCards.map((card) => <Card card={card} key={card.name + card.image_link} />);
  };

  return (
    <UI.PageWrapper>
      <Button
        onClick={showLikedCardsHandler}
        value={showLikedCards ? Common.SHOW_ALL_CARDS : Common.SHOW_LIKED_CARDS}
      />
      <UI.List>{renderContent()}</UI.List>
    </UI.PageWrapper>
  );
};
