function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
function createvideogame(name,category,developors,releaseDate,price,image){
    return {
        name:name,
        category:category,
        developors:developors,
        releaseDate:releaseDate,
        price:price,
        image:image,
        id:id()
    }
}
var game1=createvideogame(
    "League Of Legends",
    "MOBA",
    "Riot games",
    "27 octobre 2009",
    0,
    "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b"

)
var game2=createvideogame