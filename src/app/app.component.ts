import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UpperCasePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, MatButton, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ofp-front';

  ngOnInit(): void {
  }
}
