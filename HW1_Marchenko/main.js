// 1)
{
  let satelliteCount = 4;
  const satelliteName = 'Europe';
  const myName = Symbol('Denis');
  const mySalary = 99999999n;
  let isAvailable = true;
  let satellite = null;
  let country;
  let person = {
    firstName: 'Denis',
    age: 26
  };
}
// 2) 
let satellite = {
  stage: 4,
  name: 'Europe',
  catalogId: Symbol('1806'),
  distanceFromEarth: 3952395923090524923n,
  isAvailable: true,
  atmosphereType: null,
  energyLevel: undefined,
  config: {
    camera: 'sony',
    orbitAngle: 24
  }
};
// 3)
let getVehcleAttributes = () => {
  for (const key in satellite) {
    console.log(key);
  }
};
getVehcleAttributes()
