import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Detalles de{{title}}</h1><h2>{{hero}}!</h2>'
})
export class AppComponent { 
	title = 'Tour of Heroes';
	hero = 'Pepito';

}
