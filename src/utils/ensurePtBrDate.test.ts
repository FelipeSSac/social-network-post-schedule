import { ensurePtBrDate } from './ensurePtBrDate';

describe('Ensure Pt-Br Date', () => {
  it('should return a date with a correct format: "01 de janeiro"', () => {
    const data = ensurePtBrDate('2022-01-01');

    expect(data).toBe('01 de janeiro');
  });

  it('should return a date with a correct format: "02 de fevereiro"', () => {
    const data = ensurePtBrDate('2022-02-02');

    expect(data).toBe('02 de fevereiro');
  });

  it('should return a date with a correct format: "11 de novembro"', () => {
    const data = ensurePtBrDate('2022-11-11');

    expect(data).toBe('11 de novembro');
  });

  it('should return a date with a correct format: "12 de dezembro"', () => {
    const data = ensurePtBrDate('2022-12-12');

    expect(data).toBe('12 de dezembro');
  });
});
