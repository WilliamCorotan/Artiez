<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'user_id';

    /**
     * @var array
     */
    // protected $fillable = ['last_name', 'first_name', 'contact_number', 'email', 'pass', 'street_address', 'district', 'barangay', 'city', 'province', 'postal_code', 'open_for_commission'];

    protected $guarded = [];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'pass',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function scopeFilter($query, array $filters)
    {
        // if ($filters['tag'] ?? false) {
        //     $query->where('tags', 'like', '%' . request('tag') . '%' );
        // }
        if ($filters['search'] ?? false) {
            $query->where('last_name', 'like', '%' . request('search') . '%')
                ->orWhere('first_name', 'like', '%' . request('search') . '%')
                ->orWhere('street_address', 'like', '%' . request('search') . '%')
                ->orWhere('barangay', 'like', '%' . request('search') . '%')
                ->orWhere('city', 'like', '%' . request('search') . '%')
                ->orWhere('province', 'like', '%' . request('search') . '%')
                ->orWhere('postal_code', 'like', '%' . request('search') . '%');
        }
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function product() : HasMany
    {
        return $this->hasMany(Product::class, 'user_id', 'artist_id');
    }
    protected function role(): Attribute
    {
        return new Attribute(
            get: fn ($value) => ["buyer", "artist"][$value]
        );
    }
}
