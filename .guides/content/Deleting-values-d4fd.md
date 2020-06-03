|||info
### Reset section database
If you make a mistake while editing the `hotel` database in this set of sections or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node --no-warnings .guides/sqltests/fw-sql-reset-hotel.js)
|||
---

We've created a `hotel` SQL database that has tables that represent part of a _hotel-management_ application.

`USE` the `hotel` database and display its tables.

The `guests` table needs some data to be deleted because guests check-in and check-out from the hotel in short periods of time.

Let's inspect the data from the `guests` table by doing a `SELECT * FROM guests;`:

```
+----+-------------------------+------+
| id | name                    | room |
+----+-------------------------+------+
|  1 | Mcpherson, Cailin C.    |   78 |
|  2 | Drake, Wade M.          |   81 |
|  3 | Randolph, Inga J.       |   11 |
|  4 | Villarreal, Channing D. |   77 |
|  5 | Levine, Arden S.        |   58 |
+----+-------------------------+------+
5 rows in set (0.00 sec) 
```

In the next section, we'll apply the `DELETE` statement to some of the `guests` table data. 