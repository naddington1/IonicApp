import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class tvService {

  constructor(private http: HttpClient) { }

  getTopRatedTv(page = 1): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/tv/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  getTvDetails(id: string) {
    return this.http.get(
      `${environment.baseUrl}/tv/${id}?api_key=${environment.apiKey}`
    )
  }
}