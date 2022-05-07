import { useDispatch } from 'react-redux';

import { peopleActions } from 'redux/people/actions';

type ClearPeopleData = () => void;

export const useClearPeopleData = (): ClearPeopleData => {
  const dispatch = useDispatch();

  return () => dispatch(peopleActions.clearPeopleData());
};
