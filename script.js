// Currency Converter by Kayumba David Pontient

// api assginment first
const API_KEY = 'ce2419e16831782c202419b7'; 
const BASE_URL = 'https://v6.exchangerate-api.com/v6/';

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("converter-form");
    const result = document.getElementById("result");

    // Submition
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        
        const baseCurrency = document.getElementById("base_currency").value.toUpperCase();
        const targetCurrency = document.getElementById("target_currency").value.toUpperCase();
        const amount = parseFloat(document.getElementById("amount").value);
        
        // Validation 
        if (!baseCurrency || !targetCurrency || isNaN(amount) || amount <= 0) {
            result.textContent = "Oops! Please enter valid inputs.";
            return;
        }

        try {
            // Fetch the exchnage rates from api
            const response = await fetch(`${BASE_URL}${API_KEY}/latest/${baseCurrency}`);
            const data = await response.json();

            // Check if the API response is valid and contains the conversion rate for the target currency
            if (!data.conversion_rates || !data.conversion_rates[targetCurrency]) {
                result.textContent = "I dont think i know that. Try another code.";
                return;
            }
            
            // Calculate the converted amount
            const convertedAmount = (amount * data.conversion_rates[targetCurrency]).toFixed(2);
            result.textContent = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
        } catch (error) {
            // Error handling in just incase anything fails while fetching api and all.
            result.textContent = "Sorry, I couldn't fetch the conversion rates sadly. Please try again later.";
        }
    });
});
