exports.run = (client, message, args) => {


  const arg = message.content.split(/\s+/g).slice(1);
  var [age, sex] = arg;
  if (!age) {
    age = "Testing"
  }
  if (!sex) {
    sex = age
  }
  message.channel.send("edit:" + ` ${age}`)
    .then(sentMessage => setTimeout(function () { sentMessage.edit("edit:" + ` ${age}` + ` ${sex}`) }, 2500))


};