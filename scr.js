
y=5
function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  
      console.log(x);  
    }
    console.log(x);  
}
letTest()


function main () {
    plusNumber1(5, 10, function(result) {
      console.log(result) // 15
    })
    console.log(plusNumber2(3,7))
  }
  function plusNumber1(num1, num2, callback) {
    callback(num1+num2)
  }
  function plusNumber2(num1, num2) {
    return num1+num2
  }
  main()


console.log("feloo")

setTimeout(function () {
  console.log("frist")
 }, 10000)
 
 console.log("2")