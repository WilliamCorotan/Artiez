@props(['buyer'])

<x-card>
    <div class="flex">
        <img
            class="hidden w-48 mr-6 md:block"
            src="{{ asset('images/profile.png') }}"
            alt=""
        />
        <div>
            <h3 class="text-2xl font-bold">
                <a href="/artists/{{ $buyer->artist_id }}">{{ $buyer->last_name }} {{$buyer->first_name}}</a>
            </h3>
            <br>
            <p>{{$buyer->email}}</p>
           <p>{{$buyer->contact_number}}</p>
           <h6 class="font-semibold">Address</h6>
           <p>{{$buyer->street_address}} {{$buyer->district}} {{$buyer->barangay}} {{$buyer->city}} {{$buyer->province}} {{$buyer->postal_code}}</p>
        </div>
    </div>
</x-card>
