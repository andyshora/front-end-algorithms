/* ----- QUICKSORT ALGORITHM (CORE)  ----- */
Array.prototype.algorithms_swap=function(a, b)
{
    var tmp=this[a];
    this[a]=this[b];
    this[b]=tmp;
}

var algorithms = {
    partition : function (array, start_index, end_index, pivot_index)
    {
        var pivot_val = array[pivot_index];
        array.algorithms_swap(pivot_index, end_index-1);
        var store = start_index;
        var ix;
        for(ix = start_index; ix < end_index-1; ++ix) {
            if(array[ix] <= pivot_val) {
                array.algorithms_swap(store, ix);
                ++store;
            }
        }
        array.algorithms_swap(end_index-1, store);

        return store;
    },
    qsort : function(array, start_index, end_index)
    {
        if(end_index-1 > start_index) {
            var pivot_index = start_index + Math.floor(Math.random()*(end_index-start_index));

            pivot_index = this.partition(array, start_index, end_index, pivot_index);

            this.qsort(array, start_index, pivot_index);
            this.qsort(array, pivot_index+1, end_index);
        }
    },
    quick_sort : function(array)
    {
        //this.swap_function = swap_function;
        this.qsort(array, 0, array.length);
    }
}



