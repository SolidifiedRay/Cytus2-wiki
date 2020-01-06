import React, { Component } from 'react';
import SongPage from './routes/SongPage/SongPage';
import SongList from './routes/SongList/SongList';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Data from "./db/db"
import './App.css';

class App extends Component {
  render(){
  	const songs = Data.map((song)=>(
  		<Route
  		key={song.id}
  		path={'/'+ song.title} exact
  		render={(props) => <SongPage {...props} songID={""+song.id} />}
  		/>
  	))

    return (
    	<div>
    		<Nav />
			<Router>	
				<Route path='/songlist' exact component={SongList} />				  			
				{ songs }
			</Router>
		</div>
    );
  }
}

export default App;
