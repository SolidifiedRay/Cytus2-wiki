import React, { Component } from 'react';
import Data from '../../db/db';
import { HashLink } from 'react-router-hash-link';

class CharaList extends Component {
  
    render(){

        return (
            <div>
        		<font className="song-subtitle"><b>角色一览：</b></font><br/><br/>
                <HashLink to="/PAFF/#top">
                    <font className="font-subtitle">•PAFF</font><br/>
                </HashLink>
                <HashLink to="/NEKO#ΦωΦ/#top">
                    <font className="font-subtitle">•NEKO#ΦωΦ</font><br/>
                </HashLink>
                <HashLink to="/ROBO_Head/#top">
                    <font className="font-subtitle">•ROBO_Head</font><br/>
                </HashLink>
                <br/><br/>
        	</div>
        );
    }
}

export default CharaList;
