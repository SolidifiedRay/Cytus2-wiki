import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class StoryOutline extends Component {

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
		                        <font class="font-title">重大事件时间线</font><br/>
		                        <hr/>
		                        <font class="font-subtitle">感谢NoHearter梳理的剧情 qq3207414592</font> 
		                        <a href="http://space.bilibili.com/17435569?share_medium=android&share_source=copy_link&bbid=LxstGCpOeBkuHSxINEg0UWMCMVJgUginfoc&ts=1548688570647">
		                            <font class="font-subtitle">b站链接</font>
		                        </a><br/>
		                        <font class="font-subtitle">当前更新到2.6版本的剧情</font> <br/>
		                        *手机端可以另存图片放大查看
		                        <img src={require("./images/1.0.png")} width="100%" />
		                        <img src={require("./images/2.6.png")} width="100%" />
		                    </div>
		                </div>
		            </div>
		            <br/><br/><br/>
		        </div>
		        </Router>
		   </div>
		);
	}
}

export default StoryOutline;
