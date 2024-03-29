// JavaScript Document
	

$(function(){
	
	'use strict';
	
	// Edit Header Height
	
	var myHeader = $('.header') ,
		
		mySlider=$('.bxslider');
		myHeader.height($(window).height());
	
	$(window).resize(function(){
		
		myHeader.height($(window).height());
		
		mySlider.each(function(){
		$(this).css('padding-top',($(window).height()- $('.bxslider li').height())/2);
		});
	});
	
	
	// Link Add Active Class
	
	$('.link li a').click(function(){
		
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	//Adjust Bx-Slider LIst Item Center
	
	mySlider.each(function(){
		$(this).css('padding-top',($(window).height()- $('.bxslider li').height())/2);
	});
	
	// Trigger The BX Slider
	mySlider.bxSlider({
		pager:false
	});
	
	//Smooth Scroll To Div 
	
	$('.link li a').click(function(){
		
		$('html , body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top
		},1000);
		
	});
	
	//Our Auto Slider Code
	
	(function autoSlider (){
		
		$('.slider .active').each(function(){
			
			if(!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000 , function(){
					$(this).removeClass('active').next().addClass('active').fadeIn();
					
					autoSlider ();
				});
			}else{
				$(this).delay(3000).fadeOut(1000 , function(){
					
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					
					autoSlider ();
				});
			}
			
		});
		
		
	}()); //function Selify invocek
	
	// Trigger Mixitup 
	
	$('#container').mixItUp();
	
	// Adjust Shuffle Links
	
	$('.shuffle li').click(function(){
		
		$(this).addClass('selected').siblings().removeClass('selected');
		
	});
	
	// Trigger Nice Scroll
	
	$('body').niceScroll({
		cursorcolor:'#1abc9c' ,
		cursorwidth:'9px' ,
		cursorborder:'1px solid #1abc9c'
	});
	
});