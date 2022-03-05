const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "key3Ax1VKSNChMfzl"
});

const base = airtable.base("app7fL9S99QXhW6Kq");

base("Table 1").create({ Name: "test", Notes: "test notes" }, function(
  err,
  record
) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});
