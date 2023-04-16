import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    console.log(user);
    
    return (
        <div>
            <h1>This is Header</h1>
             { user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Home;