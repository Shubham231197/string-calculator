import {GetSum}from '../src/app/page'; 

describe('GetSum function', () => {
    test('returns error for negative numbers', () => {
        expect(GetSum("A-11,2;4;5;-6-6")).toBe("Negative numbers not allowed: -11, -6, -6");
    });

    test('calculates sum of positive numbers', () => {
        expect(GetSum("2;4;5")).toBe(11);
    });

    test('handles decimal numbers', () => {
        expect(GetSum("1.5, 2.5, 3.5")).toBe(7.5);
    });

    test('returns zero for input with no numbers', () => {
        expect(GetSum("No numbers here!")).toBe(0);
    });

    test('handles mixed positive and negative numbers', () => {
        expect(GetSum("3.14 and -2.71")).toBe("Negative numbers not allowed: -2.71");
    });

    test('returns error for all negative numbers', () => {
        expect(GetSum("-1; -2; -3")).toBe("Negative numbers not allowed: -1, -2, -3");
    });

    test('handles input with zero', () => {
        expect(GetSum("100;200;300;0")).toBe(600);
    });

    test('returns error for negative mixed with positives', () => {
        expect(GetSum("50.5; -30; 20.1")).toBe("Negative numbers not allowed: -30");
    });
});
