$( document ).ready(function(){
  $('.modal').modal();
  var database = firebase.database();
  $(".button-collapse").sideNav();
  $('.carousel').carousel();
  $('ul.tabs').tabs();
  $('.slider').slider();
  $('.carousel').carousel({duration: 500, shift: 40});
  $('.next').click(function(){})
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_friends');
    // accedo al servicio de autenticación
  var authService = firebase.auth();

  /*
   * modal usuarios NO registrados
   */
  $('#send').click(function(){
  var emailSingup = $('#emailSingup').val();
  var passwordSingup = $('#passwordSingup').val();
    if (passwordSingup.length >= 6) {
    firebase.auth().createUserWithEmailAndPassword(emailSingup, passwordSingup)
    .then(function(){
      verify();
    })
    .catch(function(error){
    /*
    * Handle Errors here.
    */
      var errorCode = error.code;
      var errorMessage = error.message;
    /*
    * ...
    */ 
    });
    $('#signup-modal').html('<div class="center-align"><div class="row"><h4 class="modal-title"></h4><h6>Gracias!</h6></div><div class="content"><!-- Mensaje Registro Exitoso --><h4>Se ha completado el registro con éxito!. Recibirás un correo de verificación.</h4></div></div>');
    
    } else {
      alert('Porfavor ingresa un correo válido. \nTu contraseña debe tener al menos 6 caracteres.');
      } 
    });
 
    /*
    * modal usuarios registrados
    */
  $('#start').click(function(){
    var emailLogin = $('#emailLogin').val();
    var passwordLogin = $('#passwordLogin').val();
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(function(error) {
    /*
    * Handle Errors here.
    */
      var errorCode = error.code;
      var errorMessage = error.message;
      /*
      * ...
      */
      console.log('errorCode');
      console.log('errorMessage');
    });
  });
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Existe usuario activo');
      aparece(user);
      /*
      * User is signed in. Si el usuario existe se ejecutará lo siguiente
      */ 
      var displayName = user.displayName;
      var email = user.email;
      console.log(user);
      var emailVerified = user.emailVerified;
      console.log(emailVerified)
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

    } else {
     /*
      * user us singed out
     */ 
      console.log('No existe usuario activo');
    }
  });
        
  function verify(){
    var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function(){
      /*
      *email sent.
      */
      console.log('enviando correo');
      }).catch(function(error){
      /*
      * an error happened
      */
        console.log('error');
        });
      }

  $('#facebookLogin').click(function() {
    /*
    * autentico con Facebook
    */
    authService.signInWithPopup(provider)
    .then(function(result) {
      console.log('autenticado usuario ' + result.user);
      })
      .catch(function(error) {
      console.log('Detectado un error:' + error);
      });
    })

  function aparece(){
    if (emailVerified = true){
       $("#registrate").empty(); 
      }
    }
  }); 
 
/*
   function esconderboton(){
    if (emailVerified = true){
      $('#registrate').addClass("esconder");
      console.log("hola")
    }else{
      $('#registrate').show();
    }

   }
  
*/