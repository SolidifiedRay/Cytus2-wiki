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
		                        <font class="font-title">重大事件时间线 (ver. 2.85)</font><br/>
		                        <hr/>
		                        <font class="font-subtitle">电脑端请点击图片后用← →箭头滑动查看图片</font> <br/>
		                        *手机端可以另存图片放大查看,或者左右滑动查看图片
		                        <br/>
		                        <font class="story-outline-font">感谢NoHearter梳理的剧情 qq3207414592</font> 
		                        <a href="http://space.bilibili.com/17435569?share_medium=android&share_source=copy_link&bbid=LxstGCpOeBkuHSxINEg0UWMCMVJgUginfoc&ts=1548688570647">
		                            <font class="story-outline-font">b站链接 </font>
		                        </a>
		                        <div className="table-responsive">
	                                <table className="table song-list-table" >
	                                	<tbody>
		                                    <tr>
		                                        <th>
							                        <img src={require("./images/1.png")} width="1500px" />
							                        <img src={require("./images/2.png")} width="1500px" />
							                        <img src={require("./images/3.png")} width="1500px" />
							                        <img src={require("./images/4.png")} width="1500px" />
		                                        </th>
		                                    </tr>
	                                    </tbody>
	                                </table>
	                            </div>
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
