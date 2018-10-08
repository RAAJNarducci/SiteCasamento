import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PresenceComponent } from './presence/presence.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GiftComponent } from './gift/gift.component';
import { HttpClientModule } from '@angular/common/http';
import { PartyComponent } from './party/party.component';
import { ConfirmGiftComponent } from './confirm-gift/confirm-gift.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    PresenceComponent,
    GiftComponent,
    PartyComponent,
    ConfirmGiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
