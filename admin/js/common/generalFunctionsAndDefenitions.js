

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

// var apiBaseUrl = "https://greenlandorganicfarms.com/api/";

var apiBaseUrl = "http://localhost/Greennest/api/";

