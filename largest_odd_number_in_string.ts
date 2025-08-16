function largestOddNumber(num: string): string {
    // Check if the whole number is already odd
    if (parseInt(num[num.length - 1]) % 2 !== 0) {
        return num;
    }

    // Otherwise, find the largest odd-numbered suffix
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 !== 0) {
            return num.substring(0, i + 1);
        }
    }

    // No odd digit found → return empty string
    return "";
}
