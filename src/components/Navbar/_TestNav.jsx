import React from 'react';
import { render } from 'react-dom';

import { Router, Link, Match } from '@reach/router';

const App = (props) => (
    <div>
        <h1>Active Links</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
        {props.children}
    </div>
);

const NavLink = (props) => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                style: { color: isCurrent ? 'red' : 'blue' },
            };
        }}
    />
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

render(
    <Router>
        <App path='/'>
            <Home path='/' />
            <About path='about' />
        </App>
    </Router>,
    document.getElementById('root')
);
