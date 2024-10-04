function add(numbers: string): number {
    if (numbers === "") return 0;
    let delimiters = /,|\n/; // Default delimiters: comma or newline
    const numArray = numbers.split(delimiters).map((num) => {
        const parsedNum = parseFloat(num.trim());
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
    console.log('numArray: ', numArray)
    return numArray
        .reduce((sum, n) => sum + n, 0);
}

export { add };
