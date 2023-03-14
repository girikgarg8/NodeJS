const sender = require('../config/emailConfig')
const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
        console.log(response);
    }
    catch (error) {
        console.log(error)
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({ status: "PENDING" });
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, status) => {
    try {
        const response = await repo.update(ticketId, status);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    }
    catch (error) {
        throw error;
    }
}

const subscribeEvents = async (payload) => {
    let service = payload.service;
    let data = payload.data;
    console.log('data is ', data)
    switch (service) {
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        case 'SEND_BASIC_EMAIL':
            const receivedParameters = Object.values(data)
            await sendBasicEmail(...receivedParameters);
            break;
        default:
            console.log('No valid event received');
            break;
    }
}
module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    subscribeEvents
}