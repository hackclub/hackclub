---
name: "BMI applocation"
description: "createing a BMI application using App inventor"
author: "@Chrisrama"
---

Hello friends, today we will be using MIT APP INVENTOR, to create our BMI application. It an online platform that help you create android application using blocks to write the code, for this application we are doing, it will be simple that you don’t need any knowledge on how to do it. So you just need to go through each step and your app will be on  running. 

Body mass index (BMI) application an calculator that  measure the body fat (or weight category) based on height and weight of the person. It uses a very simple formula :


_(Your weight / your height )*2_


# Step 1

Now let build  our app. We will start off by visiting [MIT app inventor](http://appinventor.mit.edu/).Now inside the home page,right at the top next to the Logo of App inventor, click on the label *“CREATE APP!!”.* You will redirected to sign in using google; ![click here](https://cloud-k86tkribn.vercel.app/0screenshot_2020-09-30_at_12.31.43.png) even if it your first time here. Now select you google account you preferred and you will be directed to to the of the workplace.

Now if you not direct to name your project, right on the top click the selection _MY PROJECTS_ button. You then see that you have zero project. Now click on the select _create new Project_ which will ask you to give the name of your project and set name to "BMI". NOTE: if you prefer to used another name, you should not place a space between the word rather use an undercover ( _ ). 


What you see now if the user interfaces of how you app will look like on an android phone/tablet. On the viewer slide it way you will place all your components you need for your app from palette slide.if you would like to change the device such as to a tablet or a bigger phone , just click on the the phone size button and change to device .
Now let us start, we will use the palette slide to take components we need for our app. We will mostly use the components under user interfaces . 
1.
Now drag and drop |Label|  from the user interface ad place it inside the phone of the viewer slide. 

 Now drag and drop component name  TextBox . from the user interface and place it under the Label that is on the phone.

 Now drag and drop another Label inside the phone under the TextBox  drop on A).

 Now again drag and drop another TextBox and place it under the last Label we drop from B).

 Drag and drop component Button and place it under the TextBox from D).

Now will are going drag and drop component Button on top of the user Interface in the palette and drop it under the TextBox from D).

G)Now we are going to take let drag and drop another Label into the phone, so will are going to do this 4 times until we have 4 Label one under another.

#Step 2
Alright we now have all the component we need.
Now go over the slide name COMPONENTS and here you will find all the components will have place in our phone user interface. So we need to rename all our components.
 ⚠️To Rename our components you must click one component on the components slide and scroll done onto that slide and click on the button Rename next to delete button and give it a name.
This is how you should rename the component :
Label1            to     Label_Weight
TextBox1       to      Value_Weight
Label2          to      Label_height
TextBox2      to      Value_Weight
Button1         to      Button_calculate
Label3          to      text_BMI
Label4          to      BMI_value
Label5          to      text_diagnosis
Label6          to      Diagnosis_report

Now after this we are going to change the the display name on the screen of the phone to make sense to the user what each components does.


3.
Now after this we are going to change the the display name(text) that are display onto of each components on the phone. 
So to change the Text on our screen phone we are going to go over the slide name Properties. 
To change the text on the components click on the components you need to change the name insides the Components slide and go under Properties and look down for a box name Text and set under the box of text to the Text You we want the user to see. 
This are the text we are going to change 
Label_Weight Text  Property to      Type Weight 
Label_Height Text   Property to      type weight 
Button_calculate Text property to    Calculate BMI
Text_BMI Text property to     BMI value: 
BMI_value Text property to  nothing please delete the text in there ❗️and don’t add any text 
Text_Diagnosis Text property to      Diagnosis:
 Diagnosis_report Text property to      nothing please delete the text in there and don’t add any text.

Let change the property of our screen as how should the component look, you will try to centralise everything on the centre so  it look organised.
Go over the Components slide and click at the components Screen1 then go back t the Properties slide and set under AlignHorizontaly  property to Center:3 change Backgroundcolor property to the colour you prefer.
Your final screen of should look like this:

Now you app should be good looking now let go over the coding side for the app to actually work.

