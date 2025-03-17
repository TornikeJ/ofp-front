import {Destinations} from './destination.model';
import {ApiService} from '../../core/services/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class DestinationService extends ApiService {
  getDestinations() {
    return this.getData<Destinations>('getDestinations');
  }
}

