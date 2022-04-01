function send() {
  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;

  if (username.length < 6 || password.length < 6) {
    alert("Preenche essa porra direito, seu animal!");

    return { success: false };
  }

  return {
    success: true,
    username: username,
    password: password,
  };
}

function register() {
  const email = document.querySelector('input[name="email"]').value;
  const fullname = document.querySelector('input[name="fullname"]').value;

  if (email.length < 6 || fullname.length < 6) {
    alert("Preenche essa porra direito, seu animal!");

    return;
  }

  const usernamePasswordValidation = send();

  if (usernamePasswordValidation.success) {
    const data = {
      email: email,
      fullname: fullname,
      username: usernamePasswordValidation.username,
      password: usernamePasswordValidation.password,
    };

    console.log(database(data));
  }
}

const table = [];

function database(data) {
  table.push(data);

  return table;
}
