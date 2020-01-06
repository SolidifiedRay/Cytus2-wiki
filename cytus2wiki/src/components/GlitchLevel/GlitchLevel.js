import React, { Component } from 'react';
import Data from '../../db/db';

class GlitchLevel extends Component {
  
    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songColor = ""+songInfo.map((info) => (info.color));
        const songBPMUrl = songInfo.map((info) => (info.BPMUrl));
        const songGlitchLevel = songInfo.map((info) => (info.GlitchLevel));
        const songGlitchNote = songInfo.map((info) => (info.GlitchNote));
        const songGlitchLock = songInfo.map((info) => (info.GlitchLock));

        return (

            <tr>
                <td className={"song-table-content " + songColor }>
                    <font className="song-table-font">混乱</font>
                </td>
                <td className="song-table-content">
                    <font className="song-table-font">{ songGlitchLevel }</font>
                </td>
                <td className="song-table-content">
                    <font className="song-table-font">{ songGlitchNote }</font>
                </td>
                <td className="song-table-content">
                    <font className="song-table-font">{ songGlitchLock }</font>
                </td>
            </tr>
        );
    }
}

export default GlitchLevel;
