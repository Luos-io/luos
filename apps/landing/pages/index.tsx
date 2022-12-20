import Introduction from 'components/introduction';
import Integration from 'components/integration';
import Howto from 'components/howto';
import Anatomy from 'components/benefits';
import Prefooter from 'components/prefooter';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <Integration />
      <Howto />
      <Anatomy />
      <Prefooter />
    </>
  );
};

export default Home;
