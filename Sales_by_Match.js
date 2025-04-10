function sockMerchant(n, ar) {
    let sockCount = {};
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        let sockColor = ar[i];
        if (sockCount[sockColor]) {
            sockCount[sockColor]++;
        } else {
            sockCount[sockColor] = 1;
        }
    }

    for (let color in sockCount) {
        pairs += Math.floor(sockCount[color] / 2);
    }

    return pairs;
}

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar));