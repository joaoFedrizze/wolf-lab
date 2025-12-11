import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SplashTextItem {
  item: string;
  isHide?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SplashTextService {
  private apiUrl!: string;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const hostname = window.location.hostname;

      const serverUrl =
        hostname === 'localhost' || hostname === '127.0.0.1'
          ? 'http://localhost:8080'
          : 'http://192.168.15.51:8080';

      this.apiUrl = `${serverUrl}/splash-text`;

      console.log('Servidor usado:', this.apiUrl);
    } else {
      this.apiUrl = 'http://192.168.15.51:8080/splash-text';
    }
  }

  delete(itemId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${itemId}`);
  }

  create(data: SplashTextItem): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  patch(itemId: string, data: SplashTextItem): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${itemId}`, data);
  }

  getSplashText(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
