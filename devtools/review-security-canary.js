/**
 * CANARIO SOLO PARA PROBAR .github/workflows/AI_review.yml — NO USAR EN PRODUCCIÓN.
 * Este módulo no está importado por el resto del proyecto.
 */

// 1) Secreto en código (valores ficticios con forma típica)
const OPENAI_API_KEY = "sk-proj-FAKE1234567890abcdefghijklmnopqrstuvwxyz";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// 2) Ejecución dinámica peligrosa
function runUserSnippet(code) {
  return eval(code); // eslint-disable-line no-eval
}

// 3) XSS típico en DOM
function showUserMessage(container, userHtml) {
  container.innerHTML = userHtml;
}

// 4) Concatenación tipo inyección SQL
function buildQuery(table, userId) {
  return "SELECT * FROM " + table + " WHERE id = '" + userId + "'";
}

// Evitar "unused" si algún bundler analiza el archivo; no exporta hacia la app.
void OPENAI_API_KEY;
void AWS_SECRET_ACCESS_KEY;

export { showUserMessage as renderUnsafe, buildQuery, runUserSnippet };
