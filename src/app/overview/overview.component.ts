import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from '../shared/model/sample';
import { SampleService } from '../shared/service/sample.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  samples$: Observable<Sample[]>;

  constructor(sampleService: SampleService) {
    this.samples$ = sampleService.samples$;
   }

  ngOnInit(): void {
  }

}
