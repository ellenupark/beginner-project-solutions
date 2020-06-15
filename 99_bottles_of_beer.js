/* 
Song Player for 99 Bottles of Beer on the Wall
Author: ellenupark
Created: June 14th 2020

This code will play the song 99 Bottles of Beer for a specified number of times
It takes in one argument, num, which is the desired start number of bottles.
*/

const playSong = (num) => {
  
    // Variables containing all lyric strings

    let lyricOne = ' bottles of beer on the wall, ';
    let lyricTwo = ' bottles of beer. Take one down, pass it around, ';
    let lyricThree = ' bottles of beer on the wall...';

    let lyricOneAlt = ' bottle of beer on the wall, ';
    let lyricTwoAlt = ' bottle of beer. Take one down, pass it around, ';
    let lyricThreeAlt = ' bottle of beer on the wall...';

    let endLyricOne = 'No more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ';
    let endLyricTwo = ' bottles of beer on the wall...';

    let endLyricTwoAlt = ' bottle of beer on the wall...';

    // Checks if num input is valid

    if (num <= 0 || !Number.isInteger(num) || isNaN(num)) {
        return 'Invalid value. Please input integer between 1 and 99.'
    };
  
    // Main function 

    for (let i = num; i > 0; i--) {
        if (i > 2) {
          console.log (i + lyricOne + i + lyricTwo + (i - 1) + lyricThree);
        } else if (i === 2) {
          console.log (i + lyricOne + i + lyricTwo + (i - 1) + lyricThreeAlt);
        } else if (i === 1 && num === 1) {
          return i + lyricOneAlt + i + lyricTwoAlt + endLyricOne + i + lyricThreeAlt;
        } else if (i === 1) {
          return i + lyricOneAlt + i + lyricTwoAlt + endLyricOne + num + endLyricTwo;
        } 
    }
}

//Call playSong(num) function
playSong(num);