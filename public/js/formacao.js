let formacao = [{
    id: "c0b24f06-d4c2-4d80-8d5a-9d5f980a3608",
    name: "Solo (Voz e Violão)"
  },
  { id: "7c4fdd5e-d6c7-4549-a013-df416c46a742", name: "Duo" },
    { id: "7c4fdd5e-d6c7-4549-a013-df416c46a743", name: "Trio" },
    { id: "7c4fdd5e-d6c7-4549-a013-df416c46a741", name: "Banda Completa" },

  
];

for (i = 0; i < formacao.length; i++) {
  var x = document.createElement("OPTION");
  x.setAttribute("value", formacao[i]);
  var t = document.createTextNode(formacao[i].name);
  x.appendChild(t);
  document.getElementById("formacao").appendChild(x);
}
