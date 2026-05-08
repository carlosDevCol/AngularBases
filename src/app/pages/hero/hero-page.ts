import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl: './hero-page.html',
    imports: [ UpperCasePipe ]
})
export class HeroPage {
    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed(() => `${this.name()} tiene ${this.age()} años`);
    capitalizeName = computed(() => this.name().toUpperCase());

    // getHeroDescription() {
    //     return `${this.name()} tiene ${this.age()} años`;
    // }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}