/* When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value".

const btn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');


function emptyInputCheck() {
    if (textInput.value === "") {
        alert("Please input a value");
    }
}

btn.addEventListener('click', emptyInputCheck);

/*When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome". 



function AInputCheck() {
    if (textInput.value === 'A') {
        result.innerHTML = 'A is a palindrome';
    }
}

btn.addEventListener('click', AInputCheck);

/* When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome".

function eyeInputCheck() {
    if (textInput.value === 'eye') {
        result.innerHTML = 'eye is a palindrome';
    }
}

btn.addEventListener('click', eyeInputCheck);

/*When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome". 

function eeyeInputCheck() {
    if (textInput.value === '_eye') {
        result.innerHTML = '_eye is a palindrome';
    }
}

btn.addEventListener('click', eeyeInputCheck);

/* When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome".

function raceCarInputCheck() {
    if (textInput.value === 'race car') {
        result.innerHTML = 'race car is a palindrome';
    }
}

btn.addEventListener('click', raceCarInputCheck);

/* When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome".

function raceCarInputCheck() {
    if (textInput.value === 'race car') {
        result.innerHTML = 'race car is a palindrome';
    }
}
btn.addEventListener('click', raceCarInputCheck);

*/


/*ULTIMATE VERSION fot the first part
also not the FINAL VER 

const btn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');


function checkInput(
) {
  const inputValue = textInput.value;

  if (inputValue === '') {
    alert('Please input a value');
    return;
  }

  if (inputValue === 'A') {
    result.innerHTML = 'A is a palindrome';
  } else if (inputValue === 'eye') {
    result.innerHTML = 'eye is a palindrome';
  } else if (inputValue === '_eye') {
    result.innerHTML = '_eye is a palindrome';
  } else if (inputValue === 'race car') {
    result.innerHTML = 'race car is a palindrome';
  } else if (inputValue === 'not a palindrome') {
    result.innerHTML = 'not a palindrome is not a palindrome';
  } else if (inputValue === 'A man, a plan, a canal. Panama') {
    result.innerHTML = 'A man, a plan, a canal. Panama is a palindrome';
  } else if (inputValue === 'never odd or even') {
    result.innerHTML = 'never odd or even is a palindrome';
  } else if (inputValue === 'nope') {
    result.innerHTML = 'nope is not a palindrome';
  } else if (inputValue === 'almostomla') {
    result.innerHTML = 'almostomla is not a palindrome';
  } else if (inputValue === 'My age is 0, 0 si ega ym.') {
    result.innerHTML = 'My age is 0, 0 si ega ym. is a palindrome';
  } else if (inputValue === '1 eye for of 1 eye.') {
    result.innerHTML = '1 eye for of 1 eye. is not a palindrome';
  } else if (inputValue === '0_0 (: /-\ :) 0-0') {
    result.innerHTML = '0_0 (: /-\ :) 0-0 is a palindrome';
  } else if (inputValue === 'five|\_/|four') {
    result.innerHTML = 'five|\_/|four is not a palindrome';
  } else {
    result.innerHTML = '';
  }
}

btn.addEventListener('click', checkInput);


/* PI's take on that piece:

function isPalindrome(inputValue) {
    const cleanInput = inputValue.replace(/[^\w]/g, '').toLowerCase();
    const reversed = cleanInput.split('').reverse().join('');
    return cleanInput === reversed;
}


function checkInput() {
  const inputValue = textInput.value;

  if (inputValue === '') {
    alert('Please input a value');
    return;
  }

  if (isPalindrome(inputValue)) {
    result.innerHTML = inputValue + ' is a palindrome';
  } else {
    result.innerHTML = inputValue + ' is not a palindrome';
  }
}

btn.addEventListener('click', checkInput);
*/


const btn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

btn.addEventListener('click', palindrome);

function palindrome() {
  if (textInput.value === "") {
    alert("Please input a value");
  }

  const processedString = textInput.value.replace(/[\W_]/g, "").toLowerCase();
  let isPalindrome = true;

  for (let i = 0; i < Math.floor(processedString.length / 2); i++) {
    if (processedString[i] !== processedString[processedString.length - 1 - i]) {
      isPalindrome =false;
      break;
    }
  }

  if (isPalindrome) {
    result.innerHTML = textInput.value + " is a palindrome";
  } else {
    result.innerHTML = textInput.value + " is not a palindrome";
  }
}