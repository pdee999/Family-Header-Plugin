// JavaScript Document
$(document).ready(function() {  

	//INSERT CSS
	head = $('head');
	headlinklast = head.find('link[rel="stylesheet"]:last');
	fbhCSS = '<link rel="stylesheet" href="fbh_banner.css" type="text/css" media="screen">';
	if (headlinklast.length){
		headlinklast.after(fbhCSS);
		}
	else {
   		head.append(fbhCSS);
		}
		
	//INSERT FONT-AWESOME CSS
	html = $('html');
	faExhists = html.find('link[href*="font-awesome"]');
	faCSS = '<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">';
	fbhCSS = html.find('link[href*="fbh_banner.css"]');
	if (faExhists.length) {
		//console.log('Font-Awesome is already added.');
		}else {
		$(fbhCSS).before(faCSS);
		}
	
	//INSERT MARKUP
	htmlStr = '<header id="fbhWrapper"></header><div id="buttonWrap"><a id="fbhButton" href="#">Our Website Family <i class="fa fa-chevron-down"></i></a></div>';
	$('body').prepend(htmlStr);
	$('#fbhWrapper').load('fbh_banner.html', function() {
		
		setTimeout(function(){
			
			headWrap = $('header#fbhWrapper');
			
			//SET INITIAL HEIGHT & PADDING OF HEADER
			//$(headWrap).css({'height' : '15px', 'padding' : '15px 0px'});
			
			bodyMargin = $(headWrap).outerHeight();
			fbhButton = $('#fbhButton');
			fbhButtonIcon = $('#fbhButton i');
			fbhPosts = $('#fbhPosts');
			buttonWrap = $('#buttonWrap');
			buttonPad = parseInt($(fbhButton).css('paddingTop'));
			bottomMargin = parseInt($(headWrap).css('padding-bottom'));
			topMargin = parseInt($(headWrap).css('padding-top'));
			borderWidth = parseInt($(headWrap).css('border-bottom-width'));
			startPad = bodyMargin + buttonPad - (borderWidth * 2);
			startHeight = headWrap.height();
			fbhHeight = fbhPosts.outerHeight() - bottomMargin;
			fbhTotalHeight = fbhHeight + topMargin + bottomMargin + buttonPad - borderWidth;		
			
			//SET TOP MARGIN OF BODY TO EQUAL THE HEIGHT OF THE HEADER
			$('body').css('margin-top', bodyMargin + 'px');
			
			//SET INITIAL BUTTON MARGIN
			$(buttonWrap).css('top', startPad + 'px');
			
			//ADD FONT-AWESOME CLASS TO FOOTER LI ELEMENTS
			$('ul#fbhLinks li').attr('class', 'fa-li fa fa-caret-right');
			
			//RECALCULATE VARIABLES, RESIZE HEADER & UPDATE BUTTON MARGIN ON WINDOW RESIZE
			function recalcValues() {
				fbhHeight = fbhPosts.outerHeight() - bottomMargin;
				fbhTotalHeight = fbhHeight + topMargin + bottomMargin + buttonPad - borderWidth;
			};
			function fhbResize() {
				//console.log('window resized');
				$(headWrap).animate({height : fbhHeight + 'px'}, 400, 'easeOutBounce');
				$(buttonWrap).animate({top : fbhTotalHeight + 'px'}, 400, 'easeOutBounce');
			};
			$(window).resize(function () {
				if ($(fbhButtonIcon).hasClass('fa-chevron-down')) {
					recalcValues();
					} else {
					recalcValues();
					fhbResize();
				}
			});
			
			//TOGGLE NAV VISIBILITY/BUTTON ICON
			$(fbhButton).click(function(event) {
				event.preventDefault();
				if ($(fbhButtonIcon).hasClass('fa-chevron-down')) {
					$(fbhButtonIcon).removeClass('fa-chevron-down').addClass('fa-chevron-up');
					$(headWrap).animate({height : fbhHeight + 10 + 'px'}, 400, 'swing', function () {
							$(headWrap).animate({height : fbhHeight + 'px'}, 200, 'easeInQuint');
					});
					$(buttonWrap).animate({top : fbhTotalHeight + 10 + 'px'}, 400, 'swing', function () {
							$(buttonWrap).animate({top : fbhTotalHeight + 'px'}, 200, 'easeInQuint');
					});
				} else if ($(fbhButtonIcon).hasClass('fa-chevron-up')) {
					$(fbhButtonIcon).removeClass('bfa-chevron-up').addClass('fa-chevron-down');
					$(headWrap).animate({height : startHeight + 'px'}, 400, 'easeInQuad');
					$(buttonWrap).animate({top : startPad + 'px'}, 400, 'easeInQuad');
				} else {
					$(fbhButtonIcon).addClass('fa-chevron-down');
				}
			});
				
			//MATCH LINK HREF TO URL
			sitePath = window.location.href;
			currentSite = sitePath.split('/');
			$('#fbhPosts ul li a').each(function(){
				linkUrl = $(this).attr('href');
				if( currentSite[2] == linkUrl) {
					$(this).addClass('currentLink');
					}
			});
			
			//FEATURED ITEM HOVER EFFECTS
				
			}, 100);
		
	});
	
});