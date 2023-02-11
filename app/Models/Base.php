<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $base_id
 * @property string $base_name
 * @property ProductTable[] $productTables
 */
class Base extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'base_table';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'base_id';

    /**
     * @var array
     */
    protected $fillable = ['base_name'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function productTables()
    {
        return $this->hasMany(Product::class, 'base_id', 'base_id');
    }
}
