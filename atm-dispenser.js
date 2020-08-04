/**
 * This is the initiating function, which will be called by default with the number of denominations arranged in
 * descending order
 */
function atmDriverFunction() {
    const amount = 2600; // you can change the requested amount, in real case it will come from user input
    let denomination = [{amount: 2000, count: 5}, {amount: 500, count: 7}, {amount: 200, count: 2}, {
        amount: 100,
        count: 4
    }]
    const notesWithdrawn = withdraw(amount, denomination);// notesWithdrawn contains an array of object in the order where
    // 'key' represent for the denomination and 'value' is the number of notes
    console.log('Notes:', notesWithdrawn)
}

/**
 * This part of the function will calculate the amount to be withdrawn depending on the
 * amount requested and denominations available
 * @param amount
 * @param denomination
 * @returns {string|[]}
 */
function withdraw(amount, denomination) {

    let toReturn = []
    const totalMoneyWithAtm = denomination.reduce((acc, x) => {
        return acc + (x.amount * x.count);
    }, 0)
    if (amount > totalMoneyWithAtm) {
        return ' Not enough money for dispensing';
    }

    denomination.forEach(deno => {
            if (deno.amount <= amount) {
                let count = Math.floor(amount / deno.amount);
                amount = amount % deno.amount;
                let selectedOne = {};
                selectedOne[deno.amount] = count;
                toReturn.push(selectedOne);
            }
    });
    return toReturn;

}

atmDriverFunction();
