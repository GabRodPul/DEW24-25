//write your JS code here:
const OPERATORS = {
    // Numeric
    "+" : (d) => d.reduce((acc, cur) => acc + cur),
    "*" : (d) => d.reduce((acc, cur) => acc * cur),

    // Arrays
    "push" : (d) => {
        let result = d[0];
        for (let i = 1; i < d.length; ++i) result.push(d[i]);
        return result;
    },

    "filter" : (d) => {
        const FILTER = d.slice(1);
        return d[0].filter(v => !FILTER.includes(v));
    },

    "merge" : 
        // (d) => d.flat()
        // (d) => d.reduce( (acc, cur) => acc.concat(cur) )
        (d) => d.reduce( (acc, cur) => cur.forEach(v => acc.push(v)) )
}

const batchProcessing = (operations) => 
    operations.forEach(op =>
        console.log(OPERATORS[op.operation](op.data))
    );

const OPERATIONS = [
    { operation: "push",   data: [[1, 2, 3], 4] },
    { operation: "+",      data: [1, 2, 3] },
    { operation: "+",      data: [3] },
    { operation: "*",      data: [2, 3] },
    { operation: "filter", data: [[1, 2, 3], 3] },
    { operation: "merge",  data: [[1, 2, 3], [4, 5], [6], [7]] },
];

batchProcessing(OPERATIONS);