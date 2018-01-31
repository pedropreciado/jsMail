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

class Message {
  constructor(from, to, subject, body) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messageDraft = new Message;

const messageStore = {

  getInboxMessages() {
    return messages.inbox;
  },

  getSentMessages() {
    return messages.sent;
  },

  getMessageDraft() {
    return messageDraft;
  },

  updateDraftField(field, value) {
    messageDraft.field = value;
  },

  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message;
  }

}

module.exports = messageStore;
