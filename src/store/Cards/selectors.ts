import { IReduxState } from '..';

export const cardsSelector = (state: IReduxState) => state.cardsRecuer.cards;
export const cardsLoadingSelector = (state: IReduxState) => state.cardsRecuer.isLoading;
export const cardsHasErrorSelector = (state: IReduxState) => state.cardsRecuer.hasError;
