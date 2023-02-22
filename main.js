let column_1 = [10, 3, 3, 3, 10, 6, 1, 3, 7, 6, 2, 6, 2, 10, 1, 6, 5, 2, 10, 6, 2, 2, 9, 10, 2, 7, 3, 2, 7, 3]
let column_2 = [9, 6, 6, 1, 7, 3, 10, 7, 3, 6, 1, 5, 8, 3, 10, 9, 9, 3, 3, 7, 6, 10, 7, 3, 3, 8, 5, 6, 1, 6]
let column_3 = [86, 85, 90, 98, 43, 61, 63, 92, 58, 91, 61, 99, 96, 43, 40, 59, 67, 92, 81, 84, 79, 84, 84, 75, 94, 47, 99, 91, 45, 79]
let column_4 = [84, 82, 92, 43, 61, 66, 61, 64, 48, 45, 93, 45, 48, 60, 54, 43, 52, 89, 50, 93, 85, 90, 78, 85, 59, 76, 88, 65, 55, 46]

let sum_1 = 0
let sum_2 = 0
let sum_3 = 0
let sum_4 = 0

for (let i = 0; i < column_1.length; i++) { 
    sum_1 += column_1[i]
    sum_2 += column_2[i]
    sum_3 += column_3[i]
    sum_4 += column_4[i]
}

let sums = [sum_1, sum_2, sum_3, sum_4]
let total_score = sum_1 + sum_2 + sum_3 + sum_4

const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums1: sums,
    total_score: total_score,
}