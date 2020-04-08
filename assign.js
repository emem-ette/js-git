const Data = [{
    principal:2500,
    time:1.8
},
{
    principal:1000,
    time:5
},
{
    principal:3000,
    time:1
},
{
    principal:2000,
    time:3
},
];

 let rate;
 const interestCalculator = (array) => {
    const interestData = array.map(item => {
      const {        
        Principal,
        Time
    } = item;
    if (Principal >= 2500 && Time >= 1 && Time < 3) {
        rate = 3;
    } else if (Principal >= 2500 && Time >= 3) {
        rate = 4;
    } else if (Principal < 2500 || Time <= 1) {
        rate = 2;
    } else{
        rate = 1;
    }
    const interest = (Principal * rate * Time) / 100

      item.interest = interest;
      item.rate = rate;

      return item;
    });

    return interestData;
}
     
        console.log(interestCalculator(Data));