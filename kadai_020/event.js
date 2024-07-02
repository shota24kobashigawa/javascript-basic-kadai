const btn =document.getElementById('btn');
const text =document.getElementById('text');

btn.addEventListener('click', () => {
  const childList= document.createElement('text');
  text.textContent = 'ボタンをクリックしました';
});
