import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'fd-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = 'facedoctor-fe';
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof ActivationEnd) {
        console.log(val.snapshot);
        this.title = val.snapshot?.data?.title;
      }
    });
  }
}
