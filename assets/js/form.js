base_url = 'https://travel-backend-personal.herokuapp.com';

function loginUser() {
    var data = JSON.stringify({
        "to": document.getElementById("book_to").value,
        "date": document.getElementById("book_date").value,

    });

    var config = {
        method: 'post',
        url:  'https://travel-backend-personal.herokuapp.com/api/tour',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
            location.replace('/book.html');
        })
        .catch(function(error) {
            console.log(error);
        });

}

function signUpUser() {
    var data = JSON.stringify({
        "username": document.getElementById("first_name").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,


    });

    var config = {
        method: 'post',
        url:  'https://travel-backend-personal.herokuapp.com/api/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
            location.replace('/main.html');
        })
        .catch(function(error) {
            console.log(error);
        });

}

function signinUser() {
    var data = JSON.stringify({
        "username": document.getElementById("first_name").value,
        "password": document.getElementById("pass").value,


    });

    var config = {
        method: 'post',
        url:  'https://travel-backend-personal.herokuapp.com/api/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
            location.replace('/main.html');
        })
        .catch(function(error) {
            console.log(error);
        });

}