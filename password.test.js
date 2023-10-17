const validatePassword = require("./password");

// Enhetstest med Jest
describe('Password Validation', () => {
    test('Ett giltigt lösenord', () => {
      const validPassword = 'P@ssw0rd';
      fail("Test not implemented")
    });
  
    test('Lösenord saknar stor bokstav', () => {
      const passwordWithoutUpperCase = 'p@ssw0rd';
      fail("Test not implemented")
    });
  
    test('Lösenord saknar siffra', () => {
      const passwordWithoutNumber = 'P@ssword';
      fail("Test not implemented")
    });
  
    test('Lösenord saknar specialtecken', () => {
      const passwordWithoutSpecialChar = 'Passw0rd';
      fail("Test not implemented")
    });
  
    test('Lösenord för kort', () => {
      const shortPassword = 'P@ss';
      fail("Test not implemented")
    });
  });