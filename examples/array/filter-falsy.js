const filterFalsy = arr => arr.filter(Boolean);

filterFalsy(['', true, {}, false, 'sample', 1, 0]); // [true, {}, 'sample', 1]
