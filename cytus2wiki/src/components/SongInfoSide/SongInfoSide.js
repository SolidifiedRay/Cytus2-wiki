import React, { Component } from 'react';
import CharaSongList from '../CharaSongList/CharaSongList';
import CharaList from '../CharaList/CharaList';
import { HashLink } from 'react-router-hash-link';
import Data from '../../db/db';

class SongInfoSide extends Component {
  
    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songCharacter = songInfo.map((info) => (info.character));
        const charaLogoUrl = songInfo.map((info) => (info.logoUrl));
        const character = songInfo.map((info) => (info.character));
        const charaUrl = character;

        return (
            <div>
                <br/>
        		<font className="song-title">Character:</font><br/>
                <HashLink to={"/"+charaUrl+"/#top"}>
                    <font className="song-subtitle">{ songCharacter }</font><br/><br/><br/>
                </HashLink>
                <div className="chara-logo"><HashLink to={"/"+charaUrl+"/#top"}>
                    <img src={require('' + charaLogoUrl)} className="chara-logo-size" />
                </HashLink></div><br/>
                <hr/><br/>
                <CharaSongList character={""+songCharacter} />
                <hr/><br/>
                <CharaList />
        	</div>
        );
    }
}

export default SongInfoSide;
