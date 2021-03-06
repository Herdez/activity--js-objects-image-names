function getImageNamesFromObject(obj) {
   var newList = [];
   for (key in obj) {
      if (key.slice(0,4) === "img_") {
          newList.push(obj[key]);
      }
   }
   return newList;
}


var jennyObj = {
   name: "jenny",
   img_40x40: "selfy-ig-profile.png",
   job: 'seamstress',
   age:  28,
   profileActive: false,
   img_40x40: "thumnail-me.jpg",
   img_100x100: "jenny-profile.jpg",
   img_244x244: "frend-kitkat.jpg",
   img_200x200: "penguin-hat.png",
}

var rufusDolanObj = {
   name: "rufus",
   img_50x50: "srs-photo.png",
   job: 'cook',
   age:  48,
   hasFace: false,
   img_100x100: "glamour-shot.png",
   img_300x200: "at-the-game.png",
}

var userImageList2 = getImageNamesFromObject(rufusDolanObj)
console.assert(userImageList2.length === 3);
console.assert(userImageList2[0] === "srs-photo.png");
console.assert(userImageList2[1] === "glamour-shot.png");
console.assert(userImageList2[2] === "at-the-game.png");
//=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]



function getFirstLetterFromFirstName(list) {
   var newList = [];
   for (var i = 0; i < list.length; i++) {
      for (key in list[i]) {
          var obj = list[i];
          if (key === "firstName") {
               newList.push(obj[key][0].toUpperCase());
          }
      }
   }
   return newList;
}


var names = [{
  firstName: "pedro",
  lastName: "Paramo"
}, {
  firstName: "chuck",
  lastName: "Norris"
}, {
  firstName: "vicente",
  lastName: "Fernandez"
}, {
  firstName: "electric",
  lastName: "Blue"
}];

var getFirstLetter = getFirstLetterFromFirstName(names); 
console.assert(getFirstLetter.length == 4);
console.assert(getFirstLetter[0] === "P");
// => ["P", "C", "V", "E"]

console.log("Test Good");
