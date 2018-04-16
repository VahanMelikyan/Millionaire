import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MillionaireComponent} from "./millionaire/millionaire.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ResultsComponent} from "./results/results.component";

const appRoutes: Routes = [
    {path: 'game', component: MillionaireComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'results', component: ResultsComponent},
    {path: '', redirectTo: '/registration', pathMatch: 'full'},
    {path: '**', redirectTo: '/.', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

export const RoutingComponents = [MillionaireComponent, RegistrationComponent, ResultsComponent];