
var mainNewsId = null;
var newsImage = null;
var linkNewsImage = null;
let populateEvents = () => {

    let tableRowTemplate = "<tr><td width='40%'>{0}</td><td>{1}</td><td width='20%'><button id='{2}' class='btn btn-dark deleteNewsBtn'><i class='fa fa-trash-o'></i> </button></td></tr>"
    let successGetEvents = (response) => {
        var allTableRowTemplate = "";
        response.forEach(event => {
            allTableRowTemplate = allTableRowTemplate + tableRowTemplate.format(event.headline, event.description.length > 100 ? event.description.substring(0, 75) + ".." : event.description, event.eventid)
        });

        $("#eventList").empty().append(allTableRowTemplate);
        $(".deleteNewsBtn").click(function () {
            var eventID = this.getAttribute("id")
            API_JSON("User/deleteEvents.php", { 'eventid': eventID }, () => {
                API("User/getEvents.php", {}, successGetEvents, failedGetEvent)

            });
        // API_JSON("User/deleteCareer.php",{'careerid':careerid}, getCareer, () => { })

    })
        $('#example').DataTable();
    $(".linkBtn").click(function (e) {
        e.preventDefault();
        $('#linkNewsModal').modal('show');
        mainNewsId = this.id;


    });
}

let failedGetEvent = (response) => {

}
API("User/getEvents.php", {}, successGetEvents, failedGetEvent)

}

// $("#newsImage").change(function (e) {
//     e.preventDefault();
//     var file_data = $('#newsImage').prop('files')[0];
//     var form_data = new FormData();
//     form_data.append('file', file_data);
//     alert(form_data);
//     $.ajax({
//         url: apiBaseUrl + 'update_file_common', // point to server-side PHP script
//         dataType: 'text',  // what to expect back from the PHP script, if anything
//         cache: false,
//         contentType: false,
//         processData: false,
//         data: form_data,
//         type: 'post',
//         success: function (response) {
//             newsImage = JSON.parse(response).message;
//         },
//     });
// });


populateEvents();
$("#headline").text("Event DASHBOARD")

// $("#addInfo").click((event)=>{
//     event.preventDefault();
//     console.log("aa")
// })