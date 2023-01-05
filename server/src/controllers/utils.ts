function solve(a:number[], sum:number, idx:number, ans:number[][], psf:number[]) {
    //base
    if (sum === 0) {
      let temp:number[] = [...psf];
      ans.push(temp);
      return;
    }
    if (idx >= a.length || sum < 0) {
      return;
    }
  
    // console.log(a[idx], sum);
    if (a[idx] <= sum) {
      psf.push(a[idx]);
      solve(a, sum - a[idx], idx + 1, ans, psf);
      psf.pop();
      solve(a, sum, idx + 1, ans, psf);
    } else {
      solve(a, sum, idx + 1, ans, psf);
    }
  }
  module.exports = solve;
  