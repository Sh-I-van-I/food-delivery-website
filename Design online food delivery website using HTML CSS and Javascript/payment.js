// Set your publishable key
const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Create an instance of Elements
const elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
const style = {
  base: {
    // Add your base styles here
  }
};

// Create an instance of the card Element
const card = elements.create('card', {style});

// Add an instance of the card Element into the `card-element` div
card.mount('#card-element');

// Handle form submission
const form = document.getElementById('payment-form');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const { token, error } = await stripe.createToken(card);

  if (error) {
    // Inform the user if there was an error
    const errorElement = document.getElementById('card-errors');
    errorElement.textContent = error.message;
  } else {
    // Send the token to your server
    // This is where you would send the token to your server-side code to process the payment
    console.log(token);
  }
});
