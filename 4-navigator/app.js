const calculateDistance = (addressLat, addressLong, positionLat, positionLong) => {
    return Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2);
};

console.log(calculateDistance(2, 2, 50, 50));
