import { createContext } from 'react';

let userApp = {
  Name: 'Invitado',
  Token: '',
};

const setCurrentUserApp = (obj) => {
  userApp = { userApp, ...obj };
};

const CurrentUserAppContext = createContext(null);

export { userApp, setCurrentUserApp };
export default CurrentUserAppContext;
