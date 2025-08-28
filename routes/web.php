<?php

// routes/web.php

use Illuminate\Support\Facades\Route;

// Rota padrão do Laravel 
Route::get('/', function () {
    return view('welcome');
});

// rota para a  Landing Page
Route::get('/salvador-tech-summit', function () {
    return view('pages.landing'); // Aponta para o arquivo 'landing.blade.php' dentro da pasta 'pages'
});