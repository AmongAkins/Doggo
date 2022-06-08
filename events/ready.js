module.exports = async (client) => {
  let statuses = [
    "Doggo Area"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "WATCHING",
    });
  }, 1000);

  console.log(`[API] Logged in as ${client.user.username}`);
};