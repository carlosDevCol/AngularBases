import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../interfaces/character.interface';
import { CharacterForm } from '../../components/dragonball/character-form/character-form';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterForm],
  templateUrl: './dragonball-super.html',
})
export class DragonballSuper {
  public dragonballService = inject(DragonballService);
  
  // constructor(public dragonballService: DragonballService){}
  // addCharacter(character: Character){
  //   this.dragonballService.addCharacter(character);
  // }
}