
async function init() {
  console.log("inside app.js");
  const sqlPromise = initSqlJs({
    locateFile: file => `js/${file}`
  });
  const dataPromise = fetch("data/db.sqlite").then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  const db = new SQL.Database(new Uint8Array(buf));

  // Grab the table element
  const table = document.querySelector( "table" );
  table.innerHTML = '<tr><th>Col1</th><th>Col2</th></tr>';
      
  // Prepare a statement
  var stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
  stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}

  // Bind new values
  stmt.bind({$start:1, $end:2});
  while(stmt.step()) { //
  var row = stmt.getAsObject();
    table.innerHTML += `<tr><td>${row['col1']}</td><td>${row['col2']}</td></tr>`;
  }
  console.log( "Done" );
}

init();