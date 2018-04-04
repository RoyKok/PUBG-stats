import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PlayerComponent } from './player/player.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { MatchDetailComponent } from './match/match-detail.component';
import {MatchService} from './services/match.service';
import { PlayerInfoComponent } from './player/player-info.component';
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SearchComponent,
    MatchDetailComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'player/:playerName', component: PlayerComponent},
      {path: 'match-detail/:matchId', component: MatchDetailComponent},
      {path: '', component: SearchComponent}
    ]),
    Ng2AutoCompleteModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
