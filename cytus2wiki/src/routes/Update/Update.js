import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CharaInfoMarkdown from '../../components/CharaInfoMarkdown/CharaInfoMarkdown';

class Update extends Component {

	render(){

		return (
			<div className="background">
				<Router>
				<div id="top"></div>
				<br/><br/><br/><br/>
		        <div class="content-box">
		            <br/><br/>
		            <div class="row">
		                <div class="col-md-12 col-sm-12">
		                    <div class="content">
		                        <font class="font-title">游戏版本更新 （当前wiki版本为 2.8-2.85）</font><br/>
		                        <hr/>
		                        <div class="font-subtitle" >
                       				<CharaInfoMarkdown url={"./CharaInfoMarkdown/Update.md"}/>
			                        <hr/>
			                        <br/>
			                        Neko 更新曲目:<br/>
			                        Rei - Catalyst - 3/7/11<br/>
			                        <br/>
			                        Crystal 更新曲目：<br/>
			                        The Cross (feat. Silvia Su) - Lyc - 4/6/11<br/>
		                        </div>
		                        <br/><br/>
		                    </div>
		                </div>
		            </div>
		            <br/><br/><br/><br/><br/><br/>
		        </div>
		        </Router>
		   </div>
		);
	}
}

export default Update;
