import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsCreationComponent } from './assets-creation.component';

describe('AssetsCreationComponent', () => {
  let component: AssetsCreationComponent;
  let fixture: ComponentFixture<AssetsCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsCreationComponent]
    });
    fixture = TestBed.createComponent(AssetsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
