import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMylistComponent } from './product-mylist.component';

describe('ProductMylistComponent', () => {
  let component: ProductMylistComponent;
  let fixture: ComponentFixture<ProductMylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
