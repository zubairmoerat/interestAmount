document.getElementById('btn').addEventListener('click', function interestCalculation(){
    let capital = document.querySelector('[data-principal]').value;
    let interestRate = document.querySelector('[data-interest]').value;
    let interestAmount = (capital * interestRate) / 100;
    document.querySelector('[data-output]').textContent = `Your Interest Amount is R${interestAmount}`;
});