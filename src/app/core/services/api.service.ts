import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {
  private baseUrl = 'api';

  private http = inject(HttpClient);

  getData<T>(endpoint: string) {
    return this.http.get<T>(`/${this.baseUrl}/${endpoint}`);
  }
}
