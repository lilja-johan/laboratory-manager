import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { shareReplay, tap} from 'rxjs/operators';
import { Sample } from '../model/sample';
import { HttpClient } from '@angular/common/http';
import { sanitizeIdentifier } from '@angular/compiler';
import { SampleData } from 'src/app/api/samples';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() {

  }
  public samples$: Observable <Sample[]> = of(SampleData.samples)
    .pipe(
      tap(sample => console.log('Products: ', JSON.stringify(sample))),
      shareReplay(1)
      )




}

