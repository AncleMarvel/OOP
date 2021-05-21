class NPC {

	constructor() {
		this.hp = 100; // health points
		this.dmg = 1; // damage
		this.lvl = 1; // level
		this.name = "no name npc";
	}
  
	getHp() {
		return this.hp;
	}

	getDmg() {
		return this.dmg;
	}

	getLvl() {
		return this.lvl;
	}

	getName() {
		return this.name;
	}

	getSkills() {
		return this.skills;
	}
}

class Warlock extends NPC {

	constructor() {
		super();
		this.hp = 200; 
		this.dmg = 5;
		this.lvl = 2; 
		this.name = "Warlock";
		this.skills = {};
	}
}

class Evil {
	constructor(npc) {
		this.npc = npc;
  	}

	getHp() {
		return this.npc.getHp() + 100;
	}

	getDmg() {
		return this.npc.getDmg() + 50;
	}

	getLvl() {
		return this.npc.getLvl() + 1;
	}

	getName() {
		return `Evil ${this.npc.getName()}`;
	}
}

class Fiery {
	constructor(npc) {
		this.npc = npc;
	}

	getSkills() {
		return this.npc.skills["setFire"] = true;
	}

	getName() {
		return `Fiery ${this.npc.getName()}`;
	}
}

let show = new Object();


const normalWarlock = new Warlock();
console.log(normalWarlock.getName());
console.log(`HP: ${normalWarlock.getHp()}`);
console.log(`Dmg: ${normalWarlock.getDmg()}`);
console.log(`lvl: ${normalWarlock.getLvl()}`);


const evilWarlock = new Evil(normalWarlock);
console.log("\n",evilWarlock.getName());
console.log(`HP: ${evilWarlock.getHp()}`);
console.log(`Dmg: ${evilWarlock.getDmg()}`);
console.log(`lvl: ${evilWarlock.getLvl()}`);

const fieryWarlock = new Fiery(normalWarlock);
console.log("\n",fieryWarlock.getName());
console.log(`Skills: ${fieryWarlock.getSkills()}`);
