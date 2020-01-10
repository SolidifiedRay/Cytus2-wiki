import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CharaInfoMarkdown from '../../components/CharaInfoMarkdown/CharaInfoMarkdown';

class EditWiki extends Component {

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
		                        <font class="font-title">wiki编辑手册</font><br/>
		                        <hr/>
		                        <div class="font-subtitle" >
                       			*：本wiki代码托管在github上，<a href="https://github.com/SolidifiedRay/Cytus2-wiki-React" target="_blank">链接戳这里</a><br/>
                       			<br/>
                       			第一步：注册github账号<br/>
                       			点击github主页右上角的sign up注册账号<br/>
                       			<img src={require("./images/1.png")} width="80%"/>
                       			<br/><br/>
                       			第二步：登陆github账号并进入cytus2wiki代码所在页面<br/>
                       			<a href="https://github.com/SolidifiedRay/Cytus2-wiki-React" target="_blank">链接戳这里</a><br/>
                       			<img src={require("./images/2.png")} width="80%"/>
                       			<br/><br/>
		                        第三步：编辑数据<br/>
		                        wiki数据存放在db.json的文件中，文件路径如下图所示<br/>
                       			<img src={require("./images/3.png")} width="80%"/><br/>
		                        点击铅笔UI以更改数据<br/>
                       			<img src={require("./images/4.png")} width="80%"/>
		                        <br/><br/>
		                        第四步：提交更改<br/>
		                        *具体的更改格式在后面<br/>
		                        修改完数据后在下方第一个框内填写更改内容，第二框提交数据<br/>
                       			<img src={require("./images/5.png")} width="80%"/><br/>
		                        然后发起pull request提交申请<br/>
                       			<img src={require("./images/6.png")} width="80%"/>
		                        <br/><br/>
		                        到这里就完成编辑数据了，接下请耐心等待管理员处理<br/>
		                        如果需要联系站长可以微博@SolidifiedRay或者进q群260032920联系<br/>
		                        <br/><br/>
		                        <hr/>
		                        <br/>
		                        如何更改数据<br/>
		                        每一首曲子的页面数据都如下图所示：<br/>
		                        可以用Ctrl+F来搜索曲子<br/>
		                        如要上传歌词，曲绘，介绍等，需要在自行上传md文件<br/>
		                        LyricUrl为歌词文件路径，IntroUrl为介绍文件路径，coverArtUrl为曲绘文件路径<br/>
		                        *1月底前会再更新一份具体的如何修改数据的手册<br/>
                       			<img src={require("./images/7.png")} width="50%"/><br/>
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

export default EditWiki;
