function calculateDiscountedPrice(price, discountPercent) {
    const discountSum = (price, discountPercent) => price * (discountPercent / 100);
    return price - discountSum(price, discountPercent);
}
console.log(calculateDiscountedPrice(75, 90));
