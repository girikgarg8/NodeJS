const cron=require('node-cron')
const emailService=require('../services/email-service')
const sender=require('../config/emailConfig')
/*
10:00 am

Every 5 minutes
we will check are there any pending emails which was expcted to be sent by now and still pending
*/

const setupJobs=()=>{
    cron.schedule('*/1 * * * *',async ()=>{
        const response=await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to:email.recipientEmail,
                subject: email.subject,
                text:email.content
            },async (err,data)=>{
                if (err){
                    console.log(err);
                }
                else {
                    console.log(data);
                    await emailService.updateTicket(email.id,{status:"SUCCESS"})
                }
            })
        })
        console.log(response);
        return response;
    })
}

module.exports=setupJobs;