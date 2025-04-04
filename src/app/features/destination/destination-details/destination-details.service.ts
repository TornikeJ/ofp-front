import {ApiService} from '../../../core/services/api.service';
import {Injectable} from '@angular/core';
import {Destination} from '../destination.model';

@Injectable()
export class DestinationDetailsService extends ApiService {
  getDestinationBlog(sub: string, name: string) {
    return this.getBlog(`blogs/${sub}/${name}.md`);
  }

  getDestinationData(sub: string, name: string) {
    return this.getData<Partial<Destination>>(`blogs/${sub}/${name}.json`);
  }
}
