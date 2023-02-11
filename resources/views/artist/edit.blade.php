<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ $product->description }}</title>
  @vite('resources/css/app.css')
</head>
<body class="bg-slate-500">
   <p>{{ $product->product_id }}</p>
  <form action="" method="POST" enctype="multipart/form-data">
    @csrf
    @method('PATCH')
    <div style="display: grid; width:80%; margin:auto;">
      {{-- Form field for product name --}}
      <label for="product_name">Product Name: </label>
      <input type="text" id="product_name" name="product_name" value="{{ $product->product_name }}">
      @error('product_name')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      {{-- Form field for product description --}}
      <label for="description">Description: </label>
      <input type="text" id="description" name="description" value="{{ $product->description }}" >
      @error('description')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product dimensions --}}
      <label for="width">Dimensions: </label>
      <input type="text" id="width" name="width" value="{{$product->width}}">
      <input type="text" id="height" name="height" value="{{$product->height}}">
      @error('width')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      @error('height')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product base --}}
      <label for="product_name">Base: </label>
      <select id="base_id" name="base_id">
        <option >-Please select a base-</option>
        <option value="1" {{ $product->base_id == 1 ? 'selected' : '' }}>Canvas</option>
        <option value="2" {{ $product->base_id == 2 ? 'selected' : '' }}>Board</option>
        <option value="3" {{ $product->base_id == 3 ? 'selected' : '' }}>Cardboard</option>
        <option value="4" {{ $product->base_id == 4 ? 'selected' : '' }}>Wood</option>
        <option value="5" {{ $product->base_id == 5 ? 'selected' : '' }}>Glass</option>
        <option value="6" {{ $product->base_id == 6 ? 'selected' : '' }}>Panel</option>
        <option value="7" {{ $product->base_id == 7 ? 'selected' : '' }}>Bronze</option>
        <option value="8" {{ $product->base_id == 8 ? 'selected' : '' }}>Paper</option>
        <option value="9" {{ $product->base_id == 9 ? 'selected' : '' }}>Fine Art Paper</option>
        <option value="10" {{ $product->base_id == 10 ? 'selected' : '' }}>Special Paper</option>
        <option value="11" {{ $product->base_id == 11 ? 'selected' : '' }}>Fabric</option>
        <option value="12" {{ $product->base_id == 12 ? 'selected' : '' }}>Soft Fabric</option>
        <option value="13" {{ $product->base_id == 13 ? 'selected' : '' }}>Others</option>
      </select>
      @error('base_id')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product medium --}}
      <label for="medium_id">Medium: </label>
      <select id="medium_id" name="medium_id">
        <option >-Please select a medium-</option>
        <option value="1" {{ $product->medium_id == 1 ? 'selected' : '' }}>Acrylic</option>
        <option value="2" {{ $product->medium_id == 2 ? 'selected' : '' }}>Charcoal</option>
        <option value="3"{{ $product->medium_id == 3 ? 'selected' : '' }}>Digital</option>
        <option value="4" {{ $product->medium_id == 4 ? 'selected' : '' }}>Oil</option>
        <option value="5" {{ $product->medium_id == 5 ? 'selected' : '' }}>Watercolor</option>
        <option value="6" {{ $product->medium_id == 6 ? 'selected' : '' }}>Graphite</option>
        <option value="7" {{ $product->medium_id == 7 ? 'selected' : '' }}>Ink</option>
        <option value="8" {{ $product->medium_id == 8 ? 'selected' : '' }}>Pastel</option>
        <option value="9" {{ $product->medium_id == 9 ? 'selected' : '' }}>Pencil</option>
        <option value="10" {{ $product->medium_id == 10 ? 'selected' : '' }}>Others</option>
      </select>
      @error('medium_id')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for art style --}}
      <label for="art_style">Art Style: </label>
      <select id="art_style" name="art_style">
        <option selected>-Please select an art style-</option>
        <option value="3D Art" {{ $product->art_style == "3D Art" ? 'selected' : '' }}>3d Art</option>
        <option value="Abstract" {{ $product->art_style == "Abstract" ? 'selected' : '' }}>Abstract</option>
        <option value="Abstract Expressionism" {{ $product->art_style == "Abstract Expressionism" ? 'selected' : '' }}>Abstract Expressionism</option>
        <option value="Avant-garde"{{ $product->art_style == "Avant-garde" ? 'selected' : '' }} >Avant-garde</option>
        <option value="Classicism" {{ $product->art_style == "Classicism" ? 'selected' : '' }} >Classicism</option>
        <option value="Conceptual" {{ $product->art_style == "Conceptual" ? 'selected' : '' }}>Conceptual</option>
        <option value="Contemporary" {{ $product->art_style == "Contemporary" ? 'selected' : '' }}>Contemporary</option>
        <option value="Documentary" {{ $product->art_style == "Documentary" ? 'selected' : '' }}>Documentary</option>
        <option value="Expressionism" {{ $product->art_style == "Expressionism" ? 'selected' : '' }}>Expressionism</option>
        <option value="Fauvism" {{ $product->art_style == "Fauvism" ? 'selected' : '' }}>Fauvism</option>
        <option value="Figurative" {{ $product->art_style == "Figurative" ? 'selected' : '' }}>Figurative</option>
        <option value="Fine Art" {{ $product->art_style == "Fine Art" ? 'selected' : '' }}>Fine Art</option>
        <option value="Folk" {{ $product->art_style == "Folk" ? 'selected' : '' }}>Folk</option>
        <option value="Illustration" {{ $product->art_style == "Illustration" ? 'selected' : '' }}>Illustration</option>
        <option value="Impressionism" {{ $product->art_style == "Impressionism" ? 'selected' : '' }}>Impressionism</option>
        <option value="Minimalism" {{ $product->art_style == "Minimalism" ? 'selected' : '' }}>Minimalism</option>
        <option value="Modern" {{ $product->art_style == "Modern" ? 'selected' : '' }}>Modern</option>
        <option value="Photorealism" {{ $product->art_style == "Photorealism" ? 'selected' : '' }}>Photorealism</option>
        <option value="Pointillism" {{ $product->art_style == "Pointillism" ? 'selected' : '' }}>Pointillism</option>
        <option value="Pop Art" {{ $product->art_style == "Pop Art" ? 'selected' : '' }}>Pop Art</option>
        <option value="Portraiture" {{ $product->art_style == "Portraiture" ? 'selected' : '' }}>Portraiture</option>
        <option value="Realism" {{ $product->art_style == "Realism" ? 'selected' : '' }}>Realism</option>
        <option value="Street Art" {{ $product->art_style == "Street Art" ? 'selected' : '' }}>Street Art</option>
        <option value="Surrealism" {{ $product->art_style == "Surrealism" ? 'selected' : '' }}>Surrealism</option>
        <option value="Others" {{ $product->art_style == "Others" ? 'selected' : '' }}>Others</option>
      </select>
      @error('art_style')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      {{-- Form field for product Certificate of Authenticity (CoA) --}}
      <label for="coa">Certificate of Authenticity: </label>
      <input type="text" id="coa" name="coa" value="{{ $product->coa }}">
      @error('coa')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror
      
      {{-- Form field for product preview --}}
      <label for="product_preview">Product preview: </label>
      <input type="text" id="product_preview" name="product_preview" value="{{ $product->product_preview }}">
      @error('product_preview')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      {{-- Form field for product price --}}
      <label for="price">Price: </label>
      <input type="number" id="price" name="price" value="{{ $product->price }}">
      @error('price')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
      @enderror

      <button>Submit</button>
    </div>
  </form>
</body>
</html>