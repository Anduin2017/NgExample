import { Component } from '@angular/core';
import { Student } from '../student';
import { ApiSerivice } from '../apiservice';

@Component({
    selector: 'app-message',
    templateUrl: './my.component.html'
})
export class MyComponent {
    constructor(private api: ApiSerivice) {

    }
    // message: string = 'This is some message';
    group: Student[] = [{
        name: 'Anduin',
        age: 20
    },
    {
        name: 'Yolo',
        age: 21
    },
    {
        name: 'Lily',
        age: 22
    }];

    public addStudent(name: string, age: number) {
        const me = 10 / 3;
        this.group.push({
            name: name,
            age: me
        });
    }
}
