<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileAddressUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules() : array
    {
        return [
            'street_address' => 'string|max:255',
            'barangay' => 'string|max:255',
            'city' => 'string|max:255',
            'province' => 'string|max:255',
            'postal_code' => 'string|max:10',

        ];
    }
}
