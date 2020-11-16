import React, { useState } from 'react';
import CurrentUserAppContext, {
  userApp,
  setCurrentUserApp,
} from '../providers/CurrentUserApp';

import UseContext from '../../pages/UseContext';
import Layout from '../Layout/Layout';

const AppContext = () => {
  const [signUp, setSignUp] = useState(false);
  const onSignUpApp = () => {
    setCurrentUserApp({
      Name: 'Renato De la Rosa',
      Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    });
    setSignUp(!signUp);
  };
  return (
    <Layout>
      <CurrentUserAppContext.Provider value={userApp}>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <br />
              <UseContext />
            </div>
            <div className="col-3">
              <button className="btn btn-success" onClick={onSignUpApp}>
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </CurrentUserAppContext.Provider>
    </Layout>
  );
};

export default AppContext;
