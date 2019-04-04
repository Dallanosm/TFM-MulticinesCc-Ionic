import {Component, Input, OnInit} from '@angular/core';
import {SliderModel} from '../../core/models/slider.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  @Input() slideInfo: SliderModel;

  constructor() { }

  ngOnInit() {}

}
