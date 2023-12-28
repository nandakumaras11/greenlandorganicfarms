

if (!String.prototype.format) {

    String.prototype.format = function () {

        var args = arguments;

        return this.replace(/{(\d+)}/g, function (match, number) {

            return typeof args[number] != 'undefined'

                ? args[number]

                : match

                ;

        });

    };

}

// CreateService.php

$("#addNews").click(function (e) {

    e.preventDefault();

    $('#createNewsModal').modal('show');



});



$("#createServiceTypeBtn").click(function (e) {

    e.preventDefault();

    $('#createServiceType').modal('show');



});

function humanReadMsg(msg) {

    $(".humanReadMsg").text(msg);

    setTimeout(() => {

        $(".humanReadMsg").text("");

    }, 3000);

}
function showPopUp(headding,txt,typ){
    swal({
        title: headding,
        text: txt,
        type: typ,
        confirmButtonText: "Ok"
      });
}
function showPopUpRedirect(headding,txt,typ){
    swal({
        title: headding,
        text: txt,
        type: typ,
        confirmButtonText: "Ok"
      },
      function(){ 
        // location.reload(); //adminHome.html
        window.location.replace("https://greenlandorganicfarms.com/greennextAdmin/adminHome.html");
        // window.location.replace("http://localhost/greenlandorganicfarms/admin/addProduct.html");
    });
}
function showPopUpReload(headding,txt,typ){
    swal({
        title: headding,
        text: txt,
        type: typ,
        confirmButtonText: "Ok"
      },
      function(){ 
        location.reload();
    });
}
var admin_id=null;
var apiBaseUrl = "https://greenlandorganicfarms.com/api/";
var indexPage = "https://greenlandorganicfarms.com/greennextAdmin/index.html";
// var apiBaseUrl = "http://localhost/greenlandorganicfarms/api/";
// var indexPage = "http://localhost/greenlandorganicfarms/admin/index.html";

