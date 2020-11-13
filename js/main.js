const cats = [
  {
    name: "Adam",
    age: 0.3,
    color: "#00FFFF",
    gender: "male",
  },
  {
    name: "Emily",
    age: 0.8,
    color: "#F700FF",
    gender: "female",
  },
  {
    name: "Willoby",
    age: 1.3,
    color: "#FF6600",
    gender: "male",
  },
  {
    name: "Poppy",
    age: 0.2,
    color: "#00FF00",
    gender: "female",
  },
];

let males = cats.filter((e) => e.gender == "male");
let females = cats.filter((e) => e.gender == "female");

function generateList(array) {
  array.forEach((e) =>
    $("#first-ul").append(
      `<li><i class="fas fa-cat" style = color:${e.color}></i>  ${e.name}</li>`
    )
  );
}

function maleFemale(array) {
  array.forEach((e) => {
    if (males.includes(e)) {
      $("#second-ul").append(
        `<li><i class="fas fa-cat" style = color:blue></i> <i class="fas fa-mars" style = color:blue;opacity:${e.age}; ></i> ${e.name}</li>`
      );
    } else {
      $("#third-ul").append(
        `<li><i class="fas fa-cat" style = color:pink></i> <i class="fas fa-venus" style = opacity:${e.age};color:pink; ></i> ${e.name}</li>`
      );
    }
  });
}

function thirdSect() {
  males.forEach((e) => {
    $("#fourth-ul").append(
      `<li><i class="fas fa-cat" style = color:blue></i> <i class="fas fa-mars" style = color:blue;opacity:${e.age}; ></i> ${e.name}</li>`
    );
  });
  females.forEach((e) => {
    $("#fourth-ul").append(
      `<li><i class="fas fa-cat" style = color:pink></i> <i class="fas fa-venus" style = opacity:${e.age};color:pink; ></i> ${e.name}</li>`
    );
  });
}

generateList(cats);
maleFemale(cats);
thirdSect();
