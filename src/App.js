import React from 'react';
import './styles/App.scss';
import {Map} from "./components/Map";
import {SearchBar} from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <SearchBar/>
            <Map/>
        </div>
    );
}

export default App;
