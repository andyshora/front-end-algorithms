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
        this.qsort(array, 0, array.length);
    },
    bubble_sort: function(array)  {

        var swapped;
        do {
            swapped = false;
            for (var i=0; i < array.length-1; i++) {

                if (array[i] > array[i+1]) {

                    array.algorithms_swap(i,i+1);
                    swapped = true;
                }
            }
        } while (swapped);

    }
}



