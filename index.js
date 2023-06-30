fetch('https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const xlmPrice = data.stellar.eur;
    console.log('XLM Price:', xlmPrice);

    //Diogo
    var xlmamount1 = 21131.5312;
    document.getElementById('xlmAmountElement1').textContent = "Quantidade : " + xlmamount1 + " XLM.";
    var finalvalue1 = parseFloat((xlmamount1 * xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement1').textContent = "Valor: " + finalvalue1 + " euros.";

    //Cláudia
    var xlmamount2 = 505.3000;
    document.getElementById('xlmAmountElement2').textContent = "Quantidade : " + xlmamount2 + " XLM.";
    var finalvalue2 = parseFloat((xlmamount2 * xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement2').textContent = "Valor: " + finalvalue2 + " euros.";

    //Carlos
    var xlmamount3 = 151.7000;
    document.getElementById('xlmAmountElement3').textContent = "Quantidade : " + xlmamount3 + " XLM.";
    var finalvalue3 = parseFloat((xlmamount3 * xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement3').textContent = "Valor: " + finalvalue3 + " euros.";

    //Santiago
    var xlmamount4 = 151.7000;
    document.getElementById('xlmAmountElement4').textContent = "Quantidade : " + xlmamount4 + " XLM.";
    var finalvalue4 = parseFloat((xlmamount4 * xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement4').textContent = "Valor: " + finalvalue4 + " euros.";

    //Susana
    var xlmamount5 = 1887.0910;
    document.getElementById('xlmAmountElement5').textContent = "Quantidade : " + xlmamount5 + " XLM.";
    var finalvalue5 = parseFloat((xlmamount5 * xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement5').textContent = "Valor: " + finalvalue5 + " euros.";

  })
  .catch(error => {
    console.error('Error:', error);
  });

