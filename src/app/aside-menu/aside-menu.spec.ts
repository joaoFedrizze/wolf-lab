import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenu } from './aside-menu';

describe('AsideMenu', () => {
  let component: AsideMenu;
  let fixture: ComponentFixture<AsideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
