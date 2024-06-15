let file = "Fetch-data.txt"
fetch(file)
    .then(x => x, txt())
    .then(y => y);

file = ("Fetch-data")