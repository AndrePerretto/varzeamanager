$(document).ready(function() {
    M.updateTextFields();
    M.AutoInit();
  });

  function login(){

      var login = $("#email").val();
      var senha = $("#senha").val();
      var url = "http://" + window.location.hostname + ":8000/api/usuarios/login/" + login + "/" + senha

      $.ajax({  
        url: url,  
        type: "GET",
        success: function(data){
            if(data){
                if(data.length > 0){
                    if(data[0]){
                        localStorage.setItem("userid", data[0].id);
                        
                        if(data[0].nr_level){
                          window.location.href = "http://" + window.location.host + "/pages/index.html"; 
                        }else{
                          window.location.href = "http://" + window.location.host + "/inicio"; 
                        }                        
                        
                    }else{
                      M.toast({html: 'Login ou senha não localizado!'});
                    }  
                }else{
                  M.toast({html: 'Login ou senha não localizado!'});                   
                }
            }                        
        },
        error: function (xhr, ajaxOptions, thrownError) {
          M.toast({html: xhr.responseText}); 
        }    
    });
  }

  document.getElementById("entrar").onclick = function() {login()};