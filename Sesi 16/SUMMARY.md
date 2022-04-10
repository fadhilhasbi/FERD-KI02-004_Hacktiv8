# SUMMARY | Session 16

## State Management with Redux

---

- Redux diperlukan ketika terdapat 3 hal yaitu, complex data flow, many actions, and same data used in multiple places. Fungsi redux untuk membuat data jadi terpusat.
- Redux Middleware dapat digunakan untuk logging crash reporting, proses async ke API, routing dan lain sebagainya.
- Redux Thunk adalah sebuah fungsi yang membungkus 1 atau beberapa ekspresi yang akan di evaluasi ( baca: dikerjakan ) nanti. Membuat kita jadi bisa membuat action creators yang mengembalikan sebuah function daripada sebuah action. Juga bisa untuk melakukan delay terhadap eksekusi dispatch dari sebuah aksi, atau untuk melakukan dispatch hanya jika ada kondisi tertentu yang terpenuhi.
