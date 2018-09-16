import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../apiresponse';
import { Observable } from 'rxjs';
import { ApiSerivice } from '../apiservice';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
    message: string;

    constructor(private api: ApiSerivice) {

    }

    ngOnInit(): void {
        this.DisplayMessage();
    }

    public DisplayMessage() {
        this.api.CallApi().subscribe(response => {
            this.message = response.message;
        });
    }
}
