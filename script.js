const textInput = document.getElementById('textInput');
const actionButton = document.getElementById('actionButton');
const contentDiv = document.getElementById('content');

actionButton.addEventListener('click', () => {
  const text = textInput.value.trim(); 

  if (text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    contentDiv.appendChild(paragraph);

    textInput.value = '';
  }

  const lineCount = contentDiv.querySelectorAll('p').length;

  alert(`${lineCount} linha(s) foram adicionada(s).`);
});
