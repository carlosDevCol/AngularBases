import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-form',
  templateUrl: './character-form.html',
})
export class CharacterForm {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (this.name() === '' || this.power() <= 0) return;

    const character: Character = {
      id: Date.now(),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(character);

    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
