import React, { Component } from 'react';
import Home from './pages/home/homeView';
import { homeBloc } from './bloc';
import Routes from './router';



class App extends Component {
    render() {
        return (
            <div>
                <Home bloc={homeBloc} />
                <Home bloc={homeBloc} />
                <Routes />
            </div>

        )
    }
};

export default App;
