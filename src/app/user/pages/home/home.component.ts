import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

declare var Swiper: any; // Khai báo Swiper nếu không import từ package

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit, OnDestroy {
  private swiper: any;
  private routerSubscription: Subscription | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSwiper();
    }

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          this.initializeSwiper();
        }
      });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.swiper) {
      this.swiper.destroy(true, true);
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private initializeSwiper(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
