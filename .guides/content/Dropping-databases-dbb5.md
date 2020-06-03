|||info
### Reset section database
If you make a mistake while editing the `hostel` database in this set of sections or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node --no-warnings .guides/sqltests/fw-sql-reset-hostel.js)
|||
---

It's time to learn how to get rid of all the data, together with its tables. 

As we mentioned earlier, the `DROP` SQL keyword, part of the SQL _Data Definition Language_ is a very powerful command. Once it has been executed, there is no turning back. 

This is where following good practice and taking regular backups of your databases can help you if you make a mistake. We will cover this in a later unit.

We've created a `hostel` database. 
Show the available databases with the `SHOW DATABASES;` statement to confirm the existance of the `hostel` database.

Execute the `DROP DATABASE hostel;` command to see this:

```
Query OK, 0 rows affected (0.00 sec)
```

And display the available databases again to confirm that the `hostel` database is gone.

Complete a challenge on dropping databases in the next section.
