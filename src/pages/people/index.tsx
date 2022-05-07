import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { Loader } from 'components/Loader';
import { ROUTER_PATHS } from 'constants/routerPaths';
import { ItemsList, PageHeader } from 'pages/people/styled';
import { useGetPeopleData, useClearPeopleData } from 'redux/people/hooks';
import { selectPeopleData, selectPeopleLoader } from 'redux/people/selectors';

const People: NextPage = (): JSX.Element => {
  const getPeopleData = useGetPeopleData();
  const clearPeopleData = useClearPeopleData();
  const people = useSelector(selectPeopleData, shallowEqual);
  const loader = useSelector(selectPeopleLoader, shallowEqual);

  useEffect(() => {
    getPeopleData();

    return () => clearPeopleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeader>
        <h1>People</h1>
      </PageHeader>
      <ItemsList>
        {loader ? (
          <Loader />
        ) : (
          people.map(({ name, url, birthYear }, idx) => (
            <Link key={url} href={ROUTER_PATHS.PEOPLE.BY_ID.replace(':id', (idx + 1).toString())}>
              <li>
                <h3>{name}</h3>
                Birth year: {birthYear}
              </li>
            </Link>
          ))
        )}
      </ItemsList>
    </>
  );
};

export default People;
