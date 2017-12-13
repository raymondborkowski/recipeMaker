/* global require, module, console */
const AlexaMessageBuilder = require('alexa-message-builder');
const botBuilder = require('claudia-bot-builder');

function getIntentName(alexaPayload){
    return alexaPayload &&
        alexaPayload.request &&
        alexaPayload.request.type === 'IntentRequest' &&
        alexaPayload.request.intent &&
        alexaPayload.request.intent.name;
}
const api = botBuilder(
    (message, originalRequest) => {
        console.log(originalRequest.body.request.intent);
        console.log(getIntentName(originalRequest.body));
        if (originalRequest.body.request.intent.slots.Food) {
            return `Ain't nobody got time to make ${originalRequest.body.request.intent.slots.Food.value}`;
        } else if (getIntentName(originalRequest.body) === 'ExitApp') {
            return {
                response: {
                    outputSpeech: {
                        type: 'PlainText',
                        text: 'Bye from Spelling Bee!'
                    },
                    shouldEndSession: true
                }
            };
        }
        return {};
    },
    { platforms: ['alexa'] }
);

module.exports = api;
