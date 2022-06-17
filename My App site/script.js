'use strict';



const convertedAmount = document.querySelector('.currency__converted-amount');

const btnConvert = document.querySelector('.btn_convert');

const convertedSign = document.querySelector('.currency__converted-sign');


convertedAmount.textContent = '0.00';



/// click event



btnConvert.addEventListener('click', function() {


    let currrencyChoice = document.getElementById('currency-out');
    let value = currrencyChoice.options[currrencyChoice.selectedIndex].value;

    let currrencyBack = document.getElementById('currency-in');
    let valueBack = currrencyBack.options[currrencyBack.selectedIndex].value;



		/// switch for conversion

 

    if (value === 'aud' && valueBack === 'gbp') {

        value = 0.57;
				convertedSign.textContent = '£';
				
			}
			
			if (value === 'aud' && valueBack === 'usd') {
				
				value = 0.85;
				convertedSign.textContent = '$';
				
			}
			
			if (value === 'aud' && valueBack === 'php') {
				
				value = 37.6;
				convertedSign.textContent = '₱';

    }


			if (value === 'gbp' && valueBack === 'php') {
				
				value = 66.6;
				convertedSign.textContent = '₱';

    }
		
    if (value === 'gbp' && valueBack === 'aud') {

			value = 1.83;
			convertedSign.textContent = '$';
				
		}

			if (value === 'gbp' && valueBack === 'usd') {
				
				value = 1.2;
				convertedSign.textContent = '$';
				
			}
			
			if (value === 'usd' && valueBack === 'aud') {
				
				value = 1.2;
				convertedSign.textContent = '$';
				
			}
			
			if (value === 'usd' && valueBack === 'php') {
				
				value = 53.6;
				convertedSign.textContent = '₱';
	
			}

			if (value === 'usd' && valueBack === 'gbp') {
				
				value = 0.8;
				convertedSign.textContent = '£';

			}

			if (value === 'php' && valueBack === 'gbp') {
				
				value = 0.3;

				convertedSign.textContent = '£';
				
			}
			
			
			if (value === 'php' && valueBack === 'aud') {
				
				value = 0.6;
				convertedSign.textContent = '$';
				
			}
			
			if (value === 'php' && valueBack === 'usd') {
				
				value = 0.4;
				convertedSign.textContent = '$';
				
			}





    const enterAmount = Number(document.getElementById('amount-from').value);



		/// actual conversion


    let converted = enterAmount * value;


		/// output


    convertedAmount.textContent = converted.toFixed(2);



})