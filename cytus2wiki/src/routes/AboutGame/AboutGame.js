import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class AboutGame extends Component {

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
		                    <div class="content">
		                        <a name="about"></a>
		                        <font class="font-title">游戏简介</font><br/>
		                        <hr/>
		                    </div>
		                </div>
		            </div>
		            <br/>
		            <div class="row">
		                <div class="col-md-9 col-sm-12">
		                    <div class="content">
		                        <div class="about-page-font">
		                        	<div id="about"></div>
		                            官方简介<br/>
		                            Cytus II 是【雷亚游戏】倾注全力打造的音乐节奏游戏，承袭前作Cytus直觉简单的游戏方式，添加更多的拍点玩法，
		                            在画面与剧情上皆有更高水准的展现。
		                            本次音乐的多样性更是雷亚历年之最，收录涵盖世界各地如欧美、日韩、台湾等创作者的乐曲，
		                            乐曲丰富精致，是延续百万人期待的自信力作。
		                            <div id="notes"></div>
		                            <br/><br/>
		                            <hr/>
		                            Note一共有6种（具体操作可以在游戏内的教程中查看）<br/><br/>
		                            <img src={require("./images/normal.png")} width="100px;"/> 该note在白线扫过时准时点击即可<br/>
		                            <img src={require("./images/click.png")} width="100px;"/> 该note在白线扫过时准时点击并手指按住屏幕往其他方向滑动后松开手指<br/><br/>
		                            <img src={require("./images/hold.png")} width="100px;"/><img src={require("./images/long_hold.png")} height="190px;"/> 该note在白线扫过时点击(或者滑过）并一直按住直到中间白圈填满提示你松开<br/><br/>
		                            <img src={require("./images/chain.png")} width="100px;"/> 手指需要跟着线的形状滑动，并且要在白线经过一个note的时候准时滑过（点击），note间的虚线不算分<br/>
		                            <img src={require("./images/click_chain.png")} width="100px;"/> 第一个note需要准时点击，其余和上面那种一样
		                            <div id="scores"></div>
		                            <br/>
		                            <br/>
		                            <hr/>
		                            分数种类<br/>
		                            Note的评分有miss、 bad、 good、 白perfect、 金perfect<br/>
		                            曲子等级有Failed（700000以下）、 C（700000-799999）、B（800000-899999）、 A（900000-949999）、 S（949999-999999）、 MM（1000000 全部perfect)<br/>
		                            （应该）存在连击加分
		                            <div id="tp"></div>
		                            <br/>
		                            <br/>
		                            <hr/>
		                            TP（Technical Points）<br/>
		                            TP一般才是真正评价一首曲子的分数，跟按键的准度有关<br/>
		                            TP 100% 需要所有Note金perfect
		                            <br/>
		                            <div id="team"></div>
		                            <hr/>
		                            <b>Team Cytus<br/></b>
		                            <br/>
		                            监制 Executive Producer<br/>
		                            张翔 GuluJam Chang<br/>
		                            <br/>
		                            初始概念设计 Original Concept &amp Mastering<br/>
		                            游名杨 Ming-Yang Yu<br/>
		                            <br/>
		                            游戏总监 Game Director<br/>
		                            李勇霆 Tony Lee<br/>
		                            <br/>
		                            总程序 lead Programmer<br/>
		                            叶冠麟 Kuan-Lin Yeh<br/>
		                            <br/>
		                            高级程序员 Senior Game Programmer<br/>
		                            孙瑛泽 Lenba / 灆洢 Maplewing / Albert<br/>
		                            <br/>
		                            主游戏设计 Lead Game Designer<br/>
		                            黄泳龙 Stanley Vong<br/>
		                            <br/>
		                            游戏设计 Game Designer<br/>
		                            CJWang / 张舜凯 Taro Chang<br/>
		                            <br/>
		                            主美 Art Director<br/>
		                            ChingYeh<br/>
		                            <br/>
		                            美术 Art Designer<br/>
		                            Nkusa / Paindude / Pampus / Aub / 鐘有諒 / Huangh / NN / Ryori / KuanTien兔兔 / JK Star<br/>
		                            <br/>
		                            主环境美术 Lead Environment Artist<br/>
		                            Paindude<br/>
		                            <br/>
		                            UI Designer<br/>
		                            陈佩琪 Idril Chen<br/>
		                            <br/>
		                            主动画 Lead Animator<br/>
		                            KuanTien兔兔<br/>
		                            <br/>
		                            动画 Animator<br/>
		                            Nokusa / Aub / 吴东晟<br/>
		                            <br/>
		                            编剧 Story Created by<br/>
		                            Tony Lee &amp Kiva Wu &amp Kuro Hou<br/>
		                            <br/>
		                            音乐指导 Sound Director<br/>
		                            Ice / KIVΛ<br/>
		                            <br/>
		                            作曲 Sound Producer<br/>
		                            Ice / KIVΛ / SIHanatsuka / 3R2<br/>
		                            <br/>
		                            音效 Sound Effect Designer<br/>
		                            KIVΛ<br/>
		                            <br/>
		                            Sound Mastering<br/>
		                            KIVΛ<br/>
		                            SIHanatsuka<br/>
		                            
		                        </div>
		                    </div>
		                </div>
		                <div class="col-md-3 col-sm-12" >
		                    <div class="about-game-nav">
		                        <b><font class="index-link-font">目录</font><br/></b><br/>
		                        <HashLink to="/aboutgame/#about"><font class="font-subtitle">官方介绍</font></HashLink><br/>
		                        <HashLink to="/aboutgame/#notes"><font class="font-subtitle">Note的种类</font></HashLink><br/>
		                        <HashLink to="/aboutgame/#scores"><font class="font-subtitle">分数种类</font></HashLink><br/>
		                        <HashLink to="/aboutgame/#tp"><font class="font-subtitle">TP介绍</font></HashLink><br/>
		                        <HashLink to="/aboutgame/#team"><font class="font-subtitle">Team Cytus官方成员</font></HashLink><br/>
		                    </div>
		                </div>
		            </div>
		            <br/><br/><br/><br/>
		        </div>
		        </Router>
		   </div>
		);
	}
}

export default AboutGame;
