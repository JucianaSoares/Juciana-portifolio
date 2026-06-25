document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Botão de topo (Seguro)
    const btn = document.getElementById("btnTopo");
    if (btn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        };
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 2. Saudação
    function saudacao() {
        const hora = new Date().getHours();
        console.log(hora < 12 ? "Bom dia!" : hora < 18 ? "Boa tarde!" : "Boa noite!");
    }
    saudacao();

    // 3. Controle do Tema Claro/Escuro (Movido para cá por segurança!)
    const btnTema = document.getElementById('btn-tema');

    if (btnTema) { // Garante que o botão realmente existe antes de escutar o clique
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            // Muda o ícone conforme o tema
            if (document.body.classList.contains('light-mode')) {
                btnTema.textContent = '☀️';
            } else {
                btnTema.textContent = '🌙';
            }
        });
    }
});