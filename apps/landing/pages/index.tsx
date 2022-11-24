import type { NextPage } from 'next';

import Introduction from 'components/introduction';
import Integration from 'components/integration';
import Software from 'components/software';
import Anatomy from 'components/anatomy';
import Powered from 'components/powered';

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <Integration />
      <Software />
      <Anatomy />
      <Powered />
    </>
  );
};

export default Home;
