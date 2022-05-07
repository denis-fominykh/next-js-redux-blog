import type { NextPage } from 'next';
import styled from 'styled-components/macro';

import { AppHeadTitle } from 'components/AppHeadTitle';
import { Footer } from 'components/Footer';
import { Main } from 'components/Main';

export const Container = styled.div`
  padding: 0 2rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <AppHeadTitle />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;
