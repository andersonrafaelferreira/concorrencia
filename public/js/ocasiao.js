let ocasiao = [
  {
    id: "0eeb2a8a-5ad1-4899-a52a-0fbcb1c7a1e4",
    type: "occasion",
    attributes: { name: "Casamentos", slug: "casamentos" }
  },
  {
    id: "02c4eca0-f376-41fa-8df7-0aa9cbad2f71",
    type: "occasion",
    attributes: { name: "Eventos Empresariais", slug: "eventos-empresariais" }
  },
  {
    id: "eff6776e-927a-4571-93e3-090ada63000d",
    type: "occasion",
    attributes: { name: "Casas Noturnas", slug: "casas-noturnas" }
  },
  {
    id: "0934035a-028f-4ea2-82e2-cadd49355f8b",
    type: "occasion",
    attributes: { name: "Festas Particulares", slug: "festas-particulares" }
  },
  {
    id: "7a3bae4e-aa27-4a14-ae96-3896887e12e8",
    type: "occasion",
    attributes: { name: "Festivais", slug: "festivais" }
  },
  {
    id: "62511eea-4432-49ba-b200-7f04eba47ec4",
    type: "occasion",
    attributes: { name: "Cidades", slug: "cidades" }
  }
];

for (i = 0; i < ocasiao.length; i++) {
  var x = document.createElement("OPTION");
  x.setAttribute("value", ocasiao[i]);
  var t = document.createTextNode(ocasiao[i].attributes.name);
  x.appendChild(t);
  document.getElementById("ocasiao").appendChild(x);
}
