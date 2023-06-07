import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoComponent } from './logo/logo.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SelectBarComponent } from './select-bar/select-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LogoComponent,
    PokemoncardComponent,
    SearchInputComponent,
    SelectBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [PokemoncardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
