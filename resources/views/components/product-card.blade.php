@props(['product'])

<x-card>
    <div class="flex">
        <img
            class="hidden w-48 mr-6 md:block"
            src="{{ asset('images/profile.png') }}"
            alt=""
        />
        <div>
            <h3 class="text-2xl font-bold">
                <a href="/artworks/{{ $product->product_id }}">{{ $product->product_name}}</a>
            </h3>
            <br>
            <div class="text-xl">{{ $product->art_style}}</div>
            <div class="text-lg mt-4">
               {{ $product->width}} X {{ $product->height}}
            </div>
            <div class="text-lg mt-4">
               {{ $product->price }}
            </div>
            <div class="text-lg mt-4">
                {{ $product->coa }}
             </div>
        </div>
    </div>
</x-card>
