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
	htmlStr = '<header id="fbhWrapper"></header><div id="buttonWrap"><a id="fbhButton" href="#"><!--<span id="fbhButtonLeft">--></span>Our Website Family <i class="fa fa-chevron-down"></i><!--<span id="fbhButtonRight"></span>--></a></div>';
	$('body').prepend(htmlStr);
	$('#fbhWrapper').load('fbh_banner.html', function() {
		
		bodyMargin = $('#fbhWrapper').outerHeight();
		fbhButton = $('#fbhButton');
		fbhButtonIcon = $('#fbhButton i');
		fbhSites = $('#fbhSites');
		headWrap = $('header#fbhWrapper');
		buttonWrap = $('#buttonWrap');
		buttonPad = parseInt($('#fbhButton').css('paddingTop'));
		bottomMargin = parseInt($('header#fbhWrapper').css('padding-bottom'));
		topMargin = parseInt($('header#fbhWrapper').css('padding-top'));
		borderWidth = parseInt($('header#fbhWrapper').css('border-bottom-width'));
		startPad = headWrap.outerHeight() + buttonPad - (borderWidth * 2);
		startHeight = headWrap.height();
		fbhHeight = fbhSites.outerHeight() - bottomMargin;
		fbhTotalHeight = fbhHeight + topMargin + bottomMargin + buttonPad - borderWidth;
		
		//SET TOP MARGIN OF BODY TO EQUAL THE HEIGHT OF THE HEADER
		$('body').css('margin-top', bodyMargin + 'px');

        //ADD FONT-AWESOME CLASS TO FOOTER LI ELEMENTS
        $('ul#fbhLinks li').attr('class', 'fa-li fa fa-caret-right');
		
		//SET INITIAL BUTTON MARGIN
        $(buttonWrap).css('top', startPad + 'px');
		
		//TOGGLE NAV VISIBILITY
		$(fbhButton).click(function() {
			if ($(fbhButtonIcon).hasClass('fa-chevron-down')) {
				$(fbhButtonIcon).removeClass('fa-chevron-down').addClass('fa-chevron-up');
				$(headWrap).animate({height : fbhHeight + 'px'});
				$(buttonWrap).animate({top : fbhTotalHeight + 'px'});
				
			} else if ($(fbhButtonIcon).hasClass('fa-chevron-up')) {
				$(fbhButtonIcon).removeClass('bfa-chevron-up').addClass('fa-chevron-down');
				//$(fbhSites).toggle('slide', { direction: 'up' }, 'slow');
				$(headWrap).animate({height : startHeight + 'px'});
				$(buttonWrap).animate({top : startPad + 'px'}); //!!!!!!!!!!!!
			} else {
				$(fbhButtonIcon).addClass('fa-chevron-down');
				//$(fbhSites).toggle( 'slide', { direction: 'up' }, 'slow');
			}
			});
			
		//RESIZE HEADER & UPDATE BUTTON MARGIN ON WINDOW RESIZE
		$(window).resize(function() {
			newHeight = $(fbhSites).outerHeight() - bottomMargin;
			newTotalHeight = newHeight + topMargin + bottomMargin + buttonPad - borderWidth;
			$(headWrap).animate({height : newHeight + 'px'});
			$(buttonWrap).animate({top : newTotalHeight + 'px'}); //!!!!!!!!
			});
			
		//MATCH LINK HREF TO URL
		sitePath = window.location.href;
		currentSite = sitePath.split('/');
		$('#fbhSites ul li a').each(function(){
			linkUrl = $(this).attr('href');
			if( currentSite[2] == linkUrl) {
				$(this).addClass('currentLink');
				}
			});
		
		//FEATURED ITEM HOVER EFFECTS
		
		
	});
	
});