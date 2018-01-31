let messages = {
  sent: [
    {
      to: "friend@jsmail.com",
      subject: "Check This Out",
      body: "It's so cool"
    },
    {
      to: "person@jsmail.com",
      subject: "zzz",
      body: "soo boring"
    }
  ],
  inbox: [
    {
      from: "grandma@jsmail.com",
      subject: "Fwd:Fwd:Fwd: Check this out",
      body: "Stay at home mom discovers cure for leg cramps. Doctors hate her"
    },
    {
      from: "person@jsmail.com",
      subject: "Questionare",
      body: "Take this free quiz win $1000 dollars"
    }
  ]
}

const messageStore = {
  
  getInboxMessages() {
    return messages.inbox;
  },

  getSentMessages() {
    return messages.sent;
  }

}

module.exports = messageStore;
