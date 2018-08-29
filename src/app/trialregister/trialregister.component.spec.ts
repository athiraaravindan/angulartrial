import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialregisterComponent } from './trialregister.component';

describe('TrialregisterComponent', () => {
  let component: TrialregisterComponent;
  let fixture: ComponentFixture<TrialregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
