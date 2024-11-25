let table = new DataTable('#myTable');


const dataTableOptions ={
    columnDefs:[
        {orderable:false, target:[3,4]},
        {searchable: false, targets:[3,4]}
    ],
};



$(document).ready(function () {
    $('#myTable').DataTable({pageLength : 7});
});



