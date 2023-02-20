<?php

use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Homepage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,

        'products' => Product::select()->join('users', 'artist_id', '=', 'user_id')->orderBy('product_table.created_at', 'desc')->get()

    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//routes for artist 
Route::middleware('auth', 'verified', 'user-role:artist')->group(function () {
    Route::get('/artist/dashboard', function () {
        return Inertia::render('Artist/Dashboard', [
            'artworks' => Product::latest()->where('artist_id', '=', auth()->user()->user_id)->get()
        ]);
    });
    Route::get('/artist/gallery', function () {
        return Inertia::render('Artist/Gallery', [
            'artworks' => Product::latest()->where('artist_id', '=', auth()->user()->user_id)->get()
        ]);
    })->name('gallery');
    Route::get('/artist/artworks/add', [ArtworkController::class, 'create']);
    Route::post('/artist/artworks/add', [ArtworkController::class, 'store'])->name('artworks.store');
});

Route::get('about', function () {
    return Inertia::render('About', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('contact', function () {
    return Inertia::render('Contact', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


require __DIR__ . '/auth.php';
