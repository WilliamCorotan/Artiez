<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArtworkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artworks = Product::all();

        return Inertia::render('Homepage', ['artworks' => $artworks]);
    }
    // ➔
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Artist/addArtwork');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'product_name' => 'required',
            'description' => 'required',
            'width' => 'required',
            'height' => 'required',
            'base' => 'required',
            'medium' => 'required',
            'art_style' => 'required',
            'coa' => 'required',
            'product_preview' => 'required',
            'price' => 'required'
        ]);


        // dd(Auth::id());
        //insert user_id from auth()
        $formFields['artist_id'] = Auth::id();

        $formFields['sold'] = 0;
        // dd($formFields);
        Product::create($formFields);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $artwork)
    {
        // $product = Product::findOrFail($id);
        return Inertia::render('Artist/showArtwork', ['artwork' => $artwork]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::findOrFail();
        return Inertia::render('Artwork/Edit', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product  = Product::findOrFail($id);
        $formFields = $request->validate([
            'product_name' => 'required',
            'description' => 'required',
            'width' => 'required',
            'height' => 'required',
            'base' => 'required',
            'medium' => 'required',
            'art_style' => 'required',
            'coa' => 'required',
            'product_preview' => 'required',
            'price' => 'required'
        ]);


        //insert user_id from auth()
        // $formFields['artist_id'] = auth()->user_id;


        $formFields['sold'] = 0;
        // dd($formFields);

        if ($request->hasFile('coa')) {
            $formFields['coa'] = $request->file('coa')->store('assets.coa', 'public');
        }
        if ($request->hasFile('product_preview')) {
            $formFields['product_preview'] = $request->file('product_preview')->store('assets.product_preview', 'public');
        }

        $product->update($formFields);
        return view('test');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
    }
}
