import {Component, HostBinding, AfterViewInit, ChangeDetectionStrategy,
  ViewEncapsulation, ChangeDetectorRef, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

  routes: Object[] = [
    {
      title: 'Home',
      route: '/home',
      icon: 'home',
    }, {
      title: 'About',
      route: '/about',
      icon: 'laptop_mac',
    },
  ];
  
  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {

  }
  
  ngAfterViewInit(): void {
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }
 
  public ngOnInit() {
   
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
