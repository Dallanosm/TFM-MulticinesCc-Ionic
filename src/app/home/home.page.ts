import {Component} from '@angular/core';
import {MovieModel} from '../../core/models/movieModel';
import {MovieStoreService} from '../services/stores/movie-store.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    slideOpts = {
        effect: 'flip'
    };

    public slides: Array<MovieModel>;

    constructor(private movieStore: MovieStoreService) {
        this.movieStore.movieList.subscribe((movies) => {
            if (movies) {
                this.slides = movies;
            }
        });
    }
}


