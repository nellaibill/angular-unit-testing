import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let shared: SharedService;
  let calc: CalcService;
  beforeEach(() => {
    console.log('before each is called');
    //const shared = new SharedService();
    //spyOn(shared,"mySharedFunction").and.callThrough();
    //shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    //calc = new CalcService(shared);
    TestBed.configureTestingModule({
      providers: [CalcService, SharedService],
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });
  it('should multiply two numbers', () => {
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
   // expect(shared.mySharedFunction).toHaveBeenCalled();
  });
  it('should add two numbers', () => {
    const result = calc.add(3, 5);
    expect(result).toBe(8);
    //expect(shared.mySharedFunction).toHaveBeenCalled();
  });
});
