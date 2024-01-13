import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  beforeEach(() => {});
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should assign grade A when mark is 92', () => {
    const pipe = new GradePipe();
    let result = pipe.transform(92);
    expect(result).toBe("A");
  });
});
