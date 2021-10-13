import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => (
  <div className='m-auto antialiased font-sans font-serif font-mono text-center'>
    <h1 className='text-indigo-700'>Hello</h1>
  </div>
);

export default App;
