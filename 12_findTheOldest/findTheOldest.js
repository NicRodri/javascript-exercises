const findTheOldest = function(people) {
    const year = new Date();
    
    let dead = people.filter((person) => Object.hasOwn(person, 'yearOfDeath'));
    let alive = people.filter((person) => !Object.hasOwn(person, 'yearOfDeath'));

    let oldestDead = dead.sort((a, b) => {
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return -1;
        }
        else{
            return 1;
        }
    });
    let oldestAlive = alive.sort((a, b) => {
        if((year.getFullYear() - a.yearOfBirth) > (year.getFullYear() - b.yearOfBirth)){
            return -1;
        }
        else{
            return 1;
        }
    });

    if(alive.length == 0){
        return oldestDead[0];
    }

    let oldestAliveYears = year.getFullYear() - oldestAlive[0].yearOfBirth;
    let oldestDeadYears = oldestDead[0].yearOfDeath - oldestDead[0].yearOfBirth;

    if(oldestAliveYears > oldestDeadYears){
        return oldestAlive[0];
    }
    else{
        return oldestDead[0];
    }

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
