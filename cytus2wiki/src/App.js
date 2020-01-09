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
        <Route path={'/Ivy'} exact render={(props) => <CharaPage {...props} chara={"Ivy"} />}/>     			 
        <Route path={'/Crystal PuNK'} exact render={(props) => <CharaPage {...props} chara={"Crystal PuNK"} />}/> 
        <Route path={'/Miku'} exact render={(props) => <CharaPage {...props} chara={"Miku"} />}/>          
        <Route path={'/Xenon'} exact render={(props) => <CharaPage {...props} chara={"Xenon"} />}/>       
        <Route path={'/ConneR'} exact render={(props) => <CharaPage {...props} chara={"ConneR"} />}/>     
        <Route path={'/Cherry'} exact render={(props) => <CharaPage {...props} chara={"Cherry"} />}/>      
        <Route path={'/JOE'} exact render={(props) => <CharaPage {...props} chara={"JOE"} />}/>           
        <Route path={'/Aroma'} exact render={(props) => <CharaPage {...props} chara={"Aroma"} />}/>        
        <Route path={'/Nora'} exact render={(props) => <CharaPage {...props} chara={"Nora"} />}/>      
				{ songs }
			</Router>
		</div>
    );
  }
}

export default App;
