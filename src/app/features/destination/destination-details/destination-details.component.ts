import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Destination} from '../destination.model';
import {DestinationDetailsService} from './destination-details.service';
import {Observable, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {DomSanitizer, Meta, SafeHtml} from '@angular/platform-browser';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
  selector: 'app-destination-details',
  imports: [
    AsyncPipe,
    MarkdownComponent,
  ],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.scss',
  providers: [DestinationDetailsService]
})
export class DestinationDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private meta = inject(Meta);
  private destinationService = inject(DestinationDetailsService);

  markdownContent!: string;
  destinationData!: Partial<Destination>;

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params['name']) {
      this.destinationService.getDestinationBlog(params['sub'], params['name']).subscribe((data => {
        this.markdownContent = data;
      }));

      this.destinationService.getDestinationData(params['sub'], params['name']).subscribe((data => {
        this.destinationData = data;
      }));
      this.meta.updateTag({name: 'description', content: 'Description of ' + params['name']});
    }
  }
}
