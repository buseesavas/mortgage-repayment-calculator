const amountInput = document.querySelector(".amountInput");
const termInput = document.querySelector(".termInput");
const interestInput = document.querySelector(".interestInput");
const repaymentInput = document.querySelector(".repaymentInput");
const interestOnlyInput = document.querySelector(".interestInput");
const monthlyRepayments = document.querySelector(".monthlyRepayments");
const onlyInterest = document.querySelector(".onlyInterest");
const totalRepay = document.querySelector(".totalRepay");
const calculateBtn = document.querySelector(".calculateBtn");
const calculationResults = document.querySelector(".calculationResults");
const resultShownHere = document.querySelector(".resultShownHere");


calculationResults.style.display = 'none'; 
resultShownHere.style.display = 'block';

function calculate() {
  const amount = parseFloat(amountInput.value);
  const term = parseFloat(termInput.value);
  const interest = parseFloat(interestInput.value) / 100 / 12;

  if (isNaN(amount) || isNaN(term) || isNaN(interest)) {
    alert("Lütfen tüm alanlar için geçerli sayılar girin.");
    return;
  }

  const n = term * 12;
  let m;

  m =
    (amount * (interest * Math.pow(1 + interest, n))) /
    (Math.pow(1 + interest, n) - 1);
  const total = (m * n).toFixed(2);
  // const totalInterest = (total - amount).toFixed(2);

  calculationResults.style.display = 'block'; 
  resultShownHere.style.display = 'none';

  monthlyRepayments.innerHTML = `<h6>Your monthly repayments</h6>
        <p>£${m.toFixed(2)}</p>`;
  totalRepay.innerHTML = `<h6>Total you'll repay over the term</h6>
        <p>£${total}</p>`;
  // onlyInterest.innerHTML = `<p>Toplam Faiz: £${totalInterest}</p>`;
}

calculateBtn.addEventListener("click", calculate);
