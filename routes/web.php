<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtistsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\Artist\ArtistController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/login', [LoginController::class, ('login')]);

// Custom Routes
Route::get('/artists', [ArtistsController::class, 'index']);

Route::get('/artists/{id}', [ArtistsController::class, 'show']);

Route::get('/artworks', [ProductsController::class, 'index']);

// Route::get('/artworks/{product_id}', [ProductsController::class, 'show']);
Route::get('/display', [ArtistController::class, 'index']);
// Route::get('dashboard', [ArtistController::class, 'index']);
Route::get('/artworks/add', [ArtistController::class, 'create']);
Route::post('/artworks/add', [ArtistController::class, 'store']);

Route::get('artworks/{product}/edit', [ArtistController::class, 'edit']);

Route::patch('artworks/{product}/edit', [ArtistController::class, 'update']);

Route::delete('artworks/{product}/delete', [ArtistController::class, 'destroy']);



require __DIR__ . '/auth.php';
