/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from 'components/Header/Header';
import Search from 'containers/Search/Search';
import { Routes } from 'types/Routes.types';
import Character from 'containers/Character/Character';

function App() {
  return (
	<>
		<Router>
			<Header />
			<Switch>
				<Route
					exact
					path={Routes.Search}
				>
					<Search />
				</Route>
				<Route
					exact
					path={Routes.Character}
				>
					<Character />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
