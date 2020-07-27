import React from 'react';
import './App.css';
import Routes from './routes';

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes />
        </React.Suspense>
    );
};

export default App;
