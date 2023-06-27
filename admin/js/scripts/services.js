var allServiceTypes = [];
var gotoNextPage = true;
var serviceId = null;
var allPackages = null;
var serviceImage = null;
$("#headline").text("SERVICE DASHBOARD");

$("#serviceImage").change(function (e) {
    e.preventDefault();
    var file_data = $('#serviceImage').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    alert(form_data);
    $.ajax({
        url: apiBaseUrl + 'update_file_common', // point to server-side PHP script
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function (response) {
            serviceImage = JSON.parse(response).message;
        },
        error:function()
        {
            
        }
        
    });
});
$("#smartwizard").on("leaveStep", function (e, anchorObject, stepNumber, stepDirection) {
    if (stepNumber === 1 && stepDirection == "forward" && gotoNextPage) {
        let serviceType = $("#serviceTypeDropDown").val();
        let serviceProviderName = $("#serviceProviderName").val();
        let place = $("#Place").val();
        let mobile = $("#mobile").val();
        let longitude = $("#laungitude").val();
        let latitude = $("#latitude").val();
        let address = $("#address").val();

        API("createService", {
            "serviceType": serviceType,
            "providerName": serviceProviderName,
            "place": place,
            "latitude": latitude,
            "longitude": longitude,
            "mobile": mobile,
            "address": address,
            "image":serviceImage
        }, (response) => {
            console.log(response)
            gotoNextPage = false;
            serviceId = response.id;
            $(".sw-btn-next").hide();
            $("#smartwizard").smartWizard("next");

        }, () => {
            return false;
        })
        // return confirm("Do you want to leave the step " + stepNumber + "?");
        return false;
    }

});

$("#createPackageBtnBottom").click(() => {

    packageName = $("#packageName").val();
    offerPrice = $("#offerPrice").val();
    orginalPrice = $("#orginalPrice").val();
    packageDetails = $("#packageDetails").val();
    API("createPackage", {
        "serviceId": serviceId,
        "packageName": packageName,
        "offerPrice": offerPrice,
        "orginalPrice": orginalPrice,
        "packageDetails": packageDetails
    }, (response) => {
        console.log(response);
        $("#createPackage").modal("hide");
    }, () => {

    })
})


$("#createServiceTypeBtnModal").click(function (e) {
    e.preventDefault();
    let successCreateServiceType = (response) => {
        $('#createServiceType').modal('hide');
        getAllSerViceTypes();
        $("#serviceType").val("");
    }
    let failureCreateServiceType = (response) => {
        console.log("failure")
    }
    var serviceType = $("#serviceType").val();
    API("createServiceType", {
        "serviceName": serviceType
    }, successCreateServiceType, failureCreateServiceType)
});

let successGetAllServiceTypes = (response) => {
    // console.log(response)
    $("#serviceTypeDropDown").empty();
    var serviceTypes = response.result;
    if (serviceTypes.length > 0) {
        serviceTypes.forEach(type => {
            allServiceTypes.push(type.serviceName)
            $("#serviceTypeDropDown").append("<option value={1}>{0}</option>".format(type.serviceName, type.id))
        });
        console.log(allServiceTypes)
    }

}

let failureGetAllServices = () => {

}
let getAllSerViceTypes = () => {

    API("getServiceTypes", {}, successGetAllServiceTypes, failureGetAllServices)
}
getAllSerViceTypes();

// serviceDetailsBody
{/* <button id='{2}' class='btn btn-dark linkBtn'><i class='fa fa-link'></i> Link</button> */ }

let getAllServices = () => {
    let serviceTableRawTemplates = "<tr><td>{0}</td><td>{1}</td><td>{2}</<td><td>{3}</<td><td>{4}</<td><td><button id='{5}' class='btn btn-dark packageBtn'><i class='fa fa-suitcase'></i> </button><button style='margin-left:3%' id='{5}' class='btn btn-dark deleteServiceBtn'><i class='fa fa-trash-o'></i> </button></<td></tr>"

    API("getAllServices", {}, (response) => {
        console.log(response)
        if (response.Packages.length > 0) {
            allPackages = response.Packages;
        }
        $("#serviceDetailsBody").empty();
        if (response.Services.length > 0) {
            response.Services.forEach(service => {
                $("#serviceDetailsBody").append(serviceTableRawTemplates.format(service.serviceType, service.providerName, service.place, service.address, service.mobile, service.id))
            });


            $(".packageBtn").click(function () {
                $("#packageList").modal("show");
                var packageTemplate = " <div class='col-md-4'><div class='card border-dark mx-sm-1 p-4'><div class='card border-dark shadow text-dark p-3 my-card' ><span class='fa fa-heart' aria-hidden='true'></span></div><div class='text-dark text-center mt-3'><h4>{0}<h4></div><div class='text-info text-center mt-3'><h6>{1}</h6></div><div class='text-dark text-center mt-2'><h3>{2}</h3></div></div></div>"
                var id = this.getAttribute("id");
                if (allPackages.length > 0) {
                    let packages = allPackages.filter((package) => {
                        return package.serviceId == id;
                    })
                    $("#packagesPopUp").empty();
                    packages[0].PackageDetails.forEach(package => {
                        $("#packagesPopUp").append(packageTemplate.format(package.packageName, package.description, package.offerPrice));

                    });
                    console.log(packages)


                }
            })

            $(".deleteServiceBtn").click(function (e) {
                var serviceID = this.getAttribute("id");
                API("deleteService", { id: serviceID }, (response) => { getAllServices(); }, () => { })

            })

            $('#servicePanel').DataTable();
            $("#servicePanel_wrapper").css("padding", "2%")

        }



    }, () => {

    })
}

getAllServices();