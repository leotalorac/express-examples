function getTasks() {
  return [
    { title: "Buy me a 🎁", date: getDatePlusDays(5) },
    { title: "NodeJS study group homework", date: getDatePlusDays(7) },
  ];
}

function getDatePlusDays(days) {
  let now = new Date();
  now.setDate(now.getDate() + days);
  return now.toLocaleString();
}

module.exports = { getTasks };
