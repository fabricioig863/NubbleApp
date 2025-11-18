import {stringUtils} from '@utils';
describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      // escrever meu teste
      stringUtils.capitalizeFirstLetter('Ana maria');
      stringUtils.capitalizeFirstLetter('ANA MARIA');
      stringUtils.capitalizeFirstLetter('MaRIA');

      const nome = stringUtils.capitalizeFirstLetter('Ana eduarda');

      expect(nome).toBe('Ana Eduarda');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('Ana maria ')).toBe('Ana Maria');
    });
  });
});
