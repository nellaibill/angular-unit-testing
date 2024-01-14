import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { GradeDirective } from './grade.directive';
import { GradePipe } from './grade.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('appRouting', () => {
  let router: Router;
  let appComponetFixture: ComponentFixture<AppComponent>;
  let homeComponetFixture: ComponentFixture<HomeComponent>;
  let infoComponetFixture: ComponentFixture<InfoComponent>;

  let location: Location;
  let el: DebugElement;
  let btnEl:DebugElement;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent,
        AppComponent,
        InfoComponent,
        GradeDirective,
        GradePipe,
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    appComponetFixture = TestBed.createComponent(AppComponent);
    homeComponetFixture = TestBed.createComponent(HomeComponent);
    infoComponetFixture = TestBed.createComponent(InfoComponent);

    el = homeComponetFixture.debugElement;
    btnEl=infoComponetFixture.debugElement;

  });

  it('should navigate to default path', waitForAsync(() => {
    appComponetFixture.detectChanges();
    appComponetFixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
  it('navigate to info after clicking info link from home component', waitForAsync(() => {
    homeComponetFixture.detectChanges();
    let links = el.queryAll(By.css('a'));
    links[0].nativeElement.click();
    homeComponetFixture.whenStable().then(() => {
      expect(location.path()).toBe('/info');
    });
  }));
  it('navigate to home after clicking back link from info component', waitForAsync(() => {
    infoComponetFixture.detectChanges();
    let links = btnEl.queryAll(By.css('button'));
    links[0].nativeElement.click();
    infoComponetFixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
});
