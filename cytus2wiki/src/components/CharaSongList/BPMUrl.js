import React, { Component } from 'react';
import Data from '../../db/db';

class CharaSongList extends Component {
  
    render(){
        const character = this.props.character;
        const songList = Data.filter(song => {if(song.character === character) return song;});

        return (
            <div>
        		<font class="song-subtitle"><b>曲子一览：</b></font><br/><br/>
        	</div>
        );
    }
}

export default CharaSongList;
