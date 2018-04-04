import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../services/match.service';
import {IParticipant} from '../interfaces/IParticipant';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  match: any;
  rosters: any[] = [];
  participants: IParticipant[] = [];
  participantsNames: string[] = [];
  player: IParticipant;
  winner: IParticipant;
  searchedPlayer: IParticipant;
  inputSearchPlayer: string;

  constructor(private _route: ActivatedRoute,
              private _matchService: MatchService) {}

  /**
   * Distributes the different objects (participants, rosters) from the match to the corresponding array
   */
  distibuteMatchData(): void {
    this.match.included.forEach(object => {
        if (object.type === 'participant') {
          this.participants.push(object);
          this.participantsNames.push(object.attributes.stats.name);
        } else if (object.type === 'roster') {
          this.rosters.push(object);
        }
      }
    );
  }

  /**
   * Searches for the player in the participants array and sets the player variable
   */
  findPlayer(playerName: string): IParticipant {
    let player = null;
    this.participants.forEach(participant => {
      if (participant.attributes.stats.name === playerName) {
        player = participant;
      }
    });
    return player;
  }

  /**
   * Searches for the winner of this match by using the winPlace
   */
  findWinner(): void {
    this.participants.forEach(participant => {
      if (participant.attributes.stats.winPlace === 1) {
        this.winner = participant;
      }
    });
  }

  searchPlayer(killerName: string): void {
    console.log(killerName);
    this.searchedPlayer = this.findPlayer(killerName);
    console.log(this.searchedPlayer);
  }

  ngOnInit() {
    const matchId = this._route.snapshot.paramMap.get('matchId');
    this.match = this._matchService.matches[matchId];
    this.distibuteMatchData();
    this.player = this.findPlayer(this._matchService.playerName);
    console.log(this.findPlayer(this._matchService.playerName));
    console.log(this.player);
    this.findWinner();
  }

}
