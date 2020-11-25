import nodemailer from "nodemailer"

exports.handler = async (event, context) => {

  function queryStringToJSON(queryString) { 
    if(queryString.indexOf('?') > -1){
      queryString = queryString.split('?')[1];
    }
    var pairs = queryString.split('&');
    var result = {};
    pairs.forEach(function(pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
  }

  const body = queryStringToJSON(event.body);
  const name = body.name;
  const email = body.email;
  const subject = body.subject;
  const message = body.message;

  let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: email,
    to: "my_email@example.com", 
    subject: subject + " - " + name, 
    text: message,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return { 
    statusCode: 200,
    body: "Thanks for submitting the contact form!" 
  }
};
