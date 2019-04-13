import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    //all components, directives, pipes to be used in the module
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule //required by HeaderComponent RouterLink in template (routerLink="/recipes")
    ],
    exports: [
        AppRoutingModule, //required by AppModule template (<router-outlet>)
        HeaderComponent //required by AppModule template (<app-header>)
    ],
    providers: [
        ShoppingListService,
        RecipeService, 
        DataStorageService, 
        AuthService, 
        AuthGuard
    ]
})
export class CoreModule {}