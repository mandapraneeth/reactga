import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from "react-ga";
import Routing from './component/Routing'
import ReactGA from 'react-ga';
ReactGA.initialize('G-EJ1GBKXDCK');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<Routing/>, document.getElementById('root'))