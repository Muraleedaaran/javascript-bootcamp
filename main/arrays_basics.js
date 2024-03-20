let marks = Array(6) // create a variable that can hold array of defined size (eg., 6 in this case)
marks = new Array(20,40,35,12,37,100) // initialize array

var marks_2 = [20,40,35,12,37,100] // initialize array

console.log(marks_2)

marks_2[3] = 23
console.log(marks_2)
console.log("*****")
console.log(marks_2.length)
console.log("*****")

marks_2.push(120)
console.log(marks_2)

marks_2.pop()
console.log(marks_2)

marks_2.unshift(11)
console.log(marks_2)

marks_2.shift()
console.log(marks_2)

console.log(marks_2.indexOf(35))

console.log(marks_2.includes(120))

console.log("subarray ====>"+ marks_2.slice(1,4))

let total_sum = marks_2.reduce((sum,marks)=>sum+marks,0)
console.log("total_sum ==== "+total_sum)

var scores = [2,3,4,5,6,7,8,9]
var even_num = []

for(let i=0; i<scores.length;i++){
    if(scores[i]%2 ==0) {
        even_num.push(scores[i])
    }
}

console.log("even numbers == "+even_num)

var even_scores_filtered = scores.filter(score=>score%2==0)
console.log("even numbers == "+even_scores_filtered)








