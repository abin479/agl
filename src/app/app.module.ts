import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './shared/components/pets-list/pets-list.component';
import { PetFilterPipe } from './shared/pipes/pet-filter/pet-filter.pipe';
import { PetSortPipe } from './shared/pipes/pet-sort/pet-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    PetFilterPipe,
    PetSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
