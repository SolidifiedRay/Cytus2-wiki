import React, { Component } from 'react';
import Data from '../../db/db';

class CharaSongList extends Component {
  
    render(){
        const character = this.props.character;
        const songList = Data.filter(song => {if(song.character === character) return song;});
        console.log(songList);
        const list = songList.map((song) =>
                <a key={song.id} href={"/"+song.title}>
                    <font className="font-subtitle">{song.title}</font><br/><br/>
                </a>
        );

        return (
            <div>
        		<font className="song-subtitle"><b>曲子一览：</b></font><br/><br/>
                { list }
        	</div>
        );
    }
}

export default CharaSongList;
