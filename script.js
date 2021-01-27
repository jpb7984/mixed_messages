// Inspirational messages
const inspirationalMessage = {
    message1: ['1 week from today', '1 day from today', '1 month from today'],
    message2: ['you will experience', 'you will see', 'you will hear'],
    message3: ['great news', 'bad news', 'exciting news']
};

// Random selection of message object
for (let key in inspirationalMessage) {
    random1 = Math.floor(Math.random() * inspirationalMessage.message1.length);
    random2 = Math.floor(Math.random() * inspirationalMessage.message2.length);
    random3 = Math.floor(Math.random() * inspirationalMessage.message3.length);

    console.log(inspirationalMessage.message1[random1], inspirationalMessage.message2[random2], inspirationalMessage.message3[random3])
}