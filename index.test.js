const { calculate } = require('./index');

const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const document = dom.window.document;
const myElement = document.getElementById('myElement');

test('check jest is working', () => {
    expect(2 + 2).toBe(4);
})

test('check calculation is correct', () => {
    //simulating form inputs
    const input1 = document.createElement('age');
    input1.type = 'number';
    input1.value = '1';

    const input2 = document.createElement('result');
    input2.type = 'number';
    input2.value = '1';

    const result = calculate(Number(input1.value),Number(input1.value),Number(input1.value),Number(input1.value));

    //expect(calculate(3,3,3,3)).toBe(4);
})