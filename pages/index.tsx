import Box from '../src/components/Box';
import Social from '../src/components/Social';
import Title from '../src/components/Title';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen">
      <Title />

      <Social />
    </div>
  );
};

export default Home;
