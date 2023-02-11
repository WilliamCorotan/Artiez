<x-layout>
    @include('partials._searchProducts')
    <a href="/artworks" class="inline-block text-black ml-4 mb-4"
    ><i class="fa-solid fa-arrow-left"></i> Back
    </a>
    <div class="mx-4">
        <x-card>
            <div
                class="flex flex-col items-center justify-center text-center"
            >
                <img
                    class="w-48 mr-6 mb-6"
                    src="{{ asset('images/profile.png') }}"
                    alt=""
                />

                <h3 class="text-2xl mb-2">{{ $product->last_name}} {{ $product->last_name}}</h3>
                <div class="text-xl font-bold mb-4">{{ $product->contact_number}}</div>
                <div class="text-lg my-4">
                    <i class="fa-solid fa-location-dot"></i> {{ $product->city}} {{ $product->province}}
                </div>
                <div class="border border-gray-200 w-full mb-6"></div>
                <div>
                    <h3 class="text-3xl font-bold mb-4">
                        Product Description
                    </h3>
                    <div class="text-lg space-y-6">
                        <p>
                            {{ $product->description }}
                        </p>
                    </div>
                </div>
            </div>
        </x-card>
    </div>
</x-layout>
