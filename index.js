$("#form").hide();

function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function createvideogame(
  name,
  category,
  developors,
  releaseDate,
  price,
  image
) {
  return {
    name: name,
    category: category,
    developors: developors,
    releaseDate: releaseDate,
    price: price,
    image: image,
    id: id(),
  };
}

function Makevideogame(initial) {
  return {
    name: initial,
    list: [],
    add: add,
    display: display,
    remove: remove,
  };
}

var add = function (name, category, developors, releaseDate, price, image) {
  this.list.push(
    createvideogame(name, category, developors, releaseDate, price, image, id)
  );
};

var display = function () {
  $("#hi").empty();

  var a = this;

  for (let i = 0; i < this.list.length; i++) {
    var c = $(`<div id=${i} class="all"></div>`);
    c.append(`<div ><p>name:${this.list[i].name}</p></div>`);
    c.append(`<div><p>category:${this.list[i].category}</p></div>`);
    c.append(`<div><p>developors:${this.list[i].developors}</p></div>`);
    c.append(`<div><p>releaseDate:${this.list[i].releaseDate}</p></div>`);
    c.append(`<div><p>price:${this.list[i].price}</p></div>`);
    c.append(`<img src="${this.list[i].image}"> `);
    var but = $("<button >remove</button>`)");
    but.on("click", function (i) {
      a.remove(i);
    });
    c.append(but);
    $("#hi").append(c);
  }
};
var remove = function (id) {
  this.list.splice(id, 1);
  this.display();
};



var x = Makevideogame();

x.add(
  "League Of Legends",
  "MOBA",
  "Riot games",
  "27 octobre 2009",
  0,
  "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b"
);
x.add(
  "Assassin's Creed Valhalla",
  "adventure",
  "Ubisoft",
  "10 novembre 2020",
  20,
  "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZAlQrGYxXi8Bo8PuhJd5g/206c57ecb27e58b4555089c6c80d3db5/ACV_meta.png"
);
x.add(
  "Fortnite",
  "royal battle",
  "Epic games",
  "21 juillet 2017",
  0,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtS4sZv_gqhio9QZzxMRwwuCzSyWUiqZxAvw&s"
);
x.add(
  "Valorant",
  "FPS",
  "Riot games",
  "2 juin 2020",
  0,
  "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/valorant-ameliorer-aim-visee-astuces"
);
x.add(
  "Hearthstone",
  "card game",
  "Blizzard",
  "11 mars 2014",
  0,
  "https://blz-contentstack-images.akamaized.net/v3/assets/bltc965041283bac56c/blt82bb2ee72a2b0baf/651ee3b3e4a8af6535bd6de3/stepintavernthumbnail.PNG"
);
x.add(
  "The Legend of Zelda",
  "adventure",
  "Nintendo",
  "21 février 1986",
  50,

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqsNiv56Y5FNp6VgFHzpHqH5Aa58lm2-8Bg&s"
);
x.display();

function show() {
  $("#form").show();
  $(".all").hide();
}

var n = $("#name").val();
var c = $("#category").val();
var d = $("#developors").val();
var r = $("#date").val();
var p = $("#price").val();
var im = $("#image").val();


