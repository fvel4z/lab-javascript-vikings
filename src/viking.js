// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    
    this.attack = function (){
        return this.strength;
    }

    this.receiveDamage = function (damage){    
        this.health = health - damage;
    }
}

// var soldier2 = new Soldier (2, 4);
// console.log(soldier2);

// Viking
//Dog.prototype = Object.create(Animal.prototype);
Viking.prototype = Object.create(Soldier.prototype);// Hace que Viking herede de soldier, creando un nuevo objeto que es Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength); 
    this.name = name;
    this.isAlive = true;

    this.battleCry = function (){    
        return "Odin Owns You All!";
    }
    
    Viking.prototype.receiveDamage = function(damage){ //esto modifica la funcion heredada de soldier(?
        this.health = health - damage;
        if(this.isAlive = true){
            return this.name + "has received" + this.damage + "points of damage";
        }else{
            return this.name + "has died in act of combat";
        }
    }
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype); // Saxon tambien hereda de soldier
function Saxon(health, strength) {
    Soldier.call(this, health, strength); 
    this.isAlive = true;

    Soldier.prototype.receiveDamage = function(damage){
        this.health = health - damage;
        if(this.isAlive = true){
            return "A Saxon has received " + this.damage + " points of damage";
        }else{
            return "A Saxon has died in combat";
        }
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(objv){ //objecto viking
        this.vikingArmy.push(objv);
    }
    this.addSaxon = function(objs){ //objeto saxon
        this.saxonArmy.push(objs);
    }
}