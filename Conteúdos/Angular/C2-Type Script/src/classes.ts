/* data modifiers
public
private
protected
*/

class Character{
    protected name?: string;
    readonly stregth: number; // Não consigo modificar o valor que essa variavel possui fora da classe
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

//Subclass
class Magician extends Character{
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number,
    ){
        super(
            name, stregth, skill
        );
        this.magicPoints = magicPoints;

    }
}

const p1 = new Character("Gabriel", 2, 3);
const p2 = new Magician("Mago", 3, 4, 5);
p1.attack();