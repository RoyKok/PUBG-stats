import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../services/match.service';
import {IMatch} from '../interfaces/IMatch';

@Component({
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerName: string;
  matches: IMatch[] = [];

  constructor(private _route: ActivatedRoute,
              private _matchService: MatchService) {
  }

  ngOnInit(): void {
    // Retrieve the playerName from the url
    this.playerName = this._route.snapshot.paramMap.get('playerName');
    this._matchService.refreshData(this.playerName);
    // TODO: what if the variable isn't filled yet because it gets filled in the subscribe
    this.matches = this._matchService.matches;
  }

}
