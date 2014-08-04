// JavaScript Document
$(document).ready(function() {  

	//INSERT CSS
	$head = $("head");
	$headlinklast = $head.find("link[rel='stylesheet']:last");
	linkElement = "<link rel='stylesheet' href='fbh_banner.css' type='text/css' media='screen'>";
	if ($headlinklast.length){
		$headlinklast.after(linkElement);
		}
	else {
   		$head.append(linkElement);
		}
		
	//INSERT MARKUP
	htmlStr = '<header id="brandingWrapper">';
	htmlStr += '<div class="bannerContainer">';
	htmlStr += '<a id="nrecaBrand" href="#"></a>';
	htmlStr += '<a id="coopBrand" href="#"></a>';
	htmlStr += '<a id="sitesButton" class="buttonOn" href="#">Our Website Family</a>';
	htmlStr += '</div>';
	htmlStr += '<nav id="sites">';
	htmlStr += '<div class="bannerContainer">';
	htmlStr += '<ul id="featuredSites">';
	htmlStr += '<li><a href="www.google.com" class="red"><h1>Touchstone Energy</h1><figure><img src="tse.gif" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="www.nreca.org" class="blue"><h1>Homestead Funds</h1><figure><img src="hsf.gif" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="bootstrap.local" class="green"><h1>RE Magazine</h1><figure><img src="REmag.gif" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="www.facebook.com" class="orange"><h1>Electric Co-op Today</h1><figure><img src="ect.jpg" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="bootsap.local" class="green"><h1>Multispeak</h1><figure><img src="ms.jpg" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="www.facebook.com" class="blue"><h1>Wood Quality Control</h1><figure><img src="wqc.jpg" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="www.google.com" class="red"><h1>Cooperative.com</h1><figure><img src="Cooperative.jpg" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '<li><a href="www.nreca.org" class="blue"><h1>ECBA</h1><figure><img src="ecba.jpg" /></figure><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis justo. Morbi elementum, vel tempus lorem arcu ac magna.</p></a></li>';
	htmlStr += '</ul>';
	htmlStr += '</div>';
	htmlStr += '<div class="clear"></div>';
	htmlStr += '<div id="bannerBottom">';
	htmlStr += '<div class="bannerContainer">';
	htmlStr += '<ul id="bannerContact">';
	htmlStr += '<li class="coopFind"><a href="#">Co-op Finder</a><br /><span class="description">A short description. Lorem ipsum dolor sit amet, consectetur adipiscing.</span></li>';
	htmlStr += '<li class="peopleFind"><a href="#">People Finder</a><br /><span class="description">A short description. Lorem ipsum dolor sit amet, consectetur adipiscing.</span></li>';
	htmlStr += '</ul>';
	htmlStr += '<ul id="linksList">';
	htmlStr += '<li><a href="#">NRECA Careers</a></li>';
	htmlStr += '<li><a href="#">NRECA Employee Benefits</a></li>';
	htmlStr += '<li><a href="#">NRECA Merch</a></li>';
	htmlStr += '<li><a href="#">Electric Co-op Bar Association</a></li>';
	htmlStr += '<li><a href="#">Legal Reporting Service</a></li>';
	htmlStr += '<li><a href="#">Connect Conference</a></li>';
	htmlStr += '<li><a href="#">TechAdvantage Conference</a></li>';
	htmlStr += '<li><a href="#">Associate Members</a></li>';
	htmlStr += '<li><a href="#">Groups.Cooperative.com</a></li>';
	htmlStr += '<li><a href="#">HSF Institutional Investors</a></li>';
	htmlStr += '</ul>';
	htmlStr += '</div>';
	htmlStr += '</div>';
	htmlStr += '</nav>';
	htmlStr += '</header>';
	$('body').prepend(htmlStr);
	
	//TOGGLE SITES NAV VISIBILITY
	$('a#sitesButton').click(function() {
		if ($(this).hasClass('buttonOn')) {
            $(this).removeClass('buttonOn').addClass('buttonOff');
			$('nav#sites').toggle( 'bounce', { times: 1 }, 'slow' );
			$('header#brandingWrapper').effect( 'bounce', { times: 1 }, 'slow' );
        } else if ($(this).hasClass('buttonOff')) {
            $(this).removeClass('buttonOff').addClass('buttonOn');
			$('nav#sites').toggle('slide', { direction: 'up' }, 'slow');
        } else {
            $(this).addClass('buttonOn');
			$('nav#sites').toggle( 'slide', { direction: 'up' }, 'slow');
        }
		});
		
	//MATCH LINK HREF TO URL
	sitePath = window.location.href;
	currentSite = sitePath.split('/');
	$('nav#sites ul li a').each(function(){
		linkUrl = $(this).attr('href');
		if( currentSite[2] == linkUrl) {
			$(this).addClass('currentLink');
			}
		});
	
	//FEATURED ITEM HOVER EFFECTS
	
	
});