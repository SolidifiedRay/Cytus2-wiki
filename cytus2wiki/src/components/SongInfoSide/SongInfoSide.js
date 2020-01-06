import React, { Component } from 'react';
import CharaSongList from '../CharaSongList/CharaSongList';
import CharaList from '../CharaList/CharaList';
import Data from '../../db/db';

class SongInfoSide extends Component {
  
    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songCharacter = songInfo.map((info) => (info.character));
        const charaLogoUrl = songInfo.map((info) => (info.logoUrl));

        return (
            <div>
                <br/>
        		<font className="song-title">Character:</font><br/>
                <a href=''>
                    <font className="song-subtitle">{ songCharacter }</font><br/><br/><br/>
                </a>
                <div className="chara-logo"><a href=''>
                    <img src={require('' + charaLogoUrl)} className="chara-logo-size" />
                </a></div><br/>
                <hr/><br/>
                <CharaSongList character={""+songCharacter} />
                <hr/><br/>
                <CharaList />
        	</div>
        );
    }
}

export default SongInfoSide;
