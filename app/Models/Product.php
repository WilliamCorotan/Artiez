<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property integer $product_id
 * @property integer $artist_id
 * @property integer $base_id
 * @property integer $medium_id
 * @property string $product_name
 * @property string $description
 * @property float $length
 * @property float $width
 * @property float $height
 * @property string $date_created
 * @property string $art_style
 * @property string $coa
 * @property boolean $frame
 * @property string $product_preview
 * @property float $price
 * @property boolean $is_sculpture
 * @property boolean $sold
 * @property OrderedItemTable[] $orderedItemTables
 * @property BaseTable $baseTable
 * @property ArtistTable $artistTable
 * @property MediumTable $mediumTable
 */
class Product extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_table';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'product_id';

    /**
     * @var array
     */

    // protected $fillable = ['artist_id', 'base_id', 'medium_id', 'product_name', 'description', 'width', 'height', 'date_created', 'art_style', 'coa', 'product_preview', 'price', 'sold'];

    protected $guarded = [];

    public function scopeFilter($query, array $filters)
    {
        // if ($filters['tag'] ?? false) {
        //     $query->where('tags', 'like', '%' . request('tag') . '%' );
        // }
        if ($filters['search'] ?? false) {
            $query->where('product_name', 'like', '%' . request('search') . '%')
                ->orWhere('art_style', 'like', '%' . request('search') . '%')
                ->orWhere('width', 'like', '%' . request('search') . '%')
                ->orWhere('height', 'like', '%' . request('search') . '%')
                ->orWhere('price', 'like', '%' . request('search') . '%');
        }
    }

    public function scopeCount($query)
    {
        $query->where('artist_id', '=', auth()->user()->id);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orderedItemTables()
    {
        return $this->hasMany(OrderedItem::class, 'product_id', 'product_id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'artist_id', 'id');
    }
}
