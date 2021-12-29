/**
 * 
 * @param {Array} arr 
 * @returns 
 */

function orbitalPeriod(arr) {

    // t = 2(pi)*sqrt(earthRadius^3/GM)

    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.map(function(spaceThing) {
        return {
            name: spaceThing['name'],
            orbitalPeriod: (Math.round(2 * Math.PI * Math.sqrt(Math.pow(spaceThing['avgAlt'] + earthRadius, 3) / GM)))
        }
    });
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

  /*
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2
  */
