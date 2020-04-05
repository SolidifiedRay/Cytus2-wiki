import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class DifficultyList extends Component {

	render(){
		return (
			<div className="background">
				<Router>
				<div id="top"></div>
				<br/><br/><br/><br/>
		        <div class="content-box">
		            <br/><br/>
		            <div class="row">
		                <div class="col-md-9 col-sm-12">
		                    <div class=" song-list-title">
		                        <font class="song-title">难度表 V 2.9</font><br/>
		                        <hr/>
		                    </div>
		                    <div class="content">
		                        <font class="font-subtitle">
		                            非常感谢Team C2DC授权转载的难度表！
		                        </font>
		                        <a href="https://tieba.baidu.com/p/6554456582" target="_blank"><font class="font-subtitle">高清版本请戳这里</font></a><br/>
		                        *图片加载可能需要一些时间<br/><br/>
		                        <img src={require("./images/1.jpg")} width="95%"/>
		                        <img src={require("./images/2.jpg")} width="95%"/>
		                        <div id="overview"><img src={require("./images/3.jpg")} width="95%"/></div>
		                        <img src={require("./images/4.jpg")} width="95%"/>
		                        <img src={require("./images/5.jpg")} width="95%"/>
		                        <img src={require("./images/6.jpg")} width="95%"/>
		                        <div id="PAFF"><img src={require("./images/7.jpg")} width="95%"/></div>
		                        <img src={require("./images/8.jpg")} width="95%"/>
		                        <div id="NEKO#ΦωΦ"><img src={require("./images/9.jpg")} width="95%"/></div>
		                        <img src={require("./images/10.jpg")} width="95%"/>
		                        <img src={require("./images/12.jpg")} width="95%"/>
		                        <img src={require("./images/13.jpg")} width="95%"/>
		                        <div id="ROBO_Head"><img src={require("./images/14.jpg")} width="95%"/></div>
		                        <img src={require("./images/15.jpg")} width="95%"/>
		                        <img src={require("./images/16.jpg")} width="95%"/>
		                        <div id="Ivy"><img src={require("./images/17.jpg")} width="95%"/></div>
		                        <img src={require("./images/18.jpg")} width="95%"/>
		                        <img src={require("./images/19.jpg")} width="95%"/>
		                        <div id="Crystal PuNK"><img src={require("./images/20.jpg")} width="95%"/></div>
		                        <div id="Miku"><img src={require("./images/21.jpg")} width="95%"/></div>
		                        <div id="Xenon"><img src={require("./images/22.jpg")} width="95%"/></div>
		                        <div id="disclaimer"><img src={require("./images/23.jpg")} width="95%"/></div>
		                        <div id="ConneR"><img src={require("./images/24.jpg")} width="95%"/></div>
		                        <img src={require("./images/25.jpg")} width="95%"/>
		                        <div id="Cherry"><img src={require("./images/26.jpg")} width="95%"/></div>
		                        <div id="Joe"><img src={require("./images/27.jpg")} width="95%"/></div>
		                        <div id="Sagar"><img src={require("./images/28.jpg")} width="95%"/></div>
		                        <div id="Rin"><img src={require("./images/29.jpg")} width="95%"/></div>
		                        <div id="Aroma"><img src={require("./images/30.jpg")} width="95%"/></div>
		                        <div id="Nora"><img src={require("./images/31.jpg")} width="95%"/></div>
		                        <div id="Neko"><img src={require("./images/32.jpg")} width="95%"/></div>
		                        <div id="Staff"><img src={require("./images/33.jpg")} width="95%"/></div>
		                        <img src={require("./images/34.jpg")} width="95%"/>
		                        <img src={require("./images/35.jpg")} width="95%"/>
		                        <img src={require("./images/36.jpg")} width="95%"/>
		                        <img src={require("./images/37.jpg")} width="95%"/>
		                    </div>
		                </div>
		                <div class="col-md-3 col-sm-12" >
		                    <div class="difficulty-nav">
		                        <b><font class="index-link-font">目录</font><br/></b>
		                        <HashLink to="/difficultylist/#overview"><font class="font-subtitle">总览</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#PAFF"><font class="font-subtitle">PAFF</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#NEKO#ΦωΦ"><font class="font-subtitle">NEKO#ΦωΦ</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#ROBO_Head"><font class="font-subtitle">ROBO_Head</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Ivy"><font class="font-subtitle">Ivy</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Crystal PuNK"><font class="font-subtitle">Crystal PuNK</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Miku"><font class="font-subtitle">Miku</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Xenon"><font class="font-subtitle">Xenon</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#ConneR"><font class="font-subtitle">ConneR</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Cherry"><font class="font-subtitle">Cherry</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Joe"><font class="font-subtitle">Joe</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Sagar"><font class="font-subtitle">Sagar</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Rin"><font class="font-subtitle">Rin</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Aroma"><font class="font-subtitle">Aroma</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Nora"><font class="font-subtitle">Nora</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Neko"><font class="font-subtitle">Neko</font></HashLink><br/>
		                        <HashLink to="/difficultylist/#Staff"><font class="font-subtitle">Staff</font></HashLink><br/>
		                    </div>
		                </div>
		            <br/><br/><br/><br/>
		            </div>
		        </div>
		        </Router>
		   </div>
		);
	}
}

export default DifficultyList;
