import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class CharaList extends Component {

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
		                    <div class=" song-list-title">
		                        <font class="song-title">角色一览</font><br/>
		                        <hr/>
		                    </div>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/PAFF/#top"><img src={require("./images/paff1.png")} width="85%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12">
		                    <HashLink to="/NEKO/#top"><img src={require("./images/neko1.png")} width="90%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12">
		                    <HashLink to="/ROBO_Head/#top"><img src={require("./images/ROBO_Head1.png")} width="93%"/></HashLink>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/IVy/#top"><img src={require("./images/Ivy1.png")} width="62%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/Crystal PuNK/#top"><img src={require("./images/Crystal_PuNK1.png")} width="75%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/Miku/#top"><img src={require("./images/Miku1.png")} width="95%"/></HashLink>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/Xenon/#top"><img src={require("./images/xenon1.png")} width="105%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/ConneR/#top"><img src={require("./images/Conner1.png")} width="90%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/Cherry/#top"><img src={require("./images/Cherry1.png")} width="80%"/></HashLink>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/JOE/#top"><img src={require("./images/Joe1.png")} width="97%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/Aroma/#top"><img src={require("./images/Aroma1.png")} width="80%"/></HashLink>
		                </div>
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/Nora/#top"><img src={require("./images/Nora1.png")} width="84%"/></HashLink>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-4 col-sm-12 font-center">
		                    <HashLink to="/NekoDLC/#top"><img src={require("./images/Neko2.png")} width="95%"/></HashLink>
		                </div>
		            </div>
		            <br/><br/>
		        </div>
		        </Router>
		   </div>
		);
	}
}

export default CharaList;
