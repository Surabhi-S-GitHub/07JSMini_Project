function CalculateLoan()
{
    lAmt=document.getElementById("loan-amount").value
    IRate=document.getElementById("interest-rate").value
    Months=document.getElementById("months-to-pay").value

    interest=(lAmt*(IRate*0.01))/Months

    MonthlyPay=(lAmt/Months+IRate).toFixed(2)

    document.getElementById("payment").innerHTML=`Monthly Payment ${MonthlyPay}`
} 