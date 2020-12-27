print("Howdy!")
print("This is Compy ;) A compound Interest  and Simple Interest calculator.")



def comp():
    print("How many years will you be saving?")
    years = int(input("Enter Years:  "))
    print("How much money is currently in your account?")
    principal = float(input('Enter current amount in account:  '))
    print("How much money do you plan in investing?")
    monthly_invest = float(input('Enter amount:  '))
    print("What do you estimate will be your yearly interest of this investment?")
    interest = float(input('Enter interest in decimal numbers: (10% = 0.1):  '))
    print(' ')
    monthly_invest = monthly_invest * 12
    final_amount = 0
    for i in range(0, years):
        if final_amount == 0:
            final_amount = principal
        final_amount = (final_amount + monthly_invest) * (1 + interest)
    print("This is how much money you would have in your account after {} year:  ".format(years) + str(final_amount))


def simple_interest(): 
    
    p = int(input("What is the principal amount: "))
    t = int(input("What is the time period(in Years):  "))
    r = int(input("What is the rate of intrest"))

    si = (p * t * r)/100
      
    print('The Simple Interest is: ', si) 
      

while True:
    print("1.Compound Interest")
    print("2.Simple Interest")
    print("3.Exit")
    choice = int(input("Tell me what you have to calculate(1/2/3) :"))

    if(choice == 1):
        comp()
        ans = input("Do you want to calculate something else (y/n)").upper()
        if (ans == 'Y'):
            continue
        elif(ans == 'N'):
            print("Okay Byee!")
            break
        else:
            print("Sorry Wrong Choice")
            break
    elif(choice == 2):
        simple_interest()
        ans = input("Do you want to calculate something else (y/n)").upper()
        if (ans == 'Y'):
            continue
        elif(ans == 'N'):
            print("Okay Byee!")
            break
        else:
            print("Sorry Wrong Choice")
            break
    elif(choice == 3):
        print("Okay Byeee!")
        break
    else:
        print("Sorry you have selected wrong option, Try again")
