import smtplib, email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from string import Template
import os, sys, time

address = 'rbansal365@outlook.com'
mail = smtplib.SMTP('smtp-mail.outlook.com', 587)
mail.ehlo()
mail.starttls()
mail.login(address, '085ma549x')
path = os.path.dirname(os.path.abspath(__file__))
if 'contacts.txt' not in os.listdir(path):
    os.mknod(path + '/contacts.txt')
elif 'message.txt' not in os.listdir(path):
    os.mknod(path + '/message.txt')
subject = ''

def add_contacts(filename):
    names = []
    emails = []
    with open(filename, mode = 'r', encoding = 'utf-8') as filee:
        contacts = filee.read().split('\n')
        filee.seek(0)
        first = filee.read()
        if first == '':
            print('ЖЖ Contacts file is empty. ЖЖ\n[Instructions in the README]')
            sys.exit()
    for item in contacts:
        new_contactList = item.split(', ')
        names.append(new_contactList[1])
        emails.append(new_contactList[0])
    return names, emails
    
def read_message(filename, sub):
    global subject
    with open(filename, 'r', encoding = 'utf-8') as template:
        template_content = template.read()
        template.seek(0)
        first = template.read()
        if first == '':
            print('ЖЖ Message file is empty. ЖЖ\n[Instructions in the README]')
            sys.exit()
        subject = template_content.splitlines()[0].rstrip()
    return template_content

names, emails = add_contacts(path + '/contacts.txt')
read_mail = read_message(path + '/message.txt', subject)
read_mail = '\n'.join(read_mail.split('\n')[1:])
if "{" + "0" + "}" not in read_mail:
    print('ЖЖ You do not have any name substitutions in the email. ЖЖ\n[Instructions in the README]')
    sys.exit()

if len(emails) > 1:
        customMessage = input('Is the message the same for everyone? [y/n] >> ')        
        if customMessage == 'y':
            pass
        elif customMessage == 'n':
            while True:
                customMessage = input('Whose message would you like to modify? [email] >> ')
                if customMessage not in emails:
                    print('Email is not in "contacts.txt".')
                    time.sleep(1)
                else:
                    print('Accessing Message...')
                    time.sleep(1)
                    print('[function not implemented]')

for name, email in zip(names, emails):
    msg = MIMEMultipart()
    new_mail = read_mail.format(name)
    
    msg['From'] = 'rbansal365@outlook.com'
    msg['To'] = email
    msg['Subject'] = subject

    msg.attach(MIMEText(new_mail, 'plain'))
    print(msg)
    mail.sendmail(address, email, msg.as_string())

mail.quit()


# To Do

#
#
#
#
#