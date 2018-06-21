let fns = require('./../utils/functions');

test('no username fails test', () => {
    // arrange & act
    let result = fns.usernameCheck();
    // assert
    expect(result).toBeFalsy();
})