function publicar() {
  let number = document.getElementById("number").innerText;
  let client = document.getElementById("client").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let local = document.getElementById("local").value;
  let city = document.getElementById("city").value;
  let zone = document.getElementById("zone").value;
  let estilo = document.getElementById("estilos").value;
  let ocasiao = document.getElementById("ocasiao").value;
  let formacao = document.getElementById("formacao").value;
  let date = document.getElementById("date").value;
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let informations = document.getElementById("informations").value;

  // console.log("front", opportunity_number, name);
  console.log(
    "front",
    number,
    name,
    email,
    phone,
    local,
    city,
    zone,
    estilo,
    ocasiao,
    formacao,
    date,
    start,
    end,
    min,
    max,
    informations
  );

  // fetch("https://4000-e28001be-6e41-4a10-97f3-d933bf824bac.ws-us02.gitpod.io/", {
  fetch("http://localhost:4000/abrir", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      number,
      status: "Aberta",
      client,
      name,
      email,
      phone,
      local,
      city,
      zone,
      estilo,
      ocasiao,
      formacao,
      date,
      start,
      end,
      min,
      max,
      informations
    })
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      alert("sucesso");
    })
    .catch(error => {
      console.log("error", error);
      alert("algo deu errado. :(");
    });
}

console.log("loaded publish");
