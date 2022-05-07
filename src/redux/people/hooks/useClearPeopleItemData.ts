import { useDispatch } from 'react-redux';

import { peopleActions } from 'redux/people/actions';

type ClearPeopleItemData = () => void;

export const useClearPeopleItemData = (): ClearPeopleItemData => {
  const dispatch = useDispatch();

  return () => dispatch(peopleActions.clearPeopleData());
};
