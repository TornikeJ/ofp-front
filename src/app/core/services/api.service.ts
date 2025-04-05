import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {
  private baseUrl = 'assets';

  private http = inject(HttpClient);

  getBlog(endpoint: string) {
    return this.http.get(`${this.baseUrl}/${endpoint}`, {responseType: 'text'});
  }

  getData<T>(endpoint: string) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }
}
