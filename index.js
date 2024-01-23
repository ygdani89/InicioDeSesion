// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Daniel",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};




let formulario = document.querySelector('form');
let inicio = document.getElementById('inicio');





window.addEventListener('load', function () {

  let contrasenha = document.getElementById("password-input");

  contrasenha.addEventListener('blur', function () {
    let contr = contrasenha.value

    if (contr.length < 5) {
      alert("la contraseña de be tener 5 caracteres ")
    }

  })

  formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    function iniciandoSesion() {

      let email = document.getElementById('email-input')


      let cargando = document.getElementById('loader');
      let error = document.getElementById('error-container');
      error.classList.add("small")
      cargando.classList.remove('hidden');
      error.classList.add('hidden');
      let aprovado = document.getElementById('aprovado');
      aprovado.classList.add('hidden');


      let usuarioEncontrado = baseDeDatos.usuarios.find(function (e) {
        return email.value === e.email && contrasenha.value === e.password;
      });

      setTimeout(function () {
        if (usuarioEncontrado) {

          aprovado.classList.remove('hidden');
          error.classList.add('hidden');
          formulario.classList.add('hidden')
          inicio.classList.add('hidden')
        } else {
          error.classList.remove('hidden');
        }
        cargando.classList.add('hidden');
      }, 3000);
    };

    iniciandoSesion();

  });


});

