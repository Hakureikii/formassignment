function SignUp() {
   const uname = document.getElementById("username").value;
   const pword = document.getElementById("password").value;

   if(uname && pword !="") {
      const data = JSON.parse(localStorage.getItem("data")) || [];
      data.push({
         username: uname,
         password: pword
      })

      localStorage.setItem("data", JSON.stringify(data));
      alert("Account successfully signed in");
      username.value = "";
      password.value = "";
      console.log(uname, pword);
   }
   else {
      alert("Kay ga palak lg")
   }
}

function LogIn() {
   const uname = document.getElementById("username").value;
   const pword = document.getElementById("password").value;

   const users= JSON.parse(localStorage.getItem("data")) || [];
   const user = users.find(user => user.username === uname && user.password === pword)

   if (user) {
      alert("Logged In");
      console.log("User: ", user)
   }
   else {
      alert("Invalid username / password")
      console.log("err")
   }
   username.value = "";
   password.value = "";
}

function CloseWindow() {
   window.close()
}