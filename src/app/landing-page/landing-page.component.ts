import { Component } from '@angular/core';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { TrianglesComponent } from '../triangles/triangles.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ContactButtonComponent, TrianglesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
