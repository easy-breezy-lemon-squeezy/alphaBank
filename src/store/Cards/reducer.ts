import { ICard } from '../../models/ICard';
import { ACTIONS } from './constants';
import { GAction } from '../../types/GAction';

interface ICardsState {
  cards: ICard[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: ICardsState = {
  cards: [] as ICard[],
  isLoading: false,
  hasError: false,
};

type Action =
  | GAction<ACTIONS.CARDS_REQUEST_END | ACTIONS.CARDS_REJECT_DATA | ACTIONS.CARDS_REQUEST_DATA>
  | GAction<ACTIONS.CARDS_RECEIVE_DATA, ICard[]>
  | GAction<ACTIONS.CARDS_DELETE_CARD | ACTIONS.CARDS_LIKE_CARD | ACTIONS.CARDS_UNLIKE_CARD, number>;

export const cardsRecuer = (state = initialState, action: Action): ICardsState => {
  switch (action.type) {
    case ACTIONS.CARDS_REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.CARDS_RECEIVE_DATA:
      return { ...state, cards: action.payload };
    case ACTIONS.CARDS_REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.CARDS_REQUEST_END:
      return { ...state, isLoading: false, hasError: false };
    case ACTIONS.CARDS_DELETE_CARD:
      const newCards = [...state.cards].filter((card) => card.id !== action.payload);
      return { ...state, cards: newCards };
    case ACTIONS.CARDS_LIKE_CARD:
      const likedCards = [...state.cards].map((card) => {
        if (card.id === action.payload) {
          card.liked = true;
        }

        return card;
      });

      return { ...state, cards: likedCards };
    case ACTIONS.CARDS_UNLIKE_CARD:
      const unlikedCards = [...state.cards].map((card) => {
        if (card.id === action.payload) {
          card.liked = false;
        }

        return card;
      });

      return { ...state, cards: unlikedCards };
    default:
      return state;
  }
};
