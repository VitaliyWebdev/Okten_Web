import './App.css';
import {moviesService} from "./services";
import React from 'react'
import {BaseLayout} from "./layouts";
import {Home} from "./pages";

function App() {






    return (
        <BaseLayout>
            <Home/>
        </BaseLayout>
    );
}

export default App;
