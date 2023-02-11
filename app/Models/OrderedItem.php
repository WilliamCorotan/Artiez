<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property integer $ordered_item_id
 * @property integer $product_id
 * @property ProductTable $productTable
 * @property TransactionTable[] $transactionTables
 */
class OrderedItem extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'ordered_item_table';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'ordered_item_id';

    /**
     * @var array
     */
    protected $fillable = ['product_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function productTable()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function transactionTables()
    {
        return $this->hasMany(Transaction::class, 'order_item_id', 'ordered_item_id');
    }
}
