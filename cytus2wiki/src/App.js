import React, { Component } from 'react';
import SongPage from './routes/SongPage/SongPage';
import SongList from './routes/SongList/SongList';
import DLCList from './routes/DLCList/DLCList';
import Nav from './components/Nav/Nav';
import Index from './routes/Index/Index';
import Update from './routes/Update/Update';
import AboutWiki from './routes/AboutWiki/AboutWiki';
import EditWiki from './routes/EditWiki/EditWiki';
import StoryOutline from './routes/StoryOutline/StoryOutline';
import AboutGame from './routes/AboutGame/AboutGame';
import DifficultyList from './routes/DifficultyList/DifficultyList';
import CharaPage from './routes/CharaPage/CharaPage';
import CharaList from './routes/CharaList/CharaList';
import CAPSO from './routes/CAPSO/CAPSO';
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
        <Route path={'/aboutgame'} exact component={AboutGame} />  
        <Route path={'/update'} exact component={Update} />  
        <Route path={'/aboutwiki'} exact component={AboutWiki} />  
        <Route path={'/editwiki'} exact component={EditWiki} />  
        <Route path={'/storyoutline'} exact component={StoryOutline} />  
        <Route path={'/charalist'} exact component={CharaList} />  
        <Route path={'/difficultylist'} exact component={DifficultyList} />
				<Route path={'/songlist'} exact component={SongList} />	
        <Route path={'/dlclist'} exact component={DLCList} /> 
        <Route path={'/CAPSO'} exact component={CAPSO} /> 
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
        <Route path={'/NekoDLC'} exact render={(props) => <CharaPage {...props} chara={"Neko"} />}/>      
        <Route path={'/Sagar'} exact render={(props) => <CharaPage {...props} chara={"Sagar"} />}/>        
        <Route path={'/Rin'} exact render={(props) => <CharaPage {...props} chara={"Rin"} />}/>   
				{ songs }
			</Router>
		</div>
    );
  }
}

export default App;
