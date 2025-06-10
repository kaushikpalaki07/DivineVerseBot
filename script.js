
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = input.value.trim();
  if (userInput === '') return;

  // Display user message
  const userMsg = document.createElement('div');
  userMsg.classList.add('user-message');
  userMsg.textContent = userInput;
  chatBox.appendChild(userMsg);

  // Display bot response (mock for now)
  const botMsg = document.createElement('div');
  botMsg.classList.add('bot-message');
  botMsg.textContent = 'This is a sample answer from Krishna.';
  chatBox.appendChild(botMsg);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
});
