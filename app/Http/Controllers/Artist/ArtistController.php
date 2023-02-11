<?php

namespace App\Http\Controllers\Artist;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datas = User::all();
        return view('artist.dashboard', ['dataset' => $datas, 'props' => 'hello world']);
        // return view('artist.dashboard', ['products' => auth()->user()->product()->get()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('artist.create');
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
            'base_id' => 'required',
            'medium_id' => 'required',
            'medium_id' => 'required',
            'art_style' => 'required',
            'coa' => 'required',
            'product_preview' => 'required',
            'price' => 'required'
        ]);


        //insert user_id from auth()
        $formFields['artist_id'] = 2;

        $formFields['sold'] = 0;
        // dd($formFields);
        Product::create($formFields);
        return view('test');
    }

    /**
     * Display the specified resource. 12
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource. 13.1
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        // dd($product->product_name);
        return view('artist.edit', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage. 13.2
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        // dd($request);
        $formFields = $request->validate([
            'product_name' => 'required',
            'description' => 'required',
            'width' => 'required',
            'height' => 'required',
            'base_id' => 'required',
            'medium_id' => 'required',
            'medium_id' => 'required',
            'art_style' => 'required',
            'coa' => 'required',
            'product_preview' => 'required',
            'price' => 'required'
        ]);


        //insert user_id from auth()
        $formFields['artist_id'] = 2;


        $formFields['sold'] = 0;
        // dd($formFields);

        $product->update($formFields);
        return view('test');
    }

    /**
     * Remove the specified resource from storage. 14
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //add logic after auth() is finished
        // if($product->user_id !=auth()->id()) {
        //     abort(403, 'Unauthorized Action');
        // }

        $product->delete();
    }
}
