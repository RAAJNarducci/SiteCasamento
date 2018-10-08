import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresenceComponent } from './presence/presence.component';
import { GiftComponent } from './gift/gift.component';
import { PartyComponent } from './party/party.component';
import { ConfirmGiftComponent } from './confirm-gift/confirm-gift.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'presence', component: PresenceComponent },
    { path: 'gift', component: GiftComponent },
    { path: 'party', component: PartyComponent },
    { path: 'confirm-gift', component: ConfirmGiftComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
