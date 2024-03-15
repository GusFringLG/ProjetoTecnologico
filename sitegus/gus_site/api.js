function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.token != null) {
                alert("Iniciou sessão com sucesso!");
                localStorage.setItem('token', responseJson.token)
            }
            else {
                alert("Username ou password incorretos");
            }

        })
        .catch((error) => {
            console.log(error);
        });
}
function register() {
    var username = document.getElementById("username_register").value;
    var email = document.getElementById("email_register").value;
    var password = document.getElementById("password_register").value;

    fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        }),
    }).then((response) => response.json())  	
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.user == undefined){
                alert("Falhou")
            }
            else{
                alert("Registado com sucesso!")
            }

        })
        .catch((error) => {
            console.log(error);
        });
}

function getProfile() {
    var token = localStorage.getItem('token');

    fetch('http://127.0.0.1:8000/api/getProfile', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            document.getElementById("name").textContent += responseJson.profile.username;
            document.getElementById("tipo").textContent += responseJson.profile.tipoConta;
        })
        .catch((error) => {
            console.log(error);
        });
}




