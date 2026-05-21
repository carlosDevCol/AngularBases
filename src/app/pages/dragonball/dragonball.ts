import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
})
export class Dragonball {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    // {id: 2, name: 'Vegeta', power: 9000},
    // {id: 3, name: 'Brolin', power: 8000},
    // {id: 4, name: 'Picoro', power: 2550},
  ])

  powerClasses =  computed(() => {
    return {
        'text-danger': true
    }
  })

  addCharacter(){
    if (this.name() === '' || this.power() <= 0) return;
    this.characters.update( characters => [...characters, {
      id: characters[characters.length - 1]?.id + 1,
      name: this.name(),
      power: this.power()
    }])

    this.name.set('');
    this.power.set(0);
  }

}
