
# imports
import smtplib, email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os, sys, time

#credentials
address = 'bansalrohan18@gmail.com'
password = 'rbfd0gg93'

#set up/initialize smtp connection
mail = smtplib.SMTP('smtp.gmail.com', 587)
mail.ehlo()
mail.starttls()
mail.login(address, password)

def get_contacts(filename):
    contacts_list = {}
    with open(filename, mode = 'r', encoding = 'utf-8') as f:
        contacts = f.read().split('\n')
        f.seek(0)
        first = f.read()
        if first == '':
            print('Contacts file is empty.')
            sys.exit()
    for item in contacts:
      
        contacts_list[item.split(', ')[0]] = item.split(', ')[1:]
    return contacts_list
    
def read_message(filename):
    with open(filename, 'r', encoding = 'utf-8') as template:
        template_content = template.read()
        template.seek(0)
        first = template.read()
        if first == '':
            print('Message file is empty.')
            sys.exit()
        content = template_content.split("</=\>")
        if len(content) > 0:
          print("=====Select a Message=====")
          for i, msg in enumerate(content):
            print("\t\n[" + str(i) + "] ")
          choice = int(input("> "))
          subject = content[choice].splitlines()[0].rstrip()
          template_content = content[choice]
          
        else: 
          subject = template_content.splitlines()[0].rstrip()
    return subject, '\n'.join(template_content.split('\n')[1:])

contacts = get_contacts('contacts.txt')
subject, template_content = read_message('message.txt')
print(contacts)
print(subject, template_content)

for contact_mail in list(contacts):
    msg = MIMEMultipart()
    msg_body = template_content.format(*tuple(contacts[contact_mail]))
    
    msg['From'] = address
    msg['To'] = contact_mail
    msg['Subject'] = subject

    msg.attach(MIMEText(msg_body, 'plain'))
    print(msg)
    mail.sendmail(address, contact_mail, msg.as_string())
    print("Sent Successfully!")

mail.quit()