// Arquivo "notification.js"

// Função para mostrar a notificação de uso de cookies
function showCookieNotification() {
  const notification = document.createElement('div');
  notification.className = 'cookie-notification';
  notification.style.position = 'fixed';
  notification.style.bottom = '0';
  notification.style.left = '0';
  notification.style.width = '100%';
  notification.style.backgroundColor = '#333';
  notification.style.color = '#fff';
  notification.style.padding = '10px';
  notification.style.textAlign = 'center';
  notification.style.display = 'flex';
  notification.style.alignItems = 'center';
  notification.style.justifyContent = 'space-between';
  notification.innerHTML = `
    <p>Este site utiliza cookies para melhorar a experiência do usuário.</p>
    <button onclick="acceptCookies()" style="background-color: #e50914; color: #fff; border: none; border-radius: 4px; padding: 5px 10px; font-size: 14px; cursor: pointer;">Aceitar</button>
    <button onclick="rejectCookies()" style="background-color: #555; color: #fff; border: none; border-radius: 4px; padding: 5px 10px; font-size: 14px; cursor: pointer;">Rejeitar</button>
  `;
  document.body.appendChild(notification);
}

// Função para aceitar o uso de cookies e fechar a notificação
function acceptCookies() {
  const notification = document.querySelector('.cookie-notification');
  if (notification) {
    notification.style.display = 'none';
    // Você pode adicionar código aqui para definir um cookie de aceitação
  }
}

// Função para rejeitar o uso de cookies e fechar a notificação
function rejectCookies() {
  const notification = document.querySelector('.cookie-notification');
  if (notification) {
    notification.style.display = 'none';
    // Você pode adicionar código aqui para lidar com a rejeição de cookies
  }
}

// Verifica se o usuário já aceitou ou rejeitou cookies
function checkCookieConsent() {
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (cookieConsent === 'accept') {
    // O usuário aceitou cookies
  } else if (cookieConsent === 'reject') {
    // O usuário rejeitou cookies
  } else {
    showCookieNotification();
  }
}

checkCookieConsent();
