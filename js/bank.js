//Bank account management
const depositBalance = document.getElementById("depositBalance");
const withdrawBalance = document.getElementById("withdrawBalance");
const totalBalance = document.getElementById("totalBalance");
const depositField = document.getElementById("depositField");
const depositBtn = document.getElementById("depositBtn");
const withdrawField = document.getElementById("withdrawField");
const withdrawBtn = document.getElementById("withdrawBtn");

depositBtn.addEventListener("click", () => {
  //Deposit Box
  let depositValue = +parseFloat(depositField.value).toFixed(2);
  if (
    typeof depositValue !== "number" ||
    isNaN(depositValue) ||
    depositValue < 0
  ) {
    alert("Enter correct amount");
    return;
  }
  const previousDepositBalance = +parseFloat(depositBalance.innerText).toFixed(
    2
  );
  const currentDepositBalance = previousDepositBalance + depositValue;
  depositBalance.innerText = currentDepositBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawValue = +parseFloat(withdrawField.value).toFixed(2);
  if (
    typeof withdrawValue !== "number" ||
    isNaN(withdrawValue) ||
    withdrawValue < 0
  ) {
    alert("Enter correct amount");
    return;
  }
  const previousWithdrewBalance = +parseFloat(
    withdrawBalance.innerText
  ).toFixed(2);
  const currentWithdrawBalance = previousWithdrewBalance + withdrawValue;
  withdrawBalance.innerText = currentWithdrawBalance;
});

//total balance
