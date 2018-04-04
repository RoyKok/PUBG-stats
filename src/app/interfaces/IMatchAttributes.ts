export interface IMatchAttributes {
  createdAt: string;
  duration: number;
  gameMode: string; // TODO: enum
  patchVersion: string;
  shardId: string;
  // TODO: stats?
  // TODO: tags?
  titleId: string;
}
