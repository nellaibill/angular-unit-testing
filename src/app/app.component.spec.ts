import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush,
  flushMicrotasks,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GradePipe } from './grade.pipe';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent,GradePipe],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        el = fixture.debugElement;
        component = fixture.componentInstance;
      });
  });

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'angular-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-testing');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-unit-testing app is running!'
    );
  });
  it('should render a button with subscribe', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    const btnElements = el.queryAll(By.css('.subscribe'));

    //component.btnText = "Subscribe";
    //btnElements[0].nativeElement.click();

    expect(btnElements[0].nativeElement.textContent).toBe('Subscribe');
  });

  it('should render a button with subscribed button disabled', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));

    //component.btnText = "Subscribe";
    btnElements[0].nativeElement.click();
    setTimeout(() => {}, 8000);
    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
      expect(btnElements[0].nativeElement.textContent).toBe('Subscribed');
      expect(btnElements[0].nativeElement.disabled).toBeTrue();
    }, 3000);
    //tick(8000);
    flush();
  }));

  it('should test the promises', fakeAsync(() => {
    let counter = 0;
    setTimeout(() => {
      counter = counter + 2;
    }, 2000);
    //Set TimeOut - MacroTasks
    //Promise - MicroTasks
    setTimeout(() => {
      counter = counter + 3;
    }, 3000);
    Promise.resolve().then(() => {
      counter = counter + 1;
    });
    flushMicrotasks();
    expect(counter).toBe(1);
    flush();
    expect(counter).toBe(6);
  }));

  it('should test observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBe(true);
  }));
});
