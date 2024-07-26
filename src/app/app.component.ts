import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StyleManagerService } from '../service/style-manager.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'teamplate_angular';
  constructor(
    private router: Router,
    private styleManager: StyleManagerService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url.startsWith('/admin')) {
            this.loadAdminStyles();
            this.loadAdminScripts();
          } else  {
            this.loadUserStyles();  
            this.loadUserScripts();
          }
        }
      });
    }
  }

  loadAdminStyles() {
    this.styleManager.setStyles(
      'admin-theme',
      'assets/admin/vendor/bootstrap/css/bootstrap.min.css',
      'assets/admin/vendor/bootstrap-icons/bootstrap-icons.css',
      'assets/admin/vendor/boxicons/css/boxicons.min.css',
      'assets/admin/vendor/quill/quill.snow.css',
      'assets/admin/vendor/quill/quill.bubble.css',
      'assets/admin/vendor/remixicon/remixicon.css',
      'assets/admin/vendor/simple-datatables/style.css',
      'assets/admin/css/style.css',

    );
  }


  loadAdminScripts() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScripts(
        'assets/admin/vendor/apexcharts/apexcharts.min.js',
        'assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js',
        'assets/admin/vendor/chart.js/chart.umd.js',
        'assets/admin/vendor/echarts/echarts.min.js',
        'assets/admin/vendor/quill/quill.min.js',
        'assets/admin/vendor/simple-datatables/simple-datatables.js',
        'assets/admin/vendor/tinymce/tinymce.min.js',
        'assets/admin/vendor/php-email-form/validate.js',
        'assets/admin/js/main.js'
      );
    }
  }

  loadUserStyles() {
    this.styleManager.setStyles(
      'usermanager-theme',
      'assets/usermanager/vendor/bootstrap/css/bootstrap.min.css',
      'assets/usermanager/vendor/bootstrap-icons/bootstrap-icons.css',  
      'assets/usermanager/vendor/aos/aos.css',
      'assets/usermanager/vendor/glightbox/css/glightbox.min.css',
      'assets/usermanager/vendor/swiper/swiper-bundle.min.css', 
      'assets/usermanager/css/main.css'
    );
  }
  loadUserScripts() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScripts(
        'assets/usermanager/vendor/bootstrap/js/bootstrap.bundle.min.js',
        'assets/usermanager/vendor/aos/aos.js',
        'assets/vendor/glightbox/js/glightbox.min.js',
        'assets/usermanager/vendor/swiper/swiper-bundle.min.js',
        'assets/vendor/Swiper/js/swiper-bundle.min.js',
        'assets/usermanager/vendor/php-email-form/validate.js',
        'assets/usermanager/js/main.js'
      );
    }
  }
  loadScripts(...srcs: string[]) {
    if (isPlatformBrowser(this.platformId)) {
      srcs.forEach((src) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    }
  }
}
