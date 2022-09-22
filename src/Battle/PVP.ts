import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    this.player.attack(this._player2);
    this._player2.attack(this.player);

    if (this._player2.lifePoints === -1) return 1;

    if (this.player.lifePoints === -1) return -1;
    return this.fight();
  }
}

export default PVP;