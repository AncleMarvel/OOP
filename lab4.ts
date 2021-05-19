interface DiodeLamp { 
    color?: Colors; 
    isLighting: boolean; 

    toggle(): void;
}

enum Colors {
    white,
    red,
    green,
    blue
}

class WhiteLamp implements DiodeLamp {

    color: Colors = Colors.white;
    isLighting = false;

    toggle(): void {
        this.isLighting = !this.isLighting;
    }
}

class RgbLamp implements DiodeLamp {

    color: Colors;
    isLighting = false;

    constructor(color: Colors) {
        this.color = color;
    }

    toggle(): void {
        this.isLighting = !this.isLighting;
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