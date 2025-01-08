import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaFaceComponent } from './insta-face.component';

describe('InstaFaceComponent', () => {
  let component: InstaFaceComponent;
  let fixture: ComponentFixture<InstaFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstaFaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstaFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
