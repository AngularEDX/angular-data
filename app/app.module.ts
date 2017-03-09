import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { NavigationComponent } from './navigation.component';
import { BrandComponent } from './brand.component';
import { EntryComponent } from './entry.component';

@NgModule({
    imports:      [ 
        BrowserModule 
    ],
    declarations: [ 
        AppComponent,
        HeaderComponent,
        GridComponent,
        NavigationComponent,
        BrandComponent,
        EntryComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
