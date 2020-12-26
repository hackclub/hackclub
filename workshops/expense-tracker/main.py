import json
from datetime import datetime
import pandas

def write_json(data, filename='expenses.json'): 
    with open(filename,'w') as f: 
        json.dump(data, f, indent=4) 



expdic = {"Expenses":[]}
dic = {}
print("Howdy! Exp-Track here ;)")

choice = input("Input Y to add a purchase, To view all Expenses, Press V, else press E to exit:  ").upper()
if choice == "V":
        with open("expenses.json") as f:
            data = json.load(f)
            temp = data["Expenses"]
            print(pandas.json_normalize(temp))
                
while (choice == "Y"):
    purchase = str(input("Purchase Name:  "))
    price = int(input("Price:  "))
    time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    dic["Your Purchase"] = purchase
    dic["Price"] = price
    dic["Time"] = time
    expdic["Expenses"].append(dic)
    choice = input("To input another purchase, press Y, To view all Expenses, Press V, else press E to exit: ").upper()
    if choice == "E":
        with open("expenses.json") as f:
            data = json.load(f)
            temp = data["Expenses"]
            temp.append(dic)
            write_json(data)
        print("Bye, See you again")
        break
    if choice == "V":
        with open("expenses.json") as f:
            data = json.load(f)
            temp = data["Expenses"]
            temp.append(dic)
            write_json(data)
            print(pandas.json_normalize(temp))
        break
