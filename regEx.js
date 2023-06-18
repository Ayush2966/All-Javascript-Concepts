// Regular
// expressions are a way to describe patterns in string data. They form a small,
// separate language that is part of JavaScript and many other languages and
// systems.
// Regular expressions are both terribly awkward and extremely useful. Their
// syntax is cryptic, and the programming interface JavaScript provides for them
// is clumsy. But they are a powerful tool for inspecting and processing strings.
// Properly understanding regular expressions will make you a more effective pro-
// grammer.

// creating a RegExp

let regEx = RegExp("abc");
let regEx2 = /abc/;

console.log(regEx, regEx2);

regEx2 = /abc\+/;

// + and other signs have other meaning in regex so we need need to provide /
// for + sign

console.log(regEx, regEx2);

// Testing for matches

console.log(regEx.test("abcdef"));
console.log(regEx.test("sjasjkabcdef"));
console.log(regEx.test("askkmxbcdef"));
console.log(regEx.test("absxal,xlcdef"));

// A regular expression consisting of only nonspecial characters simply repre-
// sents that sequence of characters. If abc occurs anywhere in the string we are
// testing against (not just at the start), test will return true .

console.log(/[0-9]/.test("in 1992"));
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0123456789]/.test("in 1992"));

// \d Any digit character
// \w An alphanumeric character (“word character”)
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// .
// Any character except for newline

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("30-jan-2003 15:20"));
console.log(dateTime.test("01-30-2003 15:20"));

// ^ compare any later / digit other then in the exp

let notBinary = /[^01]/;
let notVowel = /[^aeiou]/;

console.log(notBinary.test("01010101000011101011110"));
console.log(notBinary.test("01012010101111021111110"));
console.log(notVowel.test("lkjhgbnmmqwwwqwzaioioiaoiaoizx"));
console.log(notVowel.test("aeio"));

console.log(/\d+/.test("123333"));
console.log(/\d+/.test(""));
console.log(/\d*/.test("123333"));
console.log(/\d*/.test(" "));

//* allows to zero to more and + sign allows 1 to more

//? shows optional character

let color = /colou?r/;

console.log(color.test("color"));
console.log(color.test("colour"));

// {1,2} , {4} use for the range and occurs time
// {5,} means five or more times

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(dateTime2.test("1-6-2003 8:45"));
console.log(dateTime2.test("12-06-2003 02:45"));

let cartoonCrying = /boo+(hoo+)+/i;

console.log(cartoonCrying.test("BoohoohooohoOoho"));

// i in the exp shows that it can be case sensitive

// exc method of reg expression give us null if nothing matches and
// if something matches it return that value

let match = /\d+/.exec("one two 100");
console.log(match);

console.log("one two 100".match(/\d+/)); // string method

let quotedText = /'([^']*)'/;

console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("124"));

// date object

console.log(new Date());

function getDate(str) {
  let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(str);
  return new Date(year, day, month);
}

console.log(getDate("1-30-2003"));

// \b a word boundary

console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));
console.log(/\bcat\b/.test("con cat"));

let animalCount = /\b\d+ (cows|camel|goat)s?\b/;

console.log(animalCount.test("15 camels"));
console.log(animalCount.test("15 dogs"));

let number = /\b([01]+b|[\da-f]+h|\d+)\b/;

console.log(number.test("1000b"));
console.log(number.test("7ah"));
console.log(number.test("1500"));

// string replace method

console.log("mama".replace("m", "p"));

console.log("burobudar".replace(/[ou]/, "a"));
console.log("burobudar".replace(/[ou]/g, "a"));

console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+) ,(\w+)/g,
    "$2 $1"
  )
);

let s = "the cia and fbi";

console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));

console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */ + /* b */ 1"));
// → 1 1

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

console.log("  word".search(/\S/));
console.log("  ".search(/\S/));

let pattern = /y/g;

pattern.lastIndex = 3;

let matchh = pattern.exec("xyzzy");

console.log(matchh, matchh.index);
console.log(matchh, pattern.lastIndex);

console.log("banana".match(/an/g));

let input = "A string with 3 numbers in it... 42 and 88.";
let numberr = /\b\d+\b/g;
let matchhh;

// while (matchhh = numberr.exec(input)) {
//     console.log("found" ,match[0], "at", match.index)
// }

// searchengine=https://duckduckgo.com/?q=$1
// spitefulness=9.7
// ; comments are preceded by a semicolon...
// ; each section concerns an individual enemy
// [larry]
// fullname=Larry Doe
// type=kindergarten bully
// website=http://www.geocities.com/CapeCanaveral/11451
// [davaeorn]
// fullname=Davaeorn
// type=evil wizard
// outputdir=/home/marijn/enemies/davaeorn

// The exact rules for this format (which is a widely used format, usually called
//     an INI file) are as follows:
//     • Blank lines and lines starting with semicolons are ignored.
//     • Lines wrapped in [ and ] start a new section.
//     • Lines containing an alphanumeric identifier followed by an = character
//     add a setting to the current section.
//     • Anything else is invalid.

function parseINI(str) {
  let result = {};
  let section = result;
  str.split(/\r?\n/).forEach(element => {
    let match;
    if ((match = element.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = element.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(element)) {
      throw new Error("line '" + line + "'is not valid.");
    }
  });
  return result;
}

console.log(
  parseINI(`
name=Vasilis
[address]
city=Tessaloniki`)
);
// → {name: "Vasilis", address: {city: "Tessaloniki"}}


