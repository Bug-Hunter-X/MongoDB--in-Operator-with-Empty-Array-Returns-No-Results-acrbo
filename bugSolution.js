```javascript
function findDocuments(field, values) {
  if (values.length === 0) {
    // Return all documents if the array is empty
    return db.collection.find({});
  } else {
    // Use $in operator for non-empty arrays
    return db.collection.find({ field: { $in: values } });
  }
}
```