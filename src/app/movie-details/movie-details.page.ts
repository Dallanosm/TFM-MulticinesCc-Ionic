import {Component, OnInit} from '@angular/core';
import {MovieStoreService} from '../services/stores/movie-store.service';
import {ActivatedRoute} from '@angular/router';
import {MovieDetail} from '../../core/models/movieModel';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.page.html',
    styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

    public movieDetail: MovieDetail;

    constructor(private activateRoute: ActivatedRoute, private movieStore: MovieStoreService) {
        let id = activateRoute.snapshot.paramMap.get('id') as number;
        movieStore.getMovieDetail(id).then((movieDetails) => {
            this.movieDetail = movieDetails;
        });
    }

    ngOnInit() {

    }

}