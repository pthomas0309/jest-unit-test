import isLeapYear from "./isLeapYear";


test('Leap Year is Passed', () => {
    expect(isLeapYear(2020)).toBe(true);
});

test('Non-Leap Year is passed', () => {
    expect(isLeapYear(2021)).toBe(false);
});

test('Leap Year as String', () => {
    expect(isLeapYear('2020')).toBe(true);
});

test('Non-Leap Year as String', () => {
    expect(isLeapYear('2021')).toBe(false);
});