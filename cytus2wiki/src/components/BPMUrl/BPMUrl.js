import React, { Component } from 'react';
import Data from '../../db/db';

class BPMUrl extends Component {
  
    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songBPMUrl = songInfo.map((info) => (info.BPMUrl));

        return (
            <div>
        		*bpm数据来源：
                <a href={songBPMUrl} target="_blank">
                    <font color="black">FANDOM CytusII wiki（英文wiki）</font>
                </a>
                <br/><br/>
        	</div>
        );
    }
}

export default BPMUrl;
