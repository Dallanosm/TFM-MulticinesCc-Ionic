import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', loadChildren: './home/home.module#HomePageModule'},
    {path: 'movies/:id', loadChildren: './movie-details/movie-details.module#MovieDetailsPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
