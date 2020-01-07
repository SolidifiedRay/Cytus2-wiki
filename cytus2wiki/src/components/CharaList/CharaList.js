import React, { Component } from 'react';
import Data from '../../db/db';
import { HashLink } from 'react-router-hash-link';

class CharaList extends Component {
  
    render(){

        return (
            <div>
        		<font className="song-subtitle"><b>角色一览：</b></font><br/><br/>
                <HashLink to="/PAFF/#top">
                    <font className="font-subtitle">PAFF</font><br/><br/>
                </HashLink>
        	</div>
        );
    }
}

export default CharaList;
