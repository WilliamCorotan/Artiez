<x-layout>
    @include('partials._searchArtist')

    <div class="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4">
        @foreach ($buyers as $data)
            <x-artist-card :buyer="$data" />
        @endforeach
    </div>
</x-layout>
