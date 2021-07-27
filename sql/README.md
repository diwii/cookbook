**Select WHERE and NOT**

```sql
SELECT * FROM wheelpros_22jul.core_config_data WHERE value LIKE '%mcstaging%' AND NOT path LIKE '%facebook%';
```

**Replaces all occurrences of a substring within a string**

```sql
UPDATE 
    table_name
SET
    column_name = REPLACE(column_name, 'old_string','new_string')
WHERE
    condition;
```

Example:

```sql
UPDATE wheelpros_22jul.core_config_data
SET value = Replace(value, 'https://mcstaging.', 'http://local.')
WHERE value LIKE '%mcstaging%' AND NOT path LIKE '%facebook%';
```