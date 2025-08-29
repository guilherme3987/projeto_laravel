<?php

// routes/web.php

use Illuminate\Support\Facades\Route;

// rota para a  Landing Page
Route::get('/', function () {
    return view('pages.datana'); // Aponta para o arquivo 'landing.blade.php' dentro da pasta 'pages'
});