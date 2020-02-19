const request = require("request");

global.slack = (channel, message) => {
    const options = {
        method: 'POST',
        url: 'https://slack.com/api/chat.postMessage',
        headers:
        {
            Authorization: 'Bearer ' + process.env.SLACK_TOKEN,
            'Content-Type': 'application/json'
        },
        body: {
            channel: channel,
            text: message
        },
        json: true
    };
    
    request(options);
};
