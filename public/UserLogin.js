function login() {
    var userName = $('#userName').val();
    var userPass = $('#userPass').val();

    var query = { userName: userName, userPass: userPass }
    console.log(userName)
    console.log(userPass)



    $.post("/UserLogin", query, function (result) {
        console.log(result);

        if(result.successfullLogin = true) {
            window.location.replace('Add_Auto_For_Sale.html')
        }

        else {
            $('#FL').html("Incorrect Password, please try again");
        }


    })
}