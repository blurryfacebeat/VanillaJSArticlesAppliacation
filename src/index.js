'use strict';

import './components/card/card';

const testFunc = async () => {
  const resp = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

  console.log(321, resp);
};

await testFunc();
