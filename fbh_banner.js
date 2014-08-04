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
		
		//SET TOP MARGIN OF BODY TO EQUAL THE HEIGHT OF THE HEADER
		bodyMargin = $('#fbhWrapper').outerHeight();
		$('body').css('margin-top', bodyMargin + 'px');
		
		//TOGGLE SITES NAV VISIBILITY
		fbhButton = $('#fbhButton');
		fbhButtonIcon = $('#fbhButton i');
		fbhSites = $('#fbhSites');
		headWrap = $('header#fbhWrapper');
		buttonWrap = $('buttonWrap')
		bottomMargin = parseInt($('header#fbhWrapper').css('padding-bottom'));
		//topMargin = parseInt($('header#fbhWrapper').css('padding-top'));
		fbhTotalHeight = fbhSites.outerHeight() - bottomMargin;
		buttonWrap.css('top', headWrap + 'px');  //Sets intial button location
		$(fbhButton).click(function() {
			if ($(fbhButtonIcon).hasClass('fa-chevron-down')) {
				$(fbhButtonIcon).removeClass('fa-chevron-down').addClass('fa-chevron-up');
				//$(fbhSites).toggle( 'bounce', { times: 1 }, 'slow' );
				//$(headWrap).effect( 'bounce', { times: 1 }, 'slow' );
				$(headWrap).animate({height : fbhTotalHeight + 'px'});
				buttonWrap.css('top', headWrap.outerHeight());
				$(window).resize(function() {
					newTotalHeight = fbhSites.outerHeight() - bottomMargin;
					$(headWrap).animate({height : newTotalHeight + 'px'});
					});
			} else if ($(fbhButtonIcon).hasClass('fa-chevron-up')) {
				$(fbhButtonIcon).removeClass('bfa-chevron-up').addClass('fa-chevron-down');
				//$(fbhSites).toggle('slide', { direction: 'up' }, 'slow');
			} else {
				$(fbhButtonIcon).addClass('fa-chevron-down');
				//$(fbhSites).toggle( 'slide', { direction: 'up' }, 'slow');
			}
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