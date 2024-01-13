import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  /*beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ declarations: [HomeComponent] })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have correct content', () => {
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');
    let textElements = el.queryAll(By.css('.searchText'));
    expect(textElements[0].nativeElement.value).toBe('1234');
    component.content = 'abcd';
    fixture.detectChanges();
    let textElementsFromComponent = el.queryAll(
      By.css('.searchTextValueFromComponent')
    );
    expect(textElementsFromComponent[0].nativeElement.value).toBe('abcd');
  });
});
