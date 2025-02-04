function convertToRoman(num) {
    const romanNumerals = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = "";

    // Convert object values into an array and sort them in descending order
    const values = Object.values(romanNumerals).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i][1]) {
            result += values[i][0];
            num -= values[i][1];
        }
    }

    return result;
}