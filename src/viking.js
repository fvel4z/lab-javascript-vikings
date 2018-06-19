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

    this.vikingAttack = function(){
        var randomSaxon = (Math.floor(Math.random() * this.saxonArmy.length));
        var randomViking = (Math.floor(Math.random() * this.vikingArmy.length));
        // should make a Saxon receiveDamage() equal to the strength of a Viking
        var sStrength = this.Saxon.damage - this.Viking.strength;
        // should remove dead saxons from the army
        if (this.Saxon.health === 0) {
            this.saxonArmy.pop();
        }
        //should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        return sStrength;
    }

    // The Saxon version of vikingAttack(). A Viking receives the damage equal to the strength of a Saxon.
    this.saxonAttack = function(){
        var randomSaxon = (Math.floor(Math.random() * this.saxonArmy.length));
        var randomViking = (Math.floor(Math.random() * this.vikingArmy.length));
        // should make a Viking receiveDamage() equal to the strength of a Saxon
        var vStrength = this.Viking.damage - this.Saxon.strength;
        // should remove dead vikings from the army
            if (this.Viking.health === 0) {
            this.vikingArmy.pop();
        }
        // should return result of calling receiveDamage() of a Viking with the strength of a Saxon
        return vStrength;
    }

    this.showStatus = function(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of the battle.";
        }
    }
}