import {Component} from '@angular/core';
import {SliderModel} from '../../core/models/slider.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    slideOpts = {
        effect: 'flip'
    };

    public slides: Array<SliderModel>;

    constructor() {
        this.slides = [];
        this.slides.push({
            id: 1,
            title: 'Capitana Marvel',
            ratio: '+7',
            img: 'https://s3-eu-west-1.amazonaws.com/disasterdraw.blindcat/peliculas/000/004/310/original/capitana_marvel_75077.jpg?1551918359'
        } as SliderModel);
        this.slides.push({
            id: 2,
            title: 'Dolor y gloria',
            ratio: '+16',
            img: 'https://s3-eu-west-1.amazonaws.com/disasterdraw.blindcat/peliculas/000/004/338/original/dolor_y_gloria_75206.jpg?1553211412'
        } as SliderModel);
        this.slides.push({
            id: 3,
            title: 'Dumbo',
            ratio: 'Apta',
            img: 'https://s3-eu-west-1.amazonaws.com/disasterdraw.blindcat/peliculas/000/004/317/original/dumbo_73862.jpg?1553720388'
        } as SliderModel);

    }
}


