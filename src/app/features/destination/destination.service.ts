import {Destinations} from './destination.model';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class DestinationService {
  private httpService = inject(HttpClient);

  getCountries() {
    return this.httpService.get<Destinations>('/api/getCountries');
  }
}

