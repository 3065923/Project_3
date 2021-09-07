var url = "http://127.0.0.1:5000/query?ticker=A"

d3.json(url).then(data => {

  console.log(data.A)
});