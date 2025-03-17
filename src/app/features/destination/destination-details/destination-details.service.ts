import {ApiService} from '../../../core/services/api.service';
import {Destination} from '../destination.model';
import {Injectable} from '@angular/core';

@Injectable()
export class DestinationDetailsService extends ApiService {
  getDestinationDetails(name: string) {
    return this.getData<Destination>(`getDestinations/${name}`);
  }
}
