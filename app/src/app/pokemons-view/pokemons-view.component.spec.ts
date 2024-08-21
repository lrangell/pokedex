import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsViewComponent } from './pokemons-view.component';

describe('PokemonsViewComponent', () => {
  let component: PokemonsViewComponent;
  let fixture: ComponentFixture<PokemonsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
