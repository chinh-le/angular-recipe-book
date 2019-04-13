import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
// import { RecipesModule } from './recipes/recipes.module';
// import { SharedModule } from './shared/shared.module';

// moved to CoreModule
// import { HeaderComponent} from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { DataStorageService } from './shared/data-storage.service';
// import { RecipeService } from './recipes/recipe.service';
// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent, //moved to CoreModule
    // HomeComponent //moved to CoreModule
  ],
  imports: [
    BrowserModule, //contains CommonModule and some additional features which are only needed at the app starts. Therefore BrowserModule is and should only used in the AppModule. CommunModule is recommended to be used in all other Modules.
    // ReactiveFormsModule, //should be moved to RecipesModule since it's only used in RecipeEdit
    HttpModule,
    CoreModule,
    // RecipesModule, // RecipesModule before AppRoutingModule to ensure that the Catch-all/wildcard routes work correctly
    AuthModule,
    ShoppingListModule,
    AppRoutingModule,
    // SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
