const ps = require("photoshop");

ps.action.addNotificationListener([
  {
    event: "select"
  },
  {
    event: "invokeCommand"
  }], (event, descriptor) => {
    // console.log(event, descriptor)
    fetch("http://localhost:3001/", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "event": JSON.stringify(event),
        "descriptor": JSON.stringify(descriptor)
      })
    })
  });

