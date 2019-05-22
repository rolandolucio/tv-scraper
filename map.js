let mya = [
  { rule: "optional", type: "string", name: "session", id: 1 },
  { rule: "optional", type: "string", name: "symbol_name", id: 2 },
  { rule: "optional", type: "string", name: "status", id: 3 },
  { rule: "optional", type: "string", name: "values", id: 4 },
  {
    rule: "optional",
    type: "double",
    name: "lp",
    id: 5
  }, { rule: "optional", type: "float", name: "ch", id: 6 },
  { rule: "optional", type: "float", name: "chp", id: 7 }, {
    rule: "optional",
    type: "double",
    name: "high_price",
    id: 8
  }, { rule: "optional", type: "double", name: "low_price", id: 9 }, { rule: "optional", type: "double", name: "volume", id: 10 },
  { rule: "optional", type: "double", name: "rtc", id: 11 }, { rule: "optional", type: "float", name: "rch", id: 12 }, {
    rule: "optional",
    type: "float",
    name: "rchp",
    id: 13
  }, { rule: "optional", type: "float", name: "bid", id: 14 }, { rule: "optional", type: "float", name: "ask", id: 15 }, {
    rule: "optional",
    type: "float",
    name: "bid_size",
    id: 16
  }, { rule: "optional", type: "float", name: "ask_size", id: 17 }, { rule: "optional", type: "string", name: "rest", id: 19 }
];

mya.map(e => {
  console.log(`${e.rule} ${e.type} ${e.name} = ${e.id};`);
});