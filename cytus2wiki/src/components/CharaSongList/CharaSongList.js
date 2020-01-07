import React, { Component } from 'react';
import Data from '../../db/db';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class CharaSongList extends Component {
  
    render(){
        const character = this.props.character;
        const songList = Data.filter(song => {if(song.character === character) return song;});
        console.log(songList);
        const list = songList.map((song) =>
                <HashLink key={song.id} to={"/"+song.id+"/#top"}>
                    <font className="font-subtitle">{'•'+song.title}</font><br/>
                </HashLink>
        );

        return (
            <div>
                <Router>
            		<font className="song-subtitle"><b>曲子一览：</b></font><br/><br/>
                    { list }
                </Router>
        	</div>
        );
    }
}

export default CharaSongList;