2. Step Town
Now let go to our code to write our code.
Over the Properties slide we find there is tow button one is DESIGN and Code, now click onto the CODE button , you will be directed to a a new page where we will make our code. Now on this page we find a black space this is where we will drag and drop our block for the code. On the left side we find Block slide where all our block will come from and the blank part it called the Viewer slide. Let start with our code. 
We are going to use the formula to calculate someone’s size category:
(Your weight / your height )*2
Now let create a procedure that does this, we will go onto the the Block slide and check down for the on the purple square that say Procedure and click onto it and you will see a group of block appear from there, now drag and drop the second block that say To Procedure result  on the viewer slide
. Now that our first part. Let go bak to the formula, we need to call (your weight / by your height * 2), so let take the division sign, go onto the Block and click onto the Maths block and you will see group of block, and one of it you will se a division block as a sign / drag and drop it inside the To procedure result block on the viewer, now it fit perfectly, let take a multiplication sign * , go back on the Blocks slide and click on the Maths Block and drag and drop at the bock that as * sign and drop it inside the second column of the division block ‘  /   ‘ like this :  ⚠️Note I use in this picture this the block with this sign   ^, you MUST NOT  do the same rather use the block with * sign.                         now let take the value from the Value_weight the user will input; go to the Block slide, find and click Value_weight Block, now inside the value_weight block we want to take text from the user so drag and drop the block Value_weight.Text and place it in the first puzzle of the block / (division),now let take as well The Value_height from the user, go back to the Block slide and click on the bock Value_height and scroll done for the block Value_Height.Text  and place it in the second puzzle of the block / (division)  like this:
Now we want to multiply it by 2, so go and click on the Block Math and take the first bock that has a 0  in it and place it after the multiplication sign your block , now click inside this block again to gauge the number to 2, your block should then be place in the remaining puzzle that allow the value to be multiply by 2. Now redone with our procedure that would allow us to know someone’s BMI value. 
Now let have a process that give the message to the user about they BMI Value and categories weight they are in. Now click on the Block Button_calculate  and look fist block When.Button_calculate.Click.do  and place it on the Viewer slide. Now go back on the Block slide and click on the Block BMI_value and drag and drop the block Set.BMI_value.text.to inside the the Button_calculate.  Now we see an error or a red cross on the block well no problem for that, it just informing us that we did not assign any value to that block. Go back on the Block slide and click on the block Procedure drag and drop the block Call.calculate inside the set.BMI_value.Text.to , now the cross line should go away. Let me explain what will happen here, so when the button_calculate is click the BMI_value ’s text will be the Value of the BMI, which was calculated by the Procedure Calculate. 
Let now categorise someone’s BMI value to the correct categories weight. So first there is a general rule to categorise someone’s weight here it is: 
_If the BMI value is less than 17 then the person is very underweight
If the BMI value is between 17 and 18.5 then the person is underWeight
If the BMI value is between 18.5 and 25 then the person has normal weight 
If the BMI value is between 25 and 30 then the person is over Weight
If the BMI value is between 30 and 35 then the person has Obesity 1
If the BMI value is between 35 and 40 then the person has obesity 2(severe)
If the BMI value is over 40 then the person has obesity 3 (horbid)_
So that what we are going to do now. Take not that the procedure To.calculate.do has the person’s BMI value. Now we are going to call.calculate it to compare it with these numbers. We will need the following, an the If statement so go back on the Block slide and click on the Control bock and drag and the third block of if statement as we well nee a lot of it and drop it in under the block we made in Button_calculate. Now you see there is like a a parameter small button like parameter inside the if statement, click on this block to expand our number of statement, as you click it an option of button will open up, now dead and drop Else if  statements so now let add 4 Else if statement one after another like this video. Now click on that parameter option again to close this option.
We now can start making the Block code according to the rule I explain how to categorise the BMI value. 
 Now go inside the Maths block and drag a block with an equal sign = and drop it  with the first If inside the If statement , now click inside the Procedure block drag and drop the Call.calculate block inside the first open puzzle from the = block.click on the = sign and set the sign < . Now let call the block Number , inside the Maths Block drag and drop the block that as a number 0 with inside the second puzzle of the = #. Now click on this number block to edit it and set it value to 17. Let go inside the Diagnosis_report drag and drop the block with set.Diagnosis_report.Text.to inside the then Statement. Now go to Text block and drag the first block that has only the “ “ inside it and place it in the set.diagnosis_report.text.to block. now click inside this block to set the text value. Now inside it write “Very underweight “. Now wrote the first code for the rule to set the categorise the person’s weight. now let go for the first Else if statement . 




