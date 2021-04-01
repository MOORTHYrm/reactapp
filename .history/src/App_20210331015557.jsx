import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from './containers/Proficiency';
import Education from "./containers/Education";
import Experience from './containers/Experience';
import Projects from './containers/Projects';
import GithubProfile from './containers/GithubProfile'
const App = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => (
                    <>
                        <Navigation />
                        <Greetings/>
                        <Skills />
                        <Proficiency />
                        <Education />
                        <Experience />
                        <Projects />
                        <GithubProfile />
                    </>
                )}/>
            </Switch>
        </BrowserRouter>,
        <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <button>Toggle theme</button>
        <h1>It's a light theme!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
     );
}
 
export default App;