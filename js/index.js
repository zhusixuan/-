$(function(){
	//设置默认左右外级元素的高度
	$(".leftDiv").height($(window).height());
	$(".rightDiv").height($(window).height());


	//给左侧侧边栏绑定事件 加载右侧内容区
	$(".leftDiv_bottom li").click(function(){
		var text=$(this).children().children()[1].innerHTML;
		if(text=="首页"){
			$(".rightDiv_content").load('pages/shouye.html');
		}else if(text=="栏目管理"){
			$(".rightDiv_content").load('pages/lanmu.html');

		}else if(text=="咨询管理"){
			$(".rightDiv_content").load('pages/zixun.html');

		}else if(text=="用户管理"){
			$(".rightDiv_content").load('pages/user.html');

		}
	});

	//默认点击首页
	$(".leftDiv_bottom li:first").trigger('click');




});