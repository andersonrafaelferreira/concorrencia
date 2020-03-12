function accept() {
  let opportunity_number = sessionStorage.getItem("number");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let url = document.getElementById("url").value;
  let video = document.getElementById("video").value;

  // console.log("front", opportunity_number, name);
  console.log("front", opportunity_number, name, email, phone, url, video);

  fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      opportunity_number,
      name,
      email,
      phone,
      url,
      video
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

console.log("loaded accept");
