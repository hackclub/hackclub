#estimated yearly interest
print("Howdy!")
print("This is Compy ;) A compound interest calculator.")
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
