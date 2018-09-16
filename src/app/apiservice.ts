import { Observable } from 'rxjs';
import { APIResponse } from './apiresponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiSerivice {
    constructor(private http: HttpClient) {
    }

    public CallApi(): Observable<APIResponse> {
        return this.http.get<APIResponse>('https://kahla.server.aiursoft.com/debugapi');
    }
}
