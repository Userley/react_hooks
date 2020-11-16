import React, { useMemo } from 'react';
import { Router } from '@reach/router';
import Home from '../../pages/Home';
import UseEffectHook from '../../pages/UseEffectHook';
import UseStateHook from '../../pages/UseStateHook';
import Layout from '../Layout/Layout';
import UseReducerHook from '../../pages/UseReducerHook';
import UseCallBackHooks from '../../pages/UseCallBackHooks';
import UseMemoHook from '../../pages/UseMemoHook';
import UseRefHooks from '../../pages/UseRefHooks';

const App = () => {
  return (
    <Layout>
      <Router>
        <Home path='/' />
        <UseStateHook path='/useState/:userId' />
        <UseEffectHook path='/UseEffect' />
        <UseReducerHook path='/UseReducer' />
        <UseCallBackHooks path='/UseCallBack' />
        <UseMemoHook path='/UseMemoHook' />
        <UseRefHooks path='/UseRefHooks' />
      </Router>
    </Layout>
  );
};

export default App;
