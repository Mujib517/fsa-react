import React from 'react';
import UserContext from './context/UserContext';
import { useState } from 'react/cjs/react.development';
import userService from './services/userService';

import Main from './Main';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(userService.isLoggedIn());

    return <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <Main />
    </UserContext.Provider>
}

export default App;
