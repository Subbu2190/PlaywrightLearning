/* Given a string s consisting of words and spaces, return the length of the last word in the string. */

function excercise1() {
    let s = "Hello World";

    console.log("Total length of the string s is " + s.length);

    //split the string
    let newstring = s.split(" ");

    //Get the length of the second word.

    console.log("Total number of words in the newstring array is " + newstring.length);

    let lastWord = newstring.at(1);

    console.log("The last word is " + lastWord);

    console.log("The length of the word is " + lastWord.length);

}

excercise1();

function excercise2() {

    let secondword = " fly me to the moon ";

    //Trim the string

    let modifiedword = secondword.trim(" ");

    console.log("After removing the spaces the modifiedword is -" + modifiedword);

    let mword = modifiedword.split(" ")

    console.log("The total numbers of words in mword " + mword.length);

    let lastWord = mword.at(mword.length - 1);

    console.log("The last word is " + lastWord);

    console.log("The length of the word is " + lastWord.length);

}

excercise2();

function excercise3(string1, string2) {


    let newstring1 = string1.length;
    let newstring2 = string2.length;

    if (newstring1 != newstring2) {
        console.log("Invalid Stings");
        return;
    }

    let str1 = string1.toLowerCase().split('').sort().join('');
    console.log(str1);
    let str2 = string2.toLowerCase().split('').sort().join('');
    console.log(str2);
    if (str1 === str2) {
        console.log("The word is an anagram");
    } else {
        console.log("The word is not an anagram");
    }
}

excercise3('HEllo', 'ohell');