/* Destaque de link ativo na navbar (ScrollSpy já ativado no body)   */
/* Se quiser mais scripts, adicione aqui                            */

/* Exemplo opcional: rolar suavemente quando o usuário clicar nos links */
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
