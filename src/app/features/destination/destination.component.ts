import {Component, inject} from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {Observable} from 'rxjs';
import {Destinations} from './destination.model';
import {DestinationService} from './destination.service';
import {AsyncPipe, UpperCasePipe} from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardImage,
} from '@angular/material/card';
import {MatBadge} from '@angular/material/badge';
import {MatButton} from '@angular/material/button';

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
  ],
  providers: [DestinationService],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})

export class DestinationComponent {
  private destinationService = inject(DestinationService);
  destinations$: Observable<Destinations> = this.destinationService.getCountries();
  protected readonly Continents = Continents;
  continents = Object.keys(this.Continents);
}
