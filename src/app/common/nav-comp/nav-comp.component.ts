import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-comp',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-comp.component.html',
  styleUrl: './nav-comp.component.css'
})
export class NavCompComponent {

}
