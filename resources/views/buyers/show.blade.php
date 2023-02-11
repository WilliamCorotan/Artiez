<x-layout>
    @include('partials._searchArtist')
    <a href="/artists" class="inline-block text-black ml-4 mb-4"
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

                <h3 class="text-2xl mb-2">{{ $buyer->last_name}} {{ $buyer->last_name}}</h3>
                <div class="text-xl font-bold mb-4">{{ $buyer->contact_number}}</div>
                <div class="text-lg my-4">
                    <i class="fa-solid fa-location-dot"></i> {{ $buyer->city}} {{ $buyer->province}}
                </div>
                <div class="border border-gray-200 w-full mb-6"></div>
                <div>

                    <div class="text-lg space-y-6">

                        <a
                            href="mailto:{{ $buyer->email }}"
                            class="block bg-laravel w-max text-white mt-6 py-4 px-6 mx-auto rounded-xl hover:opacity-80"
                        ><i class="fa-solid fa-envelope"></i>
                            Contact Artist</a
                        >

                    </div>
                </div>
            </div>
        </x-card>
    </div>
</x-layout>
