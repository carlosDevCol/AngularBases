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
  styleUrl: './dragonball.css',
})
export class Dragonball {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 9000},
    {id: 3, name: 'Picoro', power: 3201},
  ])

  powerClasses =  computed(() => {
    return {
        'text-danger': true
    }
  })

  addCharacter(){
    this.characters.update( characters => [...characters, {
      id:3,
      name:"carlos",
      power:200
    }])
  }

}
