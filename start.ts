abstract class DiodeLamp { // Створив абстарктний клас Діодна_лампочка.

    protected color?: Colors; // Поле кольору для наслідування похідними класами. "?" озн. що може бути Null

    public isLighting: boolean = false; // Вона може світитися (Оскільки "світитися" є станом об'єкту - роблю поле)

    toggle(): void { // Вмикач / вимикач лампочки
        this.isLighting = !this.isLighting;
    }
}

enum Colors {
    white,
    red,
    green,
    blue
}

class WhiteLamp extends DiodeLamp {

    constructor() {
        super();
        this.color = Colors.white;
    }
}



class RgbLamp extends DiodeLamp {

    constructor(color: Colors) {
        super();
        this.color = color;
    }

}

class Garland {

    public lampQuantity: number = 0;
    public lamps: DiodeLamp[] = [];

    constructor(lampQuantity: number) {
        this.lampQuantity = lampQuantity;

        for (let i = 1; i <= this.lampQuantity; i++) {
            if (i % 2 == 0) {
                this.lamps.push(new WhiteLamp());
            } else {
                const colorName: string = Colors[Math.random() * 4];
                this.lamps.push(new RgbLamp(Colors[colorName]));
            }
        }
    }

    toggle(): void {
        this.lamps.forEach(lamp => {
            lamp.toggle();
        });
    }

    shine(): void {
        this.lamps.forEach(lamp => {
            console.log(lamp.isLighting);
        });
    }
}

const garland = new Garland(10);

garland.toggle();
garland.shine();


garland.toggle();
garland.shine();