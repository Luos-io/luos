import * as React from 'react';
import type { NextPage } from 'next';

import Introduction from 'components/introduction/introduction';
import Integration from 'components/integration/integration';
import Software from 'components/software/software';
import Anatomy from 'components/anatomy/anatomy';
import Powered from 'components/powered/powered';

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
