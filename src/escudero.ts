import { Character } from './personaje.js';

export class Squire extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public icon: string,
        public advisedCharacter: string | undefined,
        public greasy: number
    ) {
        super(name, family, age, role, sentence, isAlive, image, icon);
        this.advisedCharacter = advisedCharacter;
        this.greasy = greasy;
    }
    death() {
        super.death();
    }
}
