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

  return int.reduce((a, b) => (b % 2 === 0 ? a : a + 1), 0) >= 2
    ? int.find((i) => i % 2 === 0)
    : int.find((i) => i % 2 !== 0);
}
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

//! Edabit 6 masala
//todo: Sonlar berilgan eng katta va kichik son qaytaruvchi dastur tuzing

function highAndLow(numbers) {
  //* ishlay olmadim qarab ishladim
  numbers = numbers.split(" ").sort((a, b) => a - b);
  return [numbers[numbers.length - 1], numbers[0]].join(" ");
  //! Best solutions
  // numbers = numbers.split(" ");
  // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  //* array ichidagi stringdagi sonlarni har birini Numberga o'tkazish
  // let arr = numbers.split(" ").map(Number);
  // return Math.max(...arr) + " " + Math.min(...arr);

  // numbers = numbers.split(" ").sort((a, b) => Number(a) - Number(b));
  // return [numbers[numbers.length - 1], numbers[0]].join(" ");
}

// console.log(highAndLow("1 2 30 30 4 5"));
// console.log(highAndLow("1 1"));
// console.log(highAndLow("1 9 3 4 -5"));

//! Edabit 7 masala
//todo: Shaharda harakatlanadigan avtobus bor, u har bir bekatda bir nechta odamni olib, tushiradi. Sizga butun son juftliklari ro'yxati (yoki massiv) taqdim etiladi. Har bir juftlikning elementlari avtobusga chiqqan odamlar sonini (birinchi element) va avtobus bekatida avtobusdan tushgan odamlar sonini (ikkinchi element) ifodalaydi. Sizning vazifangiz - oxirgi avtobus bekatidan keyin (oxirgi massivdan keyin) hali ham avtobusda bo'lgan odamlarning sonini qaytarish. Garchi bu oxirgi avtobus bekati bo'lsa ham, avtobus bo'sh bo'lmasligi mumkin va ba'zi odamlar hali ham avtobus ichida bo'lishi mumkin, ular o'sha erda uxlayotgandir: D Sinov holatlarini ko'rib chiqing.Shuni yodda tutingki, sinov holatlari avtobusdagi odamlar soni har doim >= 0 bo'lishini ta'minlaydi. Shunday qilib, qaytarilgan butun son salbiy bo'lishi mumkin emas. Massivdagi birinchi juftlikdagi ikkinchi qiymat 0 ga teng, chunki birinchi avtobus bekatida avtobus bo'sh.

var number = function (busStops) {
  // let end = 0,
  //   kel = 0,
  //   ket = 0;
  // return busStops
  //   .map((a) => {
  //     return a.reduce((a, b) => {
  //       kel += a;
  //       ket += b;
  //       end = kel - ket;
  //       return end;
  //     });
  //   })
  //   .pop();

  //! Best solutions
  // return busStops.reduce((ref, [on, off]) => ref + on - off, 0);
  //? agar oxiridagi no'l bo'lmasa NaN qaytadi
  return busStops.reduce((a, b) => a + b[0] - b[1], 0);

  // let allPeople = 0;
  // busStops.forEach((a) => {
  // allPeople += a[0];
  // allPeople -= a[1];
  // });
  // return allPeople;
};
// console.log(number([[10, 0],[30, 5],[1, 15],],5));
// console.log(number(([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17))
// console.log(number(([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21))
// console.log(number(([[0,0]]),0))

//! Edabit 8 masala
//todo: Satrlar berilgan satr ichidagi eng kichik satrning uzunligini qaytaradigan dastur tuzilsin

function findShort(s) {
  // let arr = [];
  // s.split(" ").map((a) => arr.push(a.length));
  // return Math.min(...arr);
  //! Best solutions
  // return Math.min.apply(
  // null,
  // s.split(" ").map((w) => w.length)
  // );
  return Math.min(...s.split(" ").map((a) => a.length)); //! Keyin o'ylab topdim
  // return s.split(' ').sort((a,b)=>a.length - b.length).shift().length
}

// console.log(findShort("bitcoin over world maybe knows perhaps")); // 3
// console.log(findShort("turns out random test cases are easier than writing out basic ones")); //3
// console.log(findShort("Let's travel abroad shall we")); //2

//! Edabit 9 masala
//todo: 10 lik sanoq sistemasini 2 likka o'tkazamiz va undagi 1 larni qo'shib natijani chiqaramiz

var countBits = function (n) {
  //? ishlay olmadim
  return n.toString(2).split("0").join("").length;
  // return n.toString(2).replace(/0/g, "").length;
  for (c = 0; n; n >>= 1) c += n & 1;
  return c;
};
// console.log(countBits(10));
//! Edabit 10 masala
//todo:

function high(x) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const strMax = [];
  const arr = [];
  let m = 0;
  let diffenrense = {};
  x.split(" ").forEach((stri) => {
    let d = stri;
    stri = stri.split("");
    m = 0;
    stri.forEach((a) => {
      alphabet.find((i, id) => {
        id = id + 1;
        if (i.toLowerCase() === a) {
          m += id;
        }
      });
    });
    arr.push(m);
    arr.sort((a, b) => a - b);
    diffenrense = { [d]: `${m}` };
    diffenrense;
    strMax.push(diffenrense);
  });
  let max = Math.max(...arr);
  let maxStr = strMax.find((a) => {
    return Object.values(a)[0] == max;
  });
  // return Object.keys(maxStr)[0];

  //! Best solutions
  let as = x
    .split(" ")
    .map((x) => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return x.split(" ")[as.indexOf(Math.max(...as))];
}

// console.log(high("man i need a taxi up to ubud")); //"taxi"
// console.log(high("what time are we climbing up the volcano")); //"volcano"
// console.log(high("take me to semynak")); //"semynak"
console.log(high("no sa salmz salom")); //"aa"
// console.log(high("c aa")); //"b"
// console.log(high("bb d")); //"bb"
// console.log(high("d bb")); //"d"
// console.log(high("adq")); //"aaa"

