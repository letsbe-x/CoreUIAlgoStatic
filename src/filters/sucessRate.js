export default (success = "0",  total = "100") => {
    let numerator = Number(success);
    let denominator = Number(total);
    let fraction = numerator/denominator;
    return (fraction*100).toFixed(2);
  };