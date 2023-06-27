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