import fizzOrBuzz from './fizzOrBuzz';

test('Number is divisible by three', () => {
    expect(fizzOrBuzz(9)).toBe('Fizz');
  });
  
  test('Number is divisible by five', () => {
    expect(fizzOrBuzz(10)).toBe('Buzz');
  });
  
  test('Number is divisible by three and five', () => {
    expect(fizzOrBuzz(15)).toBe('FizzBuzz');
  });
  
  test('Number is divisible by neither three or five', () => {
    expect(fizzOrBuzz(2)).toBe(2);
  });

  test('Zero is passed', () => {
      expect(fizzOrBuzz(0)).toBe(undefined);
  })
  
  test('String is passed', () => {
    expect(fizzOrBuzz('FizzBuzz')).toBe(NaN);
  });