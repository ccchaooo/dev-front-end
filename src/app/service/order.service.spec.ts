import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { ORDERS } from '../mock-data';


describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderService = TestBed.get(ORDERS);
    expect(service).toBeTruthy();
  });
});