⚠️THIS STEP WILL BE REPEATED LATER I WILL SHOW YOU HOW 
To compare values we will use the And operator, so go and click on the Logic Block and drag the block with And and place it on the Else if statement. Then go inside the Maths Block and drag and drop the code with the = sign and place it inside the first puzzle of the And block, then change it sign to <=  by clicking on the = sign. It should look like this:
 Now time to go to Math Block and drag and drop the block number With 0, and place it in the first puzzle of  the block we made. Now go to the Procedure block and drag the Call.Calculate block into the second puzzle. Now go on the Math block and drag the block which = sign and place it in the second puzzle of the of the And block and change it sign to <.
 Now go over the Procedure Block and drag the Call.calculate block inside the first puzzle. 
Now go over the Math block and drag the 0 block and place it in the second puzzle after. Now set the value for the first block number to 17 and the second to 18.5. 
Now go over the Diagnosis_report  Block and look and drag the block set.diagnosis_report.Text.to the then block that follow the block we wrote. 
Now go over the Text Block and drag the block with an “ “ and place it after the code set.Diagnosis.Text.to . Now click on that block to change the Value text To Under Weight . 
⚠️THIS STEP IS OVER
Now we just completed the second phase for the rule of categorising the BMI value. 
Let me explain what this code does, it compare the BMI value from procedure if is bigger than 17 and smaller than 18.5 then set the Diagnosis value to the to “Under weight”.
So we will repeat this step 4 times, but only the text value will change, now go back from where ⚠️THIS STEP WILL BE REAPEATED LATER, I WILL SHOW YOU HOW and do those step  until to ⚠️THIS STEP IS OVER  but remember to change the blue as you see in this picture above. So the change is 
     _Else If                18.5  and 25_
       _Then           Normal Weight_
      _Else if                25 and 30_
      _Then          Over Weight_
      _Else if                30 and 35_
      _Then           Obesity 1_
      _Else if                35 and 40_
      _Then           Obesity 2(severe)_

Now after you done your block of code should look like the above picture.So now there should be left with one else If statement .
Now go over the the Math Block and drag the block that has = sign and place it in the Else if statement.
Now set it sign to >= sign by clicking on the = sign.
Now go over to The Block Procedure  and drag the block Call.calculate and drop it in the first puzzle of the = sign block.   Now go back to the Math Block and drag the block number 0 and drop it in the second  puzzle of the block that has an >= then click on this Block number to change the zero to a value number 40. 
Now got over The Block Diagnosis_report and drag the block set.Diagnosis_reort.Text.to on the Then statement. Now go over the Text block and drag the first block that as an empty quote  “ ” and place it next to the block set.Diagnosis_repot.Text.to then click n that block to change the value in it to the text “Obesity 3 (horbid)”.

Now we are left with only Else statement, this we are going to provide if perhaps the user did not enter the correct value or may a letter or just nothing, staring the else statement will be responded. 
Now go over the block Diagnosis_report and drag  set.Diagnosis_repot.Text.to to the else statement . Then go in the Text Block and drag the empty “ ” block and place it with the set.Diagnosis_repot.Text.to then click on it and set the text to “invalid input” Then done. Check out if there is no warnings 
We done with on our code and app, time to upload it and download it on our phone. Click on the button on top that say Designer and and just look at the user interface how it is like. 
Now on the top menu click on the button Build then choose the second option, that will allow you to download it to your computer or phone. Now it will start to process and download . Note: you may receive a message stating that you, if you want to download this app, just accept it,  as this app is not identify by google play store yet as it not publish. Now when done it done install your application or run it on your phone. 
