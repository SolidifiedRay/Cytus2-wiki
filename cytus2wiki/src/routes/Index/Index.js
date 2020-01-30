import React, { Component } from 'react';
import Background from './images/main_bg.jpg';

var backgroundimg = {
	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat", 
	backgroundAttachment:"fixed",
	backgroundPosition: "center", 
	backgroundSize:"100% 100%"
}

class Index extends Component {

	render(){

		return (
			<div class="main-background" style={backgroundimg}>
				<div id="top"></div>
				<br/><br/><br/><br/>
		        <div class="container">
		            <div class="row">
		                <div class="col-md-8 col-sm-12">
		                    <font class="font-title">Cytus II Wiki</font><br/>
		                    <hr/>
		                    <img src={require('./images/main_theme2.jpg')} width="96%"/><br/><br/>
		                    
		                    <div class="nav-box nav-box-1">
		                        <div class="scrollbar">
		                            <div class="container index-ui-container">
		                            <div class="row">
		                                <div class="col-md-6 col-sm-12">
		                                    <a href=""><img src={require('./images/game_play.jpg')} class="nav-ui"/></a>
		                                    <br/><br/>
		                                </div>
		                                <div class="col-md-6 col-sm-12">
		                                    <a href=""><img src={require('./images/character.jpg')} class="nav-ui"/></a>
		                                    <br/><br/>
		                                </div>
		                            </div>
		                            <div class="row">
		                                <div class="col-md-6 col-sm-12">
		                                    <a href=""><img src={require('./images/song.jpg')} class="nav-ui"/></a>
		                                    <br/><br/>
		                                </div>
		                                <div class="col-md-6 col-sm-12">
		                                    <a href=""><img src={require('./images/list.jpg')} class="nav-ui"/></a>
		                                    <br/><br/>
		                                </div>
		                            </div>
		                            <div class="row">
		                                <div class="col-md-6 col-sm-12">
		                                    <a href=""><img src={require('./images/update.jpg')} class="nav-ui"/></a>
		                                    <br/><br/>
		                                </div>
		                            </div>
		                        </div>
		                        </div>
		                    </div>
		                </div>

		                <div class="col-md-4 col-sm-12 center">
		                	<br/><br/>
		                    <font class="index-link-font">相关链接</font><br/><br/>
		                    <a href="https://www.rayark.com/" target="_blank"><font class="font-subtitle">Rayark Inc.</font></a><br/>
		                    <a href="https://www.rayark.com/g/cytus2/" target="_blank"><font class="font-subtitle">官方网站</font></a><br/>
		                    <a href="https://weibo.com/cytusII?topnav=1&wvr=6&topsug=1" target="_blank"><font class="font-subtitle">官方微博</font></a><br/><br/>
		                    <a href="https://tieba.baidu.com/f?kw=cytus2" target="_blank"><font class="font-subtitle">Cytus2 贴吧</font></a><br/>
		                    <a href="https://www.taptap.com/app/153415" target="_blank"><font class="font-subtitle">安卓国服下载链接</font></a><br/>
		                    <a href="https://itunes.apple.com/cn/app/id1316883372" target="_blank"><font class="font-subtitle">ios国服下载链接</font></a><br/><br/>
		                    <font class="font-subtitle">wiki 交流q群 ： 260032920</font><br/>
		                    <a href="https://www.weibo.com/5121541026/profile?rightmod=1&wvr=6&mod=personinfo" target="_blank"><font class="font-subtitle">wiki个人微博：@SolidifiedRay</font></a>
		                    <br/><br/>
		                    <img src={require('./images/rayark.png')} width="80%"/><br/><br/><br/><br/><br/><br/>
		                    <br/><br/><br/>
		                </div>
		            </div>
		        </div>
		   </div>
		);
	}
}

export default Index;
