import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradeDirective } from './grade.directive';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { GradePipe } from './grade.pipe';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, GradeDirective, GradePipe],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));
  it('should create an instance', () => {
    let mockRef = {
      nativeElement: document.createElement('div'),
    };
    const directive = new GradeDirective(mockRef);

    expect(directive).toBeTruthy();
  });

  it('should change text color when mouse enter', () => {
    let divs = el.queryAll(By.css('div'));
    let div0 =divs[0];
    div0.triggerEventHandler('mouseenter',{});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('green');
  });
});
