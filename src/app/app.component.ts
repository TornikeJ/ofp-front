import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, MatButton, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ofp-front';

  ngOnInit(): void {
  }
}
