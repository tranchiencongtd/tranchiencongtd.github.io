function giaiPT2() {
  let a = Number(document.getElementById('varA').value);
  let b = Number(document.getElementById('varB').value);
  let c = Number(document.getElementById('varC').value);
  let result = document.getElementById('resultEX_1');
  console.log(a);
  
  let delta = b*b - 4*a*c;
  if(delta >= 0) {
    let sqrtDelta = Math.sqrt(delta);
    let x1 = ((-1)*b + sqrtDelta)/(2*a);
    let x2 = ((-1)*b - sqrtDelta)/(2*a);
    result.innerText = x1 + " | " + x2;
} else {
    result.innerText = 'Phương trình không có nghiệm';
}
}

function calculatorDate() {
  let month = document.getElementById('varMonth').value;
  let year = document.getElementById('varYear').value;
  let result = document.getElementById('resultEX_2');
  month = Number(month);

  switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8: 
    case 10:
    case 12:
        result.innerText = 'Tháng ' + month + ': có 31 day';
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        result.innerText = 'Tháng ' + month + ': có 30 day';
        break;
    case 2: 
        if(year % 4 == 0) 
        result.innerText = 'Tháng 2 năm ' + year + ': có 29 day';
        else 
        result.innerText = 'Tháng 2 năm ' + year + ': có 28 day';
        break;
    default:
        result.innerText = 'Mời bố nhập lại ._.';
        break;
}
}

function findIt() {
  let n = Number(document.getElementById('varN').value);
  let result = document.getElementById('resultEX_3');
  let allResult = '';
  // console.log(n);
  if (n>1) {
    for(let i=2;i<=n;i++) {
      let count = 0;
      for (let j=2;j<=i/2;j++) {
        if(i % j == 0)
          count++;
      }
      if(count == 0) {
        i = String(i);
        allResult = allResult + ' ' + i;
      }
    }
  } else {
    allResult = '-1';
  }
  result.innerText = allResult;
}

function resetPT2() {
  document.getElementById('varA').value = '';
  document.getElementById('varB').value = '';
  document.getElementById('varC').value = '';
  document.getElementById('resultEX_1').innerText = '';
}

function resetDate() {
  document.getElementById('varMonth').value = '';
  document.getElementById('varYear').value = '';
  document.getElementById('resultEX_2').innerText = '';
}

function resetN() {
  document.getElementById('varN').value = '';
  document.getElementById('resultEX_2').innerText = '';
}