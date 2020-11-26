function todo(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length;i++){
                output += "<input type='checkbox' id='checkbox' onclick='checkall()' > <label><br> " + response[i].title + "</label> <br>"; 


            }
            document.getElementById("todo").innerHTML = output;

        }

    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

var checkbox = document.getElementById("checkbox");
 checkbox = new Promise( (resolve)=>{
    resolve();
} );
checkbox.then(()=>{
    // function checkall()
    for(var i=0;i<checkbox.length;i++){
        checkbox[i].checked=true;
        if(checkbox[i]==5){
            alert("5 task completed");
        }
    }

   
}).catch(()=>{
    alert("less than  5 tasks")
});



function logout() {
    
      Parse.User.logOut();
      window.location.href="login.html";
    
    (function preventBack(){
        window.history.forward();
      }
    //   setTimeout("preventBack()", 0);
    //   window.onunload=function(){null};
      )  }

  
  
  