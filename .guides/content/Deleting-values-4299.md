The guest: _Levine, Arden S._, has already checked-out from the hotel and its record needs to be deleted from the `hotel.guests` table. 

Find out the room number of _Levine, Arden S._ by doing a `SELECT * FROM hotel.guests WHERE name = 'Levine, Arden S.';`:

```
+----+------------------+------+
| id | name             | room |
+----+------------------+------+
|  5 | Levine, Arden S. |   58 |
+----+------------------+------+
1 row in set (0.00 sec)
```

And let's delete its record by using dot notation and a mysql multiple-line statement:

```
mysql> DELETE FROM hotel.guests
    -> WHERE
    -> room = 58;
```

And we've successfully checked _Levine, Arden S._ out. 

Learn about the dangers of omitting the `WHERE` clause in a `DELETE` SQL statement in the next section.