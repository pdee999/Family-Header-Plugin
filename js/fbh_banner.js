// JavaScript Document
$(document).ready(function() {  

	//INSERT CSS
	head = $('head');
	headlinklast = head.find('link[rel="stylesheet"]:last');
	fbhCSS = '<link rel="stylesheet" href="css/fbh_banner.css" type="text/css" media="screen">';
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
			
			//CONSTRAIN SITES BOX HEIGHT TO WIDTHS
			fbhSites = $('#fbhSites').find('a');
			function sitesCalc() {
				sitesWidth = $(fbhSites).css('width');
				$(fbhSites).css('height', sitesWidth);
			}
			sitesCalc();
			$(window).resize(function () {
				sitesCalc();
			});
			
			//CONSTRAIN CALLOUT BOX HEIGHT TO WIDTHS
			fbhCalls = $('#fbhCallouts').find('a');
			function callsCalc() {
				callsWidth = $(fbhCalls).css('width');
				$(fbhCalls).css('height', callsWidth);
			}
			callsCalc();
			$(window).resize(function () {
				callsCalc();
			});
				
			//CONSTRAIN FEATURE BOX HEIGHT TO WIDTHS
			fbhFeat = $('#fbhFeatures').find('a');
			function featCalc() {
				featWidth = $(fbhFeat).css('width');
				$(fbhFeat).css('height', featWidth);
			}
			featCalc();
			$(window).resize(function () {
				featCalc();
			});
				
			headWrap = $('header#fbhWrapper');
			bodyMargin = $(headWrap).outerHeight();
			fbhButton = $('#fbhButton');
			fbhButtonIcon = fbhButton.find('i');
			fbhContent = $('#fbhContent');
			buttonWrap = $('#buttonWrap');
			buttonPad = parseInt($(fbhButton).css('paddingTop'));
			bottomMargin = parseInt($(headWrap).css('padding-bottom'));
			topMargin = parseInt($(headWrap).css('padding-top'));
			borderWidth = parseInt($(headWrap).css('border-bottom-width'));
			startPad = bodyMargin + buttonPad - (borderWidth * 2);
			startHeight = headWrap.height();
			fbhHeight = fbhContent.outerHeight() - bottomMargin;
			fbhTotalHeight = fbhHeight + topMargin + bottomMargin + buttonPad - borderWidth;

            //SET INITIAL HEIGHT & PADDING OF HEADER
            //$(headWrap).css({'height' : '15px', 'padding' : '15px 0px'});
			
			//SET TOP MARGIN OF BODY TO EQUAL THE HEIGHT OF THE HEADER
			$('body').css('margin-top', bodyMargin + 'px');
			
			//SET INITIAL BUTTON MARGIN
			$(buttonWrap).css('top', startPad + 'px');
			
			//ADD FONT-AWESOME CLASS TO FOOTER LI ELEMENTS
			$('ul#fbhLinks li').attr('class', 'fa-li fa fa-caret-right');
			
			//RECALCULATE VARIABLES, RESIZE HEADER & UPDATE BUTTON POSITION ON WINDOW RESIZE
			function recalcValues() {
				fbhHeight = fbhContent.outerHeight() - bottomMargin;
				fbhTotalHeight = fbhHeight + topMargin + bottomMargin + buttonPad - borderWidth;
			}
			function fbhResize() {
				//console.log('window resized');
				$(headWrap).clearQueue().animate({height : fbhHeight + 'px'}, 400, 'easeOutBounce');
				$(buttonWrap).clearQueue().animate({top : fbhTotalHeight + 'px'}, 400, 'easeOutBounce');
			}
			$(window).resize(function () {
                setTimeout(function(){
                    if ($(fbhButtonIcon).hasClass('fa-chevron-down')) {
                        recalcValues();
                    } else {
                        recalcValues();
						fbhResize();
                    }
                }, 0);
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
			/*sitePath = window.location.href;
			currentSite = sitePath.split('/');
			$('#fbhContent ul li a').each(function(){
				linkUrl = $(this).attr('href');
				if( currentSite[2] == linkUrl) {
					$(this).addClass('currentLink');
					}
			});*/
			
			//FEATURED ITEM HOVER EFFECTS

            //TRUNCATE LAST LINE WITH ELLIPSES
            /*truncElem = $('#fbhCallouts').find('a');
            if( truncElem.offsetHeight < truncElem.scrollHeight || truncElem.offsetWidth < truncElem.scrollWidth){
                boxText = document.getElementById('fbhCallouts').innerHTML.split(/\r?\n/);
                alert(boxText[boxText.length - 1]);
            }
            else{
                //your element don't have overflow
            }*/
				
			}, 100);
		
	});
	
});