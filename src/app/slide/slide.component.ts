import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../core/models/movieModel';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  @Input() slideInfo: MovieModel;

  constructor() { }

  ngOnInit() {}

}
