/*jshint unused:false, jquery:true, browser:true, strict: false*/
/*global logo:true, Sly:true, prettyPhoto_enb: true, cosmo_woocommerce_cripts:true, cookies_prefix: true, FB: true, MyAjax:true, login_localize:true*, gallery_speed:true*/

// Google Fonts
WebFontConfig = {
    google: { families: [ 'Lato:300,400,700:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

//init menu - you need just to give him the menu class
function initMenu(menu){
  "use strict";
  jQuery(menu).supersubs({ 
        minWidth:    14,   // minimum width of sub-menus in em units 
        maxWidth:    35,   // maximum width of sub-menus in em units
        animation: {height:'show'}  // slide-down effect without fade-in 
                           // due to slight rounding differences and font-family 
    }).superfish({
      dropShadows:   false
    });  // call supersubs first, then superfish, so that subs are 
   // not display:none when measuring. Call before initialising 
   // containing tabs for same reason. 
}

jQuery(document).ready(function(){
    "use strict";
    initMenu('.menu ul.sf-menu, .menu_and_logo ul.sf-menu, .login-menu.sf-menu');

    //console.log('rotating');

    // Rotate Image
    //$('.rotate35').rotate(35);
});


