import { Component } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'app-message',
    templateUrl: './my.component.html'
})
export class MyComponent {
    // message: string = 'This is some message';
    me: Student = {
        name: 'Anduin',
        age: 20
    };
}
