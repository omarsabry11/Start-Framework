import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: string[] = [
    './poert1.webp',
    './port2.webp',
    './port3.webp',
    './poert1.webp',
    './port2.webp',
    './port3.webp',
  ];
}
