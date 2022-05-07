import { useDispatch } from 'react-redux';

import { peopleItemActions } from 'redux/people/actions';

type GetPeopleItemData = (id: string) => void;

export const useGetPeopleItemData = (): GetPeopleItemData => {
  const dispatch = useDispatch();

  return (id: string) => dispatch(peopleItemActions.fetchItemData.request({ id }));
};
