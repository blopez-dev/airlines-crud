export function createDbFlights(){
    let bbdd;
    document.addEventListener('DOMContentLoaded', ()=>{
        createDB();
    })

    function createDB(){
       const createDB = window.indexedDB.open('flights', 1);

       createDB.onerror = function(){
           console.log('Hubo un error')
       };
       createDB.onsuccess = function(){
           bbdd = createDB.result;
       }
        createDB.onupgradeneeded = function(e){
           const db = e.target.result;

           const objectStore = db.createObjectStore('flights', {keyPath:'id', autoIncrement: true});
           objectStore.createIndex('id', 'destination', {unique:true});
           objectStore.createIndex('Destination', 'destination', {unique:false});
           objectStore.createIndex('Departure', 'Departure', {unique:false});
           objectStore.createIndex('Price', 'Price', {unique:false});
           objectStore.createIndex('scale', 'scale', {unique:false});
            console.log('DB created')
       }
    }
}
