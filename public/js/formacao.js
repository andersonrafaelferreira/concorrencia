let formacao = [
  { id: "7c4fdd5e-d6c7-4549-a013-df416c46a741", name: "Banda Completa" },
  {
    id: "c0b24f06-d4c2-4d80-8d5a-9d5f980a3608",
    name: "Acústico / Voz e Violão"
  }
];

for (i = 0; i < formacao.length; i++) {
  var x = document.createElement("OPTION");
  x.setAttribute("value", formacao[i]);
  var t = document.createTextNode(formacao[i].name);
  x.appendChild(t);
  document.getElementById("formacao").appendChild(x);
}
