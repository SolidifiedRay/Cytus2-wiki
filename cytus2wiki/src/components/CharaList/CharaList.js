import React, { Component } from 'react';
import Data from '../../db/db';

class CharaList extends Component {
  
    render(){

        return (
            <div>
        		<font className="song-subtitle"><b>角色一览：</b></font><br/><br/>
                <a href={"/"}>
                    <font className="font-subtitle">PAFF</font><br/><br/>
                </a>
        	</div>
        );
    }
}

export default CharaList;
