const calculateDistance = (addressLat, addressLong, positionLat, positionLong) => {
    if (
        typeof addressLat !== "number" ||
        typeof addressLong !== "number" ||
        typeof positionLat !== "number" ||
        typeof positionLong !== "number"
    ) {
        console.error(`Только циферки, пжлст!`);
        return false;
    }
    return Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2);
};

console.log(calculateDistance(6, 89, 15, 50));
console.log(calculateDistance(6, "кися", 15, 50));
