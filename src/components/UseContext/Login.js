import React, { useContext } from 'react';
import CurrentUserAppContext from '../providers/CurrentUserApp';

const Login = () => {
  const userCurrentApp = useContext(CurrentUserAppContext);
  return (
    <React.Fragment>
      <div>Usuario: {userCurrentApp.Name}</div>
    </React.Fragment>
  );
};

export default Login;
