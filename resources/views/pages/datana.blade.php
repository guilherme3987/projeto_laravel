<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- função asset -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        
    <title>DATANA</title>

</head>
<body>

<header class="navbar">
    <div class="navbar-logo">
        <img src="images/logo.png" alt="Logo da Empresa"> 
    </div>
    <nav>
        <ul class="navbar-nav" id="navbar-nav">
            <li class="nav-item"><a href="../index.php" class="nav-link">Início</a></li>
            <li class="nav-item"><a href="../index.php#section1" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Funcionalidades</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contato</a></li>
        </ul>
    </nav>
    <button class="menu-toggle" aria-controls="nav-links-container" aria-expanded="false">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
</header>

<section class="section0">
    <div class="section0-text">
        <h2>Transforme Dados <br>em Decisões com o DatAna</h2>
        <p>Libere o poder dos seus dados com nossa plataforma de análise. Obtenha insights práticos, análises preditivas e relatórios automatizados que impulsionam o crescimento dos seus negócios.</p>
    </div>
    <div class="section0-devices">
        <img src="images/mock_up.png" alt="Celular e Tablet mostrando o aplicativo">
    </div>
</section>

<section id="section1">
    <h1>Por Que Escolher o DatAna?</h1>
    <div id="section1-content">
        <h2>Libere o poder total dos seus dados com o DatAna.</h2>
        <p>Nossa plataforma de análise intuitiva oferece tudo que você precisa para obter insights práticos e impulsionar o crescimento do seu negócio. Esqueça configurações complexas: com o Data_Ana, você faz o upload e vai direto ao que importa: análises preditivas e relatórios automatizados, simplificando o processo para que você tome decisões rápidas e inteligentes.</p>
    </div>
</section>

<section id="section2">
    <h1>A análise de dados descomplicada</h1>
    <p>Chega de configurações complexas. Faça o upload, e pronto: seus insights, na hora.</p>
    <div class="blocks-container">
        <div id="block-stats">
            <h3>Estatísticas Simplificadas</h3>
        </div>
        <div id="block-graphs">
            <h3>Gráficos automáticos</h3>
        </div>
        <div id="reports-pdf">
            <h3>Relatórios em PDF</h3>
        </div>
        <div id="block-secure">
            <h3>Segurança e Confiabilidade</h3>
        </div>
    </div>
    <a class="codepen-button"><span>Baixar</span></a>
</section>

</body>
<!-- função asset -->

<script src="{{ asset('js/script.js') }}"></script>
</html>