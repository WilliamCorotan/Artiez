<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <form action="/artworks/add" method="POST">
    @csrf
    <div style="display: grid; width:80%; margin:auto;">
      {{-- Form field for product name --}}
      <label for="product_name">Product Name: </label>
      <input type="text" id="product_name" name="product_name" value="{{ old('product_name') }}" placeholder="Enter product name">
      @error('product_name')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      {{-- Form field for product description --}}
      <label for="description">Description: </label>
      <input type="text" id="description" name="description" value="{{ old('description') }}" placeholder="Enter product description">
      @error('description')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product dimensions --}}
      <label for="width">Dimensions: </label>
      <input type="text" id="width" name="width" value="{{ old('width') }}" placeholder="Width in inches">
      <input type="text" id="height" name="height" value="{{ old('height') }}" placeholder="Height in inches">
      @error('width')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      @error('height')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product base --}}
      <label for="product_name">Base: </label>
      <select id="base_id" name="base_id">
        <option selected>-Please select a base-</option>
        <option value="1">Canvas</option>
        <option value="2">Board</option>
        <option value="3">Cardboard</option>
        <option value="4" >Wood</option>
        <option value="5" >Glass</option>
        <option value="6" >Panel</option>
        <option value="7" >Bronze</option>
        <option value="8" >Paper</option>
        <option value="9" >Fine Art Paper</option>
        <option value="10" >Special Paper</option>
        <option value="11" >Fabric</option>
        <option value="12" >Soft Fabric</option>
        <option value="13" >Others</option>
      </select>
      @error('base_id')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product medium --}}
      <label for="medium_id">Medium: </label>
      <select id="medium_id" name="medium_id">
        <option selected>-Please select a medium-</option>
        <option value="1">Acrylic</option>
        <option value="2">Charcoal</option>
        <option value="3">Digital</option>
        <option value="4" >Oil</option>
        <option value="5" >Watercolor</option>
        <option value="6" >Graphite</option>
        <option value="7" >Ink</option>
        <option value="8" >Pastel</option>
        <option value="9" >Pencil</option>
        <option value="10" >Others</option>
      </select>
      @error('medium_id')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for art style --}}
      <label for="art_style">Art Style: </label>
      <select id="art_style" name="art_style">
        <option selected>-Please select an art style-</option>
        <option value="3D Art">3d Art</option>
        <option value="Abstract">Abstract</option>
        <option value="Abstract Expressionism">Abstract Expressionism</option>
        <option value="Avant-garde" >Avant-garde</option>
        <option value="Classicism" >Classicism</option>
        <option value="Conceptual" >Conceptual</option>
        <option value="Contemporary" >Contemporary</option>
        <option value="Documentary" >Documentary</option>
        <option value="Expressionism" >Expressionism</option>
        <option value="Fauvism" >Fauvism</option>
        <option value="Figurative" >Figurative</option>
        <option value="Fine Art" >Fine Art</option>
        <option value="Folk" >Folk</option>
        <option value="Illustration" >Illustration</option>
        <option value="Impressionism" >Impressionism</option>
        <option value="Minimalism" >Minimalism</option>
        <option value="Modern" >Modern</option>
        <option value="Photorealism" >Photorealism</option>
        <option value="Pointillism" >Pointillism</option>
        <option value="Pop Art" >Pop Art</option>
        <option value="Portraiture" >Portraiture</option>
        <option value="Realism" >Realism</option>
        <option value="Street Art" >Street Art</option>
        <option value="Surrealism" >Surrealism</option>
        <option value="Others" >Others</option>
      </select>
      @error('art_style')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      {{-- Form field for product Certificate of Authenticity (CoA) --}}
      <label for="coa">Certificate of Authenticity: </label>
      <input type="text" id="coa" name="coa" value="{{ old('coa') }}" placeholder="COA">
      @error('coa')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product preview --}}
      <label for="product_preview">Product preview: </label>
      <input type="text" id="product_preview" name="product_preview" value="{{ old('product_preview') }}" placeholder="Product preview">
      @error('product_preview')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      {{-- Form field for product price --}}
      <label for="price">Price: </label>
      <input type="number" id="price" name="price" value="{{ old('price') }}" placeholder="Product price">
      @error('price')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      <button>Submit</button>
    </div>
  </form>
</body>
</html>