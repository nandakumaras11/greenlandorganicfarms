
var menu = [

    { "menuName": "Home", "id":"home", "class": "fa fa-home", "link":"adminHome.html"},

    { "menuName": "Products", "id":"events", "class": "fa fa-product-hunt", "link":"productList.html"},

    { "menuName": "Order List", "id":"product", "class": "fa fa-list-alt", "link":"orderpanel.html"},

    { "menuName": "Banner", "id":"gallery", "class": "fa fa-image", "link":"galleryPanel.html"},
   
    
    

    // { "menuName": "Services", "class":"fa fa-wrench", "link":"serviceDashboard.html"},

]



var menuString = "";

menu.forEach(menuItem => {

    menuString=menuString+"<li><a id={3} href='{2}'><i class='{1}'/>&nbsp;{0}&nbsp;&nbsp;</a></li>".format(menuItem.menuName,menuItem.class,menuItem.link, menuItem.id)  

});





var sideBar = "<div class='sidebar-header'></div><ul class='list-unstyled components'>{0}</ul>".format(menuString);

$("#sidebar").append(sideBar);





var topMenu = "<ul class='nav navbar-nav ml-auto' style='font-size: x-large;font-family: fantasy;' id='headlineTop'></ul>";



$("#navbarSupportedContent").append(topMenu);











{/* <li class='active'><a href='#homeSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><i class='fas fa-home'/>Home</a><ul class='collapse list-unstyled' id='homeSubmenu'><li><a href='#'>Home 1</a></li><li><a href='#'>Home 2</a></li><li><a href='#'>Home 3</a></li></ul></li><li><a href='#'><i class='fas fa-briefcase'/>About</a><a href='#pageSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><i class='fas fa-copy'/>Pages</a><ul class='collapse list-unstyled' id='pageSubmenu'><li><a href='#'>Page 1</a></li><li><a href='#'>Page 2</a></li><li><a href='#'>Page 3</a></li></ul></li><li><a href='#'><i class='fas fa-image'/>Portfolio</a></li><li><a href='#'><i class='fas fa-question'/>FAQ</a></li> */ }