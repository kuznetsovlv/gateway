import {
  capitalizeFirstLetter,
  toCamelCaseWord,
  toCamelCaseProps
} from './camelCase';

describe('Test capitalizeFirstLetter', () => {
  it('Try to capitalize', () => {
    expect(capitalizeFirstLetter('test')).toBe('Test');
  });
});

describe('Test toCamelCaseWord', () => {
  it('Try to camel case snake case', () => {
    expect(toCamelCaseWord('snake_cased_word_to_be_camel_cased')).toBe(
      'snakeCasedWordToBeCamelCased'
    );
  });
});

describe('Test toCamelCaseProps', () => {
  it("Try to camel case object' props", () => {
    expect(
      toCamelCaseProps({
        snake_cased_prop_to_be_camel_cased: 'value_should_not_be_changed',
        camelCasedPropNotToChange: 'value_should_not_be_changed'
      })
    ).toEqual({
      snakeCasedPropToBeCamelCased: 'value_should_not_be_changed',
      camelCasedPropNotToChange: 'value_should_not_be_changed'
    });
  });
});
