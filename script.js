function convertToRoman(num) {
  	const romanNumerals = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	    let result = "";
	  const values = Object.values(romanNumerals).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i][1]) {
            result += values[i][0];
            num -= values[i][1];
        }
    }

    return result;


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
