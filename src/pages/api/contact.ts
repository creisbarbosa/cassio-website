export default function Sendingblue(req: { body: { name: any; email: any; company: any; phone: any; message: any; }; }, res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void; }) {

  const SibApiV3Sdk = require('@sendinblue/client')
  
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  
  require('dotenv').config()
  
  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.API_KEY;
  
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "Mensagem de Contato creisb.com";
  sendSmtpEmail.htmlContent = "<html> <body> <h1>Mensagem de contato de {{params.name}}</h1>  <p><b>Mensagem:</b> {{params.message}}</p> <p>Email de contato: {{params.email}}</p> </body> </html>";
  sendSmtpEmail.sender = {email: 'creisbarbosa@gmail.com', name: 'Contato de creisb.com'};
  sendSmtpEmail.to = [{email: 'creisbarbosa@gmail.com', name: 'Cassio Reis Barbosa'}];
  sendSmtpEmail.replyTo = {"email":"creisbarbosa@gmail.com"};
  sendSmtpEmail.params = {"name":`${req.body.name}`,"email":`${req.body.email}`,"message":`${req.body.message}`,}
  
  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(function(data: any) {
      return new Promise<void>((resolve, reject) => {
        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(data));
        resolve();
      })

    }, 
      function(error: any) {
        console.error(error);
  });
}