import React, { Component } from 'react';
import SongPage from './routes/SongPage/SongPage';
import SongList from './routes/SongList/SongList';
import Nav from './components/Nav/Nav';
import Index from './routes/Index/Index';
import CharaPage from './routes/CharaPage/CharaPage';
import { HashRouter as Router, Route } from 'react-router-dom';
import Data from "./db/db"
import './App.css';

class App extends Component {
  render(){
  	const songs = Data.map((song)=>(
  		<Route
  		key={song.id}
  		path={'/'+ song.id} exact
  		render={(props) => <SongPage {...props} songID={""+song.id} />}
  		/>
  	))

    return (
    	<div>
    		<Nav />
			<Router basename={process.env.PUBLIC_URL}>	
				<Route path={'/'} exact component={Index} />	
				<Route path={'/songlist'} exact component={SongList} />	
				<Route path={'/PAFF'} exact render={(props) => <CharaPage {...props} chara={"PAFF"} />}/>
        <Route path={'/NEKO'} exact render={(props) => <CharaPage {...props} chara={"NEKO#ΦωΦ"} />}/> 	
        <Route path={'/ROBO_Head'} exact render={(props) => <CharaPage {...props} chara={"ROBO_Head"} />}/>		  			
				{ songs }
			</Router>
		</div>
    );
  }
}

export default App;
