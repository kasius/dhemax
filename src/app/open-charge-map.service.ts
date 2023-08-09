// openchargemap.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenChargeMapService {

  private readonly API_URL = 'https://api.openchargemap.io/v3/poi';
  private readonly API_KEY = '3c4a7a5c-86b7-47eb-8634-172ed4b9325b';

  constructor(private http: HttpClient) { }

  getPoi(): Observable<any> {
    const headers = { 'Accept': 'application/json' };
    const params = { key: this.API_KEY };

    return this.http.get<any>(this.API_URL, { headers, params });
  }
}
