class Human { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(this.name + ' is a human.');
    }
  }
  
  class Fighter extends Human {
    speak() {
      console.log(this.name + ' is a fighter.');
    }
    magic() {
      console.log(this.name + ' uses a spell');
    }
  }
  
  let caeley = new Fighter('Caeley');

  caeley.speak(); // Caeley is a fighter.
  caeley.magic(); // Caeley uses a spell.