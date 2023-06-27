fetch('https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const xlmPrice = data.stellar.eur;
    console.log('XLM Price:', xlmPrice);
    
    //Diogo
    var xlmamount1 = 19827.7503;
    document.getElementById('xlmAmountElement1').textContent = "Quantidade : " + xlmamount1+ " XLM.";
    var finalvalue1 = parseFloat((xlmamount1*xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement1').textContent = "Valor: " + finalvalue1 + " euros.";

    //Cláudia
    var xlmamount1 = 505.3000;
    document.getElementById('xlmAmountElement2').textContent = "Quantidade : " + xlmamount1+ " XLM.";
    var finalvalue1 = parseFloat((xlmamount1*xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement2').textContent = "Valor: " + finalvalue1 + " euros.";

    //Carlos
    var xlmamount1 = 151.7000;
    document.getElementById('xlmAmountElement3').textContent = "Quantidade : " + xlmamount1+ " XLM.";
    var finalvalue1 = parseFloat((xlmamount1*xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement3').textContent = "Valor: " + finalvalue1 + " euros.";

    //Santiago
    var xlmamount1 = 151.7000;
    document.getElementById('xlmAmountElement4').textContent = "Quantidade : " + xlmamount1+ " XLM.";
    var finalvalue1 = parseFloat((xlmamount1*xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement4').textContent = "Valor: " + finalvalue1 + " euros.";

    //Susana
    var xlmamount1 = 118.3815;
    document.getElementById('xlmAmountElement5').textContent = "Quantidade : " + xlmamount1+ " XLM.";
    var finalvalue1 = parseFloat((xlmamount1*xlmPrice).toFixed(2));
    document.getElementById('xlmPriceElement5').textContent = "Valor: " + finalvalue1 + " euros.";
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
