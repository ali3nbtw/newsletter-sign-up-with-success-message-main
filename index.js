emailHolder = document.querySelector('.email-holder');
emailHolder.addEventListener('keydown', submitWithEnter);

function submitWithEnter(event) {
	if (event.key === 'Enter') {
		emailCheckout();
	}
}

function emailCheckout() {
	let emailInputValue = document.querySelector('.email-holder').value;
	let error = document.querySelector('.invalid-email-error');

	let successStateHtml = `<div class="body2">
      <img src="assets/images/icon-success.svg" alt="success-icon" class="success-icon">
      <h1 class="thanks-for-subscribing">Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <b>${emailInputValue}</b>.
         Please open it and click the button inside to confirm your subscription</p>
      <button class="subscribe-btn" onclick="reload()">Dismiss message</button>
      <script src="index.js"></script>
   </div>
	`;

	if (!emailInputValue.includes('@')) {
		emailHolder = document.querySelector('.email-holder');

		error.innerHTML = 'Valid email required';

		emailHolder.style.backgroundColor = 'hsl(4, 100%, 67%, 0.3)';
		emailHolder.style.color = 'hsl(4, 100%, 67%)';

		emailHolder.value = '';
		emailHolder.setAttribute('placeholder', emailInputValue);

		setTimeout(normalState, 2000);
	} else {
		document.body.innerHTML = successStateHtml;
		successStyle();
	}
}
function normalState() {
	emailHolder.style.backgroundColor = 'white';
	emailHolder.style.color = 'hsl(234, 29%, 20%)';
}
function successStyle() {
	document.head.innerHTML += '<link rel="stylesheet" href="style-success.css">';
	console.log('xd');
}
function reload() {
	location.reload();
}
