function singin() {
    Username = document.getElementById("input1").value;
    localStorage.setItem('Username',Username);
    window.location="main.html";
    
     }