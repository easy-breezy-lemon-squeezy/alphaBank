import { Dispatch } from 'redux';
import { ICard } from '../../models/ICard';
import { CardsServices } from '../../services/cardsServices';
import { ACTIONS } from './constants';

const getCards =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(requestData());

      const response = await CardsServices.getUsers();
      const data = response.data;

      const formattedData: ICard[] = data.map((card, index) => ({
        ...card,
        id: index,
      }));

      dispatch(receiveData(formattedData));
      dispatch(requestEnd());
    } catch (e) {
      console.log(e);
      dispatch(rejectData());
    }
  };

const deleteCard = (id: number) => ({
  type: ACTIONS.CARDS_DELETE_CARD,
  payload: id,
});

const likeCard = (id: number) => ({
  type: ACTIONS.CARDS_LIKE_CARD,
  payload: id,
});

const unlikeCard = (id: number) => ({
  type: ACTIONS.CARDS_UNLIKE_CARD,
  payload: id,
});

const requestData = () => ({
  type: ACTIONS.CARDS_REQUEST_DATA,
});

const receiveData = (payload: any) => ({
  type: ACTIONS.CARDS_RECEIVE_DATA,
  payload: payload,
});

const rejectData = () => ({
  type: ACTIONS.CARDS_REJECT_DATA,
});

const requestEnd = () => ({
  type: ACTIONS.CARDS_REQUEST_END,
});

export const cardsActions = {
  getCards,
  deleteCard,
  likeCard,
  unlikeCard,
};
