import { ensureDateTimePtBr } from "./ensureDateTimePtBr";

describe('Ensure Date Time Pt Br', () => {
  it('should return a date with a correct format: "01/01/2022 às 12:00h"', () => {
    const data = ensureDateTimePtBr('2022-01-01T12:00:00');

    expect(data).toBe('01/01/2022 às 12:00h');
  })

  it('should return a date with a correct format: "02/02/2022 às 13:00h"', () => {
    const data = ensureDateTimePtBr('2022-02-02T13:00:00');

    expect(data).toBe('02/02/2022 às 13:00h');
  })

  it('should return a date with a correct format: "11/11/2022 às 02:00h"', () => {
    const data = ensureDateTimePtBr('2022-11-11T02:00:00');

    expect(data).toBe('11/11/2022 às 02:00h');
  })

  it('should return a date with a correct format: "12/12/2022 às 01:00h"', () => {
    const data = ensureDateTimePtBr('2022-12-12T01:00:00');

    expect(data).toBe('12/12/2022 às 01:00h');
  })
})
