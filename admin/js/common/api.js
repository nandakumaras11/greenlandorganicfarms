function API(url, data, successCallBack) {
    $.ajax({
        type: "POST",
        // headers: {  'Access-Control-Allow-Origin': '*' },

        url: apiBaseUrl + url,

        data: data,
        processData: false,
        contentType: false,
        // dataType: "multipart/form-data",
        success: function (response) {
            successCallBack(JSON.parse(response))
        },
    });
}
function API_JSON(url, data, successCallBack) {
    $.ajax({
        type: "POST",
        // headers: {  'Access-Control-Allow-Origin': '*' },
        dataType: "json",
        url: apiBaseUrl + url,
        data: data,
        // contentType: "application/json; charset=utf-8",
        success: function (data) {
            successCallBack(data)
        }
    })
}

// save product to database 
$("#saveProduct").click(function (e) {
    e.preventDefault();
    API('User/createProduct.php', new FormData($("#my_form")[0]), (result) => {
        // console.log(result)
        // location.reload();
        humanReadMsg(result.message);
        getProduct();

    })
});

var allProducts = [];

let getProduct = () => {
    $("#productTable").dataTable();
    return new Promise((resolve, reject) => {


        API("User/getProductList.php", {}, (response) => {
            allProducts = response;
            // console.log(re)
            $("#productTableBody").empty();
            let count = 1;
            response.forEach(element => {
                $("#productTableBody").append("<tr><td>{0}</td><td>{1}</td><td>{2}</td><td><img style='width: 150px;height: 100px;' src='../api/User/images/{3}' alt='product-img'/></td><td>{4}</td><td>{5}</td><td><i type='button' data-toggle='modal' data-target='#exampleModalCenter' class='fa fa-pencil-square-o editProduct' aria-hidden='true' id={6} ></i></td><td><i class='fa fa-trash-o deleteProduct' aria-hidden='true' id={6} ></i></td></tr>".format(count, element.product_name, element.category, element.product_img, element.old_price, element.selling_price, element.product_id));
                count = count + 1;
            });
            $(".deleteProduct").unbind().click(function (e) {
                e.preventDefault();
                var product_id = this.getAttribute("id");
                API_JSON("User/deleteProduct.php", { 'product_id': product_id }, getProduct())
            });
            $(".editProduct").click(function (e) {
                e.preventDefault();
                var product_id = this.getAttribute("id");
                API_JSON("User/selectoneProduct.php", { 'product_id': product_id }, (result) => {
                    // console.log(result.status);

                    var category = result[0].category;
                    if (category == "plants")
                        $("#plantsRadioBtn").prop("checked", true);
                    else if (category == "seeds")
                        $("#seedsRadioBtn").prop("checked", true);
                    else if (category == "planters")
                        $("#plantersRadioBtn").prop("checked", true);
                    else
                        $("#plantCareRadioBtn").prop("checked", true);

                    $('#productname').val(result[0].product_name);

                    $('#oldprice').val(result[0].old_price);
                    $('#sellingprice').val(result[0].selling_price);
                    $('#description').val(result[0].description);

                    $('#product_id').val(result[0].product_id);

                    console.log(result[0].product_name);
                });
            });
            $('#galleryTable').DataTable({ pageLength: 5, lengthMenu: [[5, 10, 20], [5, 10, 20]] });
            resolve(response);

        });

    })
}
//editProduct start 
$("#editProduct").click(function (e) {
    e.preventDefault();
    API('User/updateProduct.php', new FormData($("#my_form")[0]), (result) => {
        // console.log(result)
        location.reload();
        humanReadMsg(result.message);
        getProduct();

    })
});
// edit product end
//gallery or banner
$("#saveGallery").click(function (e) {
    e.preventDefault();
    API('User/createGallery.php', new FormData($("#my_form")[0]), (result) => {
        // console.log(result)
        // location.reload();
        humanReadMsg(result.message);
        getGallery();

    })
});

let getGallery = () => {
    $("#galleryTable").dataTable().fnDestroy();
    API("User/getGalleryList.php", {}, (response) => {

        $("#galleryTableBody").empty();
        response.forEach(element => {
            $("#galleryTableBody").append("<tr><td><img src='../api/User/images/{0}' style='width: 150px;height: 100px;'alt='banner'/></td><td><button id='{1}' class='btn btn-danger deleteGallery'><i class='fa fa-trash-o deleteGallery'></i> </button></td></tr>".format(element.image, element.gallery_id));
        });
        $(".deleteGallery").unbind("click").click(function (e) {
            e.preventDefault();
            var gallery_id = this.getAttribute("id");
            API_JSON("User/deleteGallery.php", { 'galleryId': gallery_id }, getGallery, () => { })
        });

        $('#galleryTable').DataTable({ pageLength: 5, lengthMenu: [[5, 10, 20], [5, 10, 20]] });
    });
}
const formatProductNameByID = (selectedProducts, products = allProducts) => {
    // selectedProducts = JSON.parse(selectedProducts);
    return JSON.parse(selectedProducts).map((product) => {
        return JSON.stringify({ ...product, productName: products.filter(productItem => productItem.product_id == product.product_id)[0].product_name })
    })

}
let getOrderDetails = (products) => {
    $("#orderTable").dataTable().fnDestroy();
    API("User/getOrderDetails.php", {}, (response) => {

        $("#orderTableBody").empty();
        let count = 1;
        // console.log(response);
        response.forEach(element => {
            // console.log(JSON.parse(element.product_id))
            $("#orderTableBody").append("<tr style='font-size: 0.85em;'><td>{0}</td><td>{1}</td><td style=''>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td><td>{6}</td><td><i type='button' id='{0}'class='fa fa-pencil-square-o orderUpdateBtn' data-toggle='modal' data-target='#exampleModalCenter' ></i> {7} </td></tr>".format(element.order_id, element.phone_no, formatProductNameByID(element.product_id, products), element.totalAmount, element.dateOfOrder, element.transaction_id, element.paymentMode, element.status));

            count = count + 1;
        });
        $(".orderUpdateBtn").click(function (e) {
            e.preventDefault();
            var order_id = this.getAttribute("id");
            // $('#orderIdHiddenBox').val(order_id);
            API_JSON("User/selectOneOrder.php", { 'order_id': order_id }, (result) => {
                // console.log(result.status);

                $('#orderMessage').val(result[0].orderMessage);
                $('#orderIdHiddenBox').val(result[0].order_id);
            });

        });
        $('#orderTable').DataTable({ pageLength: 5, lengthMenu: [[5, 10, 20], [5, 10, 20]] });
    });
}

// $(".deleteGallery").unbind("click").click(function (e) {
//     e.preventDefault();
//     var gallery_id = this.getAttribute("id");
//     API_JSON("User/deleteGallery.php",{'galleryId':gallery_id}, getGallery, () => { })
// });
$("#saveStatusChange").click(function (e) {
    e.preventDefault();
    API('User/UpdateOrderMessage.php', new FormData($("#my_form")[0]), (result) => {
        // console.log(result)
        // location.reload();
        humanReadMsg(result.message);
        getOrderDetails();
        location.reload();
    })
});
$("#adminLogin").click(function (e) {
    e.preventDefault();
    API('User/userAuthentication.php', new FormData($("#my_form")[0]), (result) => {
        console.log(result)
        // location.reload();
        humanReadMsg(result.message);
     
    })
});

