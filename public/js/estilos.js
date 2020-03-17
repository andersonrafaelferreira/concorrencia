let estilos = [
  {
    id: "a94aebd2-325a-404c-b5e1-8338e44760b4",
    type: "genre",
    attributes: { name: "Axé", slug: "axe", active: true }
  },
  {
    id: "598edc8b-07f3-457a-bb7c-e491698970e1",
    type: "genre",
    attributes: { name: "Black Music", slug: "black-music", active: true }
  },
  {
    id: "b65e102d-2576-42a9-92b1-18b7026e4f1b",
    type: "genre",
    attributes: { name: "Bloco", slug: "bloco", active: true }
  },
  {
    id: "03a62a29-24bc-4604-8116-463a2a16660d",
    type: "genre",
    attributes: { name: "Blues", slug: "blues", active: true }
  },
  {
    id: "e579f0e5-bb2e-4123-bc76-fa54f68ccf63",
    type: "genre",
    attributes: { name: "Blues/Jazz", slug: "blues-jazz", active: true }
  },
  {
    id: "fa01fd20-c33e-448a-9f9d-6a708c549c1b",
    type: "genre",
    attributes: { name: "Bossa Nova", slug: "bossa-nova", active: true }
  },
  {
    id: "260ee6a9-b443-41c7-afdc-f7b6606b9ea3",
    type: "genre",
    attributes: {
      name: "Country",
      slug: "country-f99ff665-6b8f-4465-8733-493eb3c34cc8",
      active: true
    }
  },
  {
    id: "adbc70dd-3c34-4681-91d3-053fa1ca5d37",
    type: "genre",
    attributes: { name: "Eletrônica", slug: "eletronica", active: true }
  },
  {
    id: "c56e3c76-275f-4209-84e9-0159cde31782",
    type: "genre",
    attributes: {
      name: "Folk",
      slug: "folk-387d4d06-7002-427b-97a9-5c073ba5bf11",
      active: true
    }
  },
  {
    id: "0e117d3c-88b0-499c-8b5f-5f06cb9b89bf",
    type: "genre",
    attributes: { name: "Forró", slug: "forro", active: true }
  },
  {
    id: "e631dc28-93bf-40cd-aaa3-ff3abf187d9b",
    type: "genre",
    attributes: {
      name: "Frevo",
      slug: "frevo-3a8cb3db-abd2-40f7-802c-13077ad278f8",
      active: true
    }
  },
  {
    id: "c8181ab2-c404-45be-a8fe-514a0cd6985a",
    type: "genre",
    attributes: { name: "Funk", slug: "funk", active: true }
  },
  {
    id: "89400ad7-1ad5-4faa-b19a-dd32e3690228",
    type: "genre",
    attributes: { name: "Gospel", slug: "gospel", active: true }
  },
  {
    id: "460e76e6-a3e2-48a2-b53a-e0509e212c80",
    type: "genre",
    attributes: { name: "Humor", slug: "humor", active: true }
  },
  {
    id: "ca233384-9cd0-4934-82ea-85fc656140d1",
    type: "genre",
    attributes: { name: "Jazz", slug: "jazz", active: true }
  },
  {
    id: "187ef24d-2143-426d-b63b-b7741f2a2519",
    type: "genre",
    attributes: { name: "Moda de Viola", slug: "moda-de-viola", active: true }
  },
  {
    id: "b1fe7bb4-98ec-40ab-b6bd-b7cd67a924ab",
    type: "genre",
    attributes: { name: "MPB", slug: "mpb", active: true }
  },
  {
    id: "5a07a710-ac88-4891-9a15-677aa6412b86",
    type: "genre",
    attributes: {
      name: "Música Brasileira",
      slug: "musica-brasileira",
      active: true
    }
  },
  {
    id: "0926ee66-f413-4f0d-87c2-e0ce30895ccb",
    type: "genre",
    attributes: {
      name: "Música Clássica",
      slug: "musica-classica",
      active: true
    }
  },
  {
    id: "171ccb9a-7526-438d-904a-d43b4083a76a",
    type: "genre",
    attributes: {
      name: "Música Eletrônica",
      slug: "musica-eletronica",
      active: true
    }
  },
  {
    id: "5a12eca7-edef-49f5-a3f2-b8f4052afc16",
    type: "genre",
    attributes: {
      name: "Músicas Internacionais",
      slug: "musicas-internacionais",
      active: true
    }
  },
  {
    id: "6c4ab343-04f7-4d36-9bb4-5f28e6749868",
    type: "genre",
    attributes: {
      name: "Músicas para Crianças",
      slug: "musicas-para-criancas",
      active: true
    }
  },
  {
    id: "eb52ebef-b402-46d5-9d5d-600780476bab",
    type: "genre",
    attributes: { name: "Pagode", slug: "pagode", active: true }
  },
  {
    id: "0f683057-17e6-46b6-a88a-48a4b5f8a39a",
    type: "genre",
    attributes: { name: "Pop", slug: "pop", active: true }
  },
  {
    id: "6e94acd1-15ab-449d-8ac4-e85e0eba8a28",
    type: "genre",
    attributes: { name: "Pop Rock", slug: "acustico-pop-rock", active: true }
  },
  {
    id: "0aeef65c-8d93-411d-9eed-6c7ca42a54c2",
    type: "genre",
    attributes: { name: "RAP", slug: "rap", active: true }
  },
  {
    id: "f5a49d4a-b5e7-450d-9cae-b1e77b3ab683",
    type: "genre",
    attributes: { name: "Reggae", slug: "reggae", active: true }
  },
  {
    id: "05cbad8a-c03e-4dd9-b3fc-bf0fe5e106b8",
    type: "genre",
    attributes: {
      name: "Ritmos Variados",
      slug: "ritmos-variados",
      active: true
    }
  },
  {
    id: "336aae57-c02d-4c9b-8f6e-d690d2cb1564",
    type: "genre",
    attributes: { name: "Rock", slug: "rock", active: true }
  },
  {
    id: "a3be6b35-3f23-4166-967b-7217b88cd678",
    type: "genre",
    attributes: { name: "Salsa", slug: "salsa", active: true }
  },
  {
    id: "290c4feb-40a9-42e1-8a86-f89dfbea4846",
    type: "genre",
    attributes: { name: "Samba", slug: "samba", active: true }
  },
  {
    id: "92f5f667-180f-4033-abe3-76bd8e3de3e9",
    type: "genre",
    attributes: { name: "Samba Pop", slug: "samba-pop", active: true }
  },
  {
    id: "683c5c86-922d-476e-9517-f8e5cb907c31",
    type: "genre",
    attributes: {
      name: "Samba Rock",
      slug: "samba-rock-18c7ba1b-3081-4335-9715-955b8fb30547",
      active: true
    }
  },
  {
    id: "33e9af0e-6558-4159-875d-f08319aab27d",
    type: "genre",
    attributes: { name: "Sertanejo", slug: "sertanejo", active: true }
  },
  {
    id: "5550eeda-265d-464a-a0f2-294d6d040e2b",
    type: "genre",
    attributes: {
      name: "Sertanejo Universitário",
      slug: "sertanejo-universitario",
      active: true
    }
  },
  {
    id: "d234d8d2-26aa-4beb-82db-5c6a372ad030",
    type: "genre",
    attributes: { name: "Ska", slug: "ska", active: true }
  },
  {
    id: "ef24a31c-971e-4987-8a5d-12759a689f73",
    type: "genre",
    attributes: { name: "Soul", slug: "soul", active: true }
  }
];

for (i = 0; i < estilos.length; i++) {
  var x = document.createElement("OPTION");
  x.setAttribute("value", estilos[i].attributes.name);
  var t = document.createTextNode(estilos[i].attributes.name);
  x.appendChild(t);
  document.getElementById("estilos").appendChild(x);
}
