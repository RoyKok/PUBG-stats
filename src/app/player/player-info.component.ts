import {Component, Input} from '@angular/core';
import {IParticipant} from '../interfaces/IParticipant';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {

  @Input() player: IParticipant;
}
