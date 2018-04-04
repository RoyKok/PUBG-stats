export interface IStats {
  // Number of times this participant was down but not out
  DBNOs: number;
  assists: number;
  boosts: number;
  damageDealt: number;
  deathType: string; // TODO: enum
  headshotKills: number;
  heals: number;
  killPlace: number;
  killPointsDelta: number;
  killStreaks: number;
  kills: number;
  lastKillPoints: number;
  lastWinPoints: number;
  longestKill: number;
  mostDamage: number;
  name: string;
  playerId: string;
  revives: number;
  rideDistance: number;
  roadKills: number;
  teamKills: number;
  timeSurvived: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;
  winPlace: number;
  winPointsDelta: number;
}
