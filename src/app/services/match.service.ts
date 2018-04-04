import {Injectable} from '@angular/core';
import {IMatch} from '../interfaces/IMatch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MatchService {

  authorizationKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMGU5Nzk2MC0xOTUzLTAxMzYtOTY0ZS02MWFjOTE3MDJiMmEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzQ5NjUyLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymctc3RhdHMtNzAzZDUxYzgtZjRhZS00OGY5LWFlMmYtYjRmNmRjZTcwNDg1Iiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.EVauS-isd8KpWjSA_V2xmEUEpAXK4hFDhw-8AD38Sp0';

  playerData: any;
  playerName: string;
  private _matches: IMatch[] = [];

  constructor(private _http: HttpClient) {}

  /**
   * Retrieves the match data using the supplied matchId
   * @param {string} matchId
   * @returns {Observable<any>}
   */
  retrieveMatchData(matchId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.api+json',
        'Authorization': this.authorizationKey
      })
    };

    return this._http.get('https://api.playbattlegrounds.com/shards/pc-eu/matches/' + matchId, httpOptions);
  }

  /**
   * Retrieves the player data using the playerName supplied in the url
   * @returns {Observable<any>}
   */
  retrievePlayerData(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.api+json',
        'Authorization': this.authorizationKey
      })
    };

    return this._http.get('https://api.playbattlegrounds.com/shards/pc-eu/players?filter[playerNames]=' + this.playerName, httpOptions);
  }

  refreshData(playerName: string): void {
    this.playerName = playerName;

    // Retrieve the player data so we can determine the match ids
    this.retrievePlayerData().subscribe(
      playerData => {
        this.playerData = playerData;

        const matchesData = playerData.data[0].relationships.matches.data;
        console.log(matchesData);

        // Retrieve the match data using the match ids from the playerData
        //matchesData.forEach(matchData => {
          this.retrieveMatchData(matchesData[0].id).subscribe(
            match => {
              this._matches.push(match);
            }
          );
        //});
      }
    );
  }

  get matches(): IMatch[] {
    return this._matches;
  }

}
