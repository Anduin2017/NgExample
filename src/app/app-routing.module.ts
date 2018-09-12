import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MyComponent } from './my/my.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MyComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
