function maxProfit(prices: number[]): number {
    let profit = 0;
    // 최저가를 기록해두고 차 비교
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
          const diff = prices[i] - minPrice
            if (diff > profit) {
                profit = diff
            } 
        }

    }
    return profit;
    
};