import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  key: string = 'test_2bec17255065e582e5bf96cf4a5b9a';

  constructor(private httpClient: HttpClient) {}

  getTable(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.key}`,
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(
      'https://api.api-futebol.com.br/v1/campeonatos/2/tabela',
      requestOptions
    );
  }
}
