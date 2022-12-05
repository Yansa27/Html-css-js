function login(){

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    if( username == "andi" && password == "123"){
      alert("Login Berhasil")
      window.location.href = 'page/index.html';
    }
    else {
      alert("Login tidak berhasil")
      return false;
    }
  }