// ==UserScript==
// @name       Hide auto-correct comments in blognone.com
// @namespace  https://www.blognone.com/node/57111
// @version    0.3.2
// @description  It will toggle to hide a comment that contains "=>" word automatically.
// @copyright  Hide auto-correct comments in blognone.com by sQUARErOOt is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
// @author sQUARErOOt
// @modifier itpcc
// @match https://www.blognone.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
// 

var main =  function() {
	//spell check comment management
	var spellCheckComment = $(".comment-content:contains('=>'), .comment-content:contains('->'), .comment-content:contains('→'), .comment-content:contains(' >>'), .comment-content:contains(' << '), .comment").parent().parent();
	spellCheckComment
		.add($(".comment .comment-info a:contains('panurat2000')").parent().parent())
		.each(function(){
			$(this).next('.indented').toggle();
			$(this).children('.comment-body').toggle();
			$(this).children('.comment-info')
				.css("background-color","red")
				.append('<span class="comment-spell-check-warning">ระวัง! Comment นี้อาจเป็น Comment ตรวจคำ');
			$(this).addClass("spell-check-comment");
		});
	//add pointer cursor
	$(".comment-info a[onclick]:contains('toggle')").css("cursor","pointer");
};

var script = document.createElement('script');
script.type = "text/javascript";
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);
