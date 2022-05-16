require('./functions.js')

test('Return Two test', () => {
    expect(returnTwo()).toBe(2)
})

test('Greeting test', () => {
    expect(greeting('James')).toBe('Hello, James')
})

test('Addition test', () => {
    expect(add(1, 2)).toBe(3)
})

test('Multiplication test', () => {
    expect(multiply(1, 2)).toBe(2)
})

test('Division test', () => {
    expect(divide(10, 2)).toBe(5)
})

test('Subtraction test', () => {
    expect(subtract(10, 5)).toBe(5)
})