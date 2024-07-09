import { Component } from '@angular/core';
import { ColoredBarsComponent } from '../colored-bars/colored-bars.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ColoredBarsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
