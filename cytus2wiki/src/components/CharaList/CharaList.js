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
                <HashLink to="/Ivy/#top">
                    <font className="font-subtitle">•Ivy</font><br/>
                </HashLink>
                <HashLink to="/Crystal PuNK/#top">
                    <font className="font-subtitle">•Crystal PuNK</font><br/>
                </HashLink>
                <HashLink to="/Miku/#top">
                    <font className="font-subtitle">•Miku</font><br/>
                </HashLink>
                <HashLink to="/Xenon/#top">
                    <font className="font-subtitle">•Xenon</font><br/>
                </HashLink>
                <HashLink to="/ConneR/#top">
                    <font className="font-subtitle">•ConneR</font><br/>
                </HashLink>
                <HashLink to="/Cherry/#top">
                    <font className="font-subtitle">•Cherry</font><br/>
                </HashLink>
                <HashLink to="/JOE/#top">
                    <font className="font-subtitle">•JOE</font><br/>
                </HashLink>
                <HashLink to="/Aroma/#top">
                    <font className="font-subtitle">•Aroma</font><br/>
                </HashLink>
                <HashLink to="/Nora/#top">
                    <font className="font-subtitle">•Nora</font><br/>
                </HashLink>
                <br/><br/>
        	</div>
        );
    }
}

export default CharaList;
