const express = require('express');
const bodyParser = require('body-parser');

const { PORT, EMAIL_ID } = require('./config/serverConfig');

const cron=require('node-cron');

const TicketController=require('./controllers/ticket-controller')

const jobs=require('./utils/job')

const {sendBasicEmail}=require('./services/email-service')

const {createChannel,subscribeMessage}=require('./utils/messageQueue')

const {REMINDER_BINDING_KEY}=require('./config/serverConfig');

const EmailService=require('./services/email-service')

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);              
    });

    const channel=await createChannel();
    subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);
    //const channel=await createChannel();

    app.post('/api/v1/tickets',TicketController.create)
    jobs();
    // sendBasicEmail(
    //     `"Support" <${EMAIL_ID}`,
    //     `${EMAIL_ID}`,
    //     'This is a testing email',
    //     'Hey, how are you, I hope you like the project'
    // )
}

setupAndStartServer();