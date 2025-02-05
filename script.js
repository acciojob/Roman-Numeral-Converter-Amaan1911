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

    for (let i = 0; i <= 6; i++) {
        let [symbol, value] = romanNumerals[i];

        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;


}
    