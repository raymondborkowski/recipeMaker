# Amazon Alexa Recipe Maker

## Installing from source code

To try it out, follow these steps:

1. Create a new Alexa Skills app at from the [Amazon Developer Console](https://developer.amazon.com/edw/home.html)
2. On the **Interaction Model** screen of the app setup, create the [intents and utterances](setup.md) 
3. On the **Configuration** screen of the app setup, select HTTPS integration
4. run `npm run create` in this project to deploy the chat bot, and copy the endpoint URL it prints out, then paste to the HTTPS endpoint input box in the app setup screen in the Amazon Developer Console
5. add a name to your chatbot when NPM deployment asks, then complete the deployment process
6. Complete the app setup in the Amazon Developer Console
7. You can enable the skill for your Amazon account in the **Test** tab, and try it out. For example, say 'Alexa, ask Recipe maker for a chicken recipe'

## Privacy

This bot keeps no user information.