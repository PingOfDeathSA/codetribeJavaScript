function bonAppetit(bill, k, b) {
    let totalBill = bill.reduce((acc, curr) => acc + curr, 0);
    let annaShare = (totalBill - bill[k]) / 2;

    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

let bill = [3, 10, 2, 9];
let k = 1;
let b = 12;

bonAppetit(bill, k, b);