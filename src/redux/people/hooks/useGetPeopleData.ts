import { useDispatch } from 'react-redux';

import { peopleActions } from 'redux/people/actions';

type GetPeopleData = () => void;

export const useGetPeopleData = (): GetPeopleData => {
  const dispatch = useDispatch();

  return () => dispatch(peopleActions.fetchData.request({}));
};
