import {Component, inject} from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {Observable, tap} from 'rxjs';
import {Destinations} from './destination.model';
import {DestinationService} from './destination.service';
import {AsyncPipe} from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardImage,
} from '@angular/material/card';
import {RouterLink} from '@angular/router';

const Continents: { [key: string]: string } = {
  europe: 'Europe',
  asia: 'Asia',
  southAmerica: 'South America',
  northAmerica: 'North America'
};

@Component({
  selector: 'app-destination',
  imports: [
    MatTabGroup,
    MatTab,
    AsyncPipe,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatTabLabel,
    RouterLink,
  ],
  providers: [DestinationService],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})

export class DestinationComponent {
  private destinationService = inject(DestinationService);
  destinations$: Observable<Destinations> = this.destinationService.getDestinations().pipe(tap(data => console.log(data)));
  protected readonly Continents = Continents;
  continents = Object.keys(this.Continents);
}
