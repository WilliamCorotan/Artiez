<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $medium_id
 * @property string $medium_name
 * @property ProductTable[] $productTables
 */
class Medium extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'medium_table';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'medium_id';

    /**
     * @var array
     */
    protected $fillable = ['medium_name'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function productTables()
    {
        return $this->hasMany(Product::class, 'medium_id', 'medium_id');
    }
}
