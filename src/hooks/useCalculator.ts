function add(numbers: string): number {
    if (numbers === "") return 0;
    let delimiters = /,|\n/; // Default delimiters: comma or newline

    if (numbers.startsWith("//")) {
        const singleDelimiterMatch = numbers.match(/^\/\/(.)\n/);
        if (singleDelimiterMatch) {
            delimiters = new RegExp(singleDelimiterMatch[1], "g");
            numbers = numbers.slice(4);
        }
    }

    if (numbers.endsWith(",") || numbers.endsWith("\n")) {
        throw new Error("Input string has an invalid trailing delimiter.");
    }

    const numArray = numbers.split(delimiters).map((num) => {
        const parsedNum = parseFloat(num.trim());
        return isNaN(parsedNum) ? 0 : parsedNum;
    });

    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray
        .reduce((sum, n) => sum + n, 0);
}

export { add };
