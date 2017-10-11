class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

let eastWest = [
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "Lexington Avenue",
  "Park",
  "Madison Avenue",
  "5th Avenue"
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  getEWBlockIndex(blockName) {
    return eastWest.indexOf(blockName);
  }

  getNSDistance() {}

  blocksTravelled() {
    return (
      Math.abs(
        this.getEWBlockIndex(this.beginningLocation.horizontal) -
          this.getEWBlockIndex(this.endingLocation.horizontal)
      ) +
      Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    );
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
