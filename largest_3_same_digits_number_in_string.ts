function largestGoodInteger(num: string): string {
    const sameDigitNumbers: string[] = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"];

    for (const sameDigitNumber of sameDigitNumbers) {
        if (num.includes(sameDigitNumber)) {
            return sameDigitNumber;
        }
    }
    return "";
}
