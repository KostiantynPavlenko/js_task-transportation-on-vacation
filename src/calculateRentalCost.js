/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_CAR_PER_DAY = 40;
  const totalSum = days * COST_CAR_PER_DAY;

  if (days >= 7) {
    return totalSum - 50;
  } else if (days >= 3) {
    return totalSum - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
