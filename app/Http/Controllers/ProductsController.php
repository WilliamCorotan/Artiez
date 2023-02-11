<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{

    public function index()
    {
        return view('products.artworks', [
            'products' => Product::latest()->filter(request(['search']))->get()
        ]);
    }


    public function show(Product $product)
    {
        return view('products.artwork', [
            'product' => $product
        ]);
    }

}
