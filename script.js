document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtener los valores de los campos
    var rfcValue = document.getElementById("rfc").value;
    var postalCodeValue = document.getElementById("postalCode").value;
    var emailValue = document.getElementById("email").value;
    var question1Value = document.getElementById("question1").value;
    var question2Value = document.getElementById("question2").value;
    var question3Value = document.getElementById("question3").value;
    var question4Value = document.getElementById("question4").value;
    var question5Value = document.getElementById("question5").value;
    
    // Realizar las validaciones
    if (rfcValue.length > 13) {
      alert("El RFC no puede tener más de 13 caracteres");
      return;
    }
    
    if (postalCodeValue.length > 5) {
      alert("El código postal no puede tener más de 5 caracteres");
      return;
      }
      
      if (!emailValue.includes("@")) {
      alert("El correo electrónico debe incluir el símbolo @");
      return;
      }
      
      if (question1Value.toLowerCase() === "si" &&
      question2Value === "" &&
      question3Value === "" &&
      question4Value === "" &&
      question5Value === "") {
      alert("Si respondiste 'Sí' en la Pregunta 1, debes responder las siguientes preguntas");
      return;
      }
      
      // Si todas las validaciones pasan, se puede enviar el formulario
      alert("Formulario enviado exitosamente");
      document.getElementById("myForm").reset();
      });  