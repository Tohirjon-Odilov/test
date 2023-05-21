// let array1 = ["a", "d", , "c"];
// array1;
// {
//   let iterator = Object.keys(array1).toString();

//   iterator;

//   console.log(Array(8).length);
// }

// {
//   let iterator = array1.values();
//   array1;
//   iterator;

//   console.log(...array1.values());
// }

// {
//   const prices = ["￥7", 500, 8123, 12];
//   let price = prices.toLocaleString("ja-JP", {
//     style: "currency",
//     currency: "JPY",
//   });

//   // "￥7,￥500,￥8,123,￥12"
//   price;
// }

// {
//   const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];

//   const array1 = ["a", "b", "c"];

//   const iterator1 = array1.entries();

//   console.log(iterator1.next().value);
//   console.log(iterator1.next().value);
//   console.log(iterator1.next().value);
//   const arrayLike = {
//     length: 3,
//     0: "a",
//     1: "b",
//     2: "c",
//   };
//   for (const entry of Array.prototype.entries.call(arrayLike)) {
//     entry;
//   }
//   // console.log(iterator1.next().value);
//   // Expected output: Array [1, "b"]
// }

// {
//   const stringObj = new String("foo");

//   console.log(stringObj);

//   console.log(stringObj.valueOf());
// }

// // ##Birinchi amaliyot

// let numberOfSeries = +prompt("Nechta film ko'rdingiz?");
// let seriesDb = {
//   count: numberOfSeries,
//   series: {},
//   actor: {},
//   genres: [],
//   private: false,
// };
// for (let i = 0; i < 2; i++) {
//   let movies = prompt('Oxirgi marta qaysi filmni ko"rdingiz?');
//   let star = prompt("Necha baxo berasiz?");
//   seriesDb.series[movies] = star;
// }
// console.log(seriesDb);

// const speed = prompt("Tezlikni kiriting");
// const time = prompt("Safar muddatini kiriting");

// const kiloMetr = speed * time;

// alert(kiloMetr);

//! Edabit 1 masala
function disemvowel(str) {
  //   let newW = "";
  //   for (i of str) {
  //     if (i.toLowerCase() !== "a") {
  //       if (i.toLowerCase() !== "e") {
  //         if (i.toLowerCase() !== "u") {
  //           if (i.toLowerCase() !== "i") {
  //             if (i.toLowerCase() !== "o") {
  //               newW += i;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return newW;
  //! Best solutions
  // return str.replace(/[aeiou]/gi, "");
  //   const vowels = "aeiou";
  //   return str
  //     .split("")
  //     .filter((letter) => !vowels.includes(letter.toLowerCase()))
  //     .join("");
}

// console.log(disemvowel("Salom"));

//! Edabit 2 masala
function maskify(cc) {
  //   return cc.split("").fill("#", 0, -4).join("");
  //! Best solutions
  //   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
  //   return cc.replace(/.(?=....)/g, "#");
  //   return cc.replace(/.(?=.{4})/g, "#");
  // return cc.slice(-4).padStart(cc.length, "#");
}
// console.log(maskify("4556364607935616"));

//!Edabit 3 masala
//todo: 4 va 6 sondan iborat son bo'lsa true aks holda son ichiga harf yoki 4 6 dan ko'p yoki oz bo'lsa ham false qaytsin
function validatePIN(pin) {
  /*******************************
   * todo O'ZIM ISHLAY OLMADIM *
   *******************************/
  //! Best solutions
  //   return /^(\d{4}|\d{6})$/.test(pin);
  //   let aa = pin.length;
  //   if (aa != 4 && aa != 6) {
  //     return false;
  //   }
  //   for (const i in pin) {
  //     if (pin[i] > "9" || pin[i] < "0") {
  //       return false;
  //     }
  //   }
  //   return true;
  // pin = pin.split("");
  // const findNaN = pin.find((character) => !(parseInt(character) >= 0));
  // if ((pin.length === 4 || pin.length === 6) && !findNaN) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// console.log(validatePIN("a256"));
// console.log(validatePIN("231"));
// console.log(validatePIN("112531"));

//! Edabit 4 masala
//todo: 4 harfdan kattasini teskari qilish

function spinWords(string) {
  // let word = [];
  // string.split(" ").forEach((i) => {
  //   if (i.length > 4) {
  //     word.push(i.split("").reverse().join(""));
  //   } else {
  //     word.push(i);
  //   }
  // });
  // return word.join(" ");

  //! Best solutions
  // return string
  //   .split(" ")
  //   .map(function (word) {
  //     return word.length > 4 ? word.split("").reverse().join("") : word;
  //   })
  //   .join(" ");

  // return string.replace(/\w{5,}/g, function (w) {
  //   return w.split("").reverse().join("");
  // });

  return string
    .split(" ")
    .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
    .join(" ");
}
// console.log(spinWords("salom nima gaplar olamda tinchmisan ayiq"));
// console.log(spinWords("1155546879 nima gaplar"));

//! Edabit 5 masala
//todo: massiv ichida sonlar berilgan ular ichida masalan 4 juft va 1 toq son bo'lsa unda toq, 4 toq 1 juft bo'lsa unda juft son chiqsin

function findOutlier(int) {
  // const even = [];
  // const odd = [];
  // int.map((i) => {
  //   return i % 2 === 0 ? even.push(i) : odd.push(i);
  // });
  // return even.length === 1 ? even[0] : odd[0];

  //! Best solutions
  // let even = int.filter((a) => a % 2 === 0);
  // let odd = int.filter((a) => a % 2 !== 0);
  // return even.length == 1 ? even[0] : odd[0];

  // return int.slice(0, 3).reduce((a, b) => (b % 2 === 0 ? a : a + 1), 0) >= 2
  //   ? int.find((i) => i % 2 === 0)
  //   : int.find((i) => i % 2 !== 0);

  return int.reduce((a, b) => {
    console.log(a);
    console.log(b);
  });
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
