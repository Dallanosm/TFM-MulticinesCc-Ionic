import {Injectable} from '@angular/core';
import {MovieDetail, MovieModel} from '../../../core/models/movieModel';
import {catchError, map, timeout} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieStoreService {

    readonly BASE_URL = 'http://llanosmunoz.com:8084';
    readonly TIMEOUT = 20000;

    public movieList: BehaviorSubject<Array<MovieModel>>;

    constructor(private http: HttpClient) {
        this.movieList = new BehaviorSubject<Array<MovieModel>>(null);
        this.getMovies().then((movies) => {
            this.movieList.next(movies);
        });
    }

    public getMovies(): Promise<any> {
        return this.http.get(`${this.BASE_URL}/movies`)
            .pipe(
                timeout(this.TIMEOUT),
                map(response => response as Array<MovieModel>),
                catchError((error) => console.log(error))
            ).toPromise();
    }


    public getMovieDetail(id: number): Promise<any> {
        return this.http.get(`${this.BASE_URL}/movies/${id}`)
            .pipe(
                timeout(this.TIMEOUT),
                map(response => response as MovieDetail)
            ).toPromise();
    }
}
