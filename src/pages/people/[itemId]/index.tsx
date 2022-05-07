import { NextPage, GetServerSidePropsResult, GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { Loader } from 'components/Loader';
import { ROUTER_PATHS } from 'constants/routerPaths';
import { PageHeader, PageContent, ButtonReverseLink } from 'pages/people/[itemId]/styled';
import { useGetPeopleItemData, useClearPeopleItemData } from 'redux/people/hooks';
import { selectPeopleItemData, selectPeopleItemLoader } from 'redux/people/selectors';

export interface PeopleItemPageProps {
  itemId: string;
}

export const getServerSideProps = (
  content: GetServerSidePropsContext,
): GetServerSidePropsResult<PeopleItemPageProps> => {
  const itemId = content.query.itemId as PeopleItemPageProps['itemId'];

  return { props: { itemId } };
};

const PeopleItem: NextPage<PeopleItemPageProps> = ({ itemId }): JSX.Element => {
  const getPeopleData = useGetPeopleItemData();
  const clearPeopleItemData = useClearPeopleItemData();

  const loader = useSelector(selectPeopleItemLoader, shallowEqual);
  const { name, gender, mass, height, birthYear } = useSelector(selectPeopleItemData, shallowEqual);

  useEffect(() => {
    if (itemId) getPeopleData(itemId);

    return () => clearPeopleItemData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <PageHeader>
            <h1>{name}</h1>
            <ButtonReverseLink href={ROUTER_PATHS.PEOPLE._}>Back</ButtonReverseLink>
          </PageHeader>
          <PageContent>
            <p>Gender: {gender}</p>
            <p>Mass: {mass}</p>
            <p>Height: {height}</p>
            <p>Birth year: {birthYear}</p>
          </PageContent>
        </>
      )}
    </div>
  );
};

export default PeopleItem;
