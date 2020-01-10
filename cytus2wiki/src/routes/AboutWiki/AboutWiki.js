import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CharaInfoMarkdown from '../../components/CharaInfoMarkdown/CharaInfoMarkdown';

class AboutWiki extends Component {

	render(){

		return (
			<div className="background">
				<div id="top"></div>
				<br/><br/><br/><br/>
		        <div class="content-box">
		            <br/><br/>
		            <div class="row">
		                <div class="col-md-12 col-sm-12">
		                    <div class="content">
		                        <font class="font-title">关于wiki</font><br/>
		                        <hr/>
		                        <div class="font-subtitle" >
                       				<CharaInfoMarkdown url={"./CharaInfoMarkdown/AboutWiki.md"}/>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <br/><br/><br/>
		        </div>
		   </div>
		);
	}
}

export default AboutWiki;
