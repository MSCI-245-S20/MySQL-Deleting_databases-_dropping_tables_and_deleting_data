|||info
### Reset section database
If you make a mistake while editing the `RE` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node --no-warnings .guides/sqltests/fw-sql-reset-RE.js)
|||
---

{Check It!|assessment}(test-2178056744)

|||guidance

### Correct answer:

`USE RE;`

Single line statement:

`DELETE FROM payments WHERE paid = 1;`

Multi-line statement:

```
mysql> DELETE FROM payments 
    -> WHERE paid = 1;
```

|||
