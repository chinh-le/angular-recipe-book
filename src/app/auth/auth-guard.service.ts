import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.warn(route.url, ': route protected - canActivate Interface');
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/signin']);
        }

        return false;
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        console.warn(route.path, ': lazy loading route protected - canLoad Interface');
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/signin']);
        }

        return false;
    }
}