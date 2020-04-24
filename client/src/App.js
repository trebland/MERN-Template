import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './components/app';
import NoMatch from './components/noMatch';

const App = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Users} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

export default App;