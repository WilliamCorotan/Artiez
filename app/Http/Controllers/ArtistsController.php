<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Artist;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class ArtistsController extends Controller
{

    public function index()
    {
        // $artists = Artist::all();
        return view('buyers.index', [
            'buyers' => User::latest()->filter(request(['search']))->get()
        ]);
    }

    public function show(User $buyer)
    {
        return view('buyers.show', [
            'buyer' => $buyer
        ]);
    }


}
