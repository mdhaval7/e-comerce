import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyoderComponent } from './myoder.component';

describe('MyoderComponent', () => {
  let component: MyoderComponent;
  let fixture: ComponentFixture<MyoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyoderComponent]
    });
    fixture = TestBed.createComponent(MyoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
