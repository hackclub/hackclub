---
name: "BMI application"
description: "createing a BMI application using App inventor"
author: "@Chrisrama"
---

Hello friends, today we will be using MIT APP INVENTOR, to create our BMI application. It an online platform that help you create android application using blocks to write the code, for this application we are doing, it will be simple that you don’t need any knowledge on how to do it. So you just need to go through each step and your app will be on  running. 

Body mass index (BMI) application an calculator that  measure the body's BMI category  based on height and weight of the person. It uses a very simple formula :


`(Your weight / your height )^2 will be the formula`


# Step 1

Now let build  our app. We will start off by visiting [MIT app inventor](http://appinventor.mit.edu/).Now inside the home page,then right clik on the button ---Create Apps!---
 ![click here](https://cloud-k86tkribn.vercel.app/0screenshot_2020-09-30_at_12.31.43.png)
 
 You will redirected to sign in using google;even if it your first time here. Now select you account to sign in then you will be redirected straight on your project and Name it.
![rename](https://cloud-gwkuhl2zb.vercel.app/2screenshot_2020-10-14_at_14.46.30.png)
if you were not redirected to _Create New App Invetor project, right on the top_, click the `Start new Project` button. then name your to  *BMI*.`photo`
NOTE: if you prefer to used another name, you can, but you should not place a space between the words instead use an undercover ( _ ). 


What you see now an interfaces of how your app will look like on an android phone/tablet. On the _Viewer_ slide it way you will place all your components you need for your app which will come from  _Palette_ slide.![img](https://cloud-jckwy1fjl.vercel.app/0screenshot_2020-09-30_at_14.12.06.png)

if you would like to change the device such as to a tablet or a bigger phone ,`photo`
just click on the the `Phone size` in the Viewer  and change the device size you want, i will be using the default sizes.

Now let start,We will mostly use the components under `user interfaces` _Palette_. 

Now drag and drop `A Label` component from the `user interface` and place it inside the Phone/ _Viewer_ slide.`photo how it should look like` 

Then drag and drop `I TextBox` component and place it under `Label` component on the phone.

Then drag and drop another `A Label` component and place it under the `TextBox` component in the Phone.

Then again drag and drop another `TextBox` and place it under the last `Label` we drop from.

Then Drag and drop component `Button` and place it under the `TextBox`.

Then drag and drop another `Label`  and place it under `Button`,
Then again drag and drop another `Label` and place it under `Label`
Then again drag and drop another `Label` and place it under `Label`
and last  drag and drop another `Label` and place it  under `Label`
`the final picture when unmaned`

#Step 2

Alright we now have all the component we need.
Now go over the slide name COMPONENTS So we can rename all our components, on the name we will use to create the block.
Note: To Rename our components you must click one component on the components slide and scroll done and click on the button `Rename` next to `Delete``![rename]()` 
 
 
 then Rename.

This is how you should rename the component :
-------------
Label1     :     to      Label_Weight
TextBox1   :     to      Value_Weight
Label2     :     to      Label_height
TextBox2   :     to      Value_Weight
Button1    :     to      Button_calculate
Label3     :     to      text_BMI
Label4     :     to      BMI_value
Label5     :     to      text_diagnosis
Label6     :     to      Diagnosis_report
------------
`![picture how it look]()`

Now after this we are going to change the Text that should appear on the Phone.
⚠️ Note to change the name you must click on a Components Name inside the `Components` then go over to the `Properties` Slide and scroll down and click inside the text block that ddispaly the default name on the screen
`picture of the defaulfname and how it to change it`
then name chane the text to the name we want.

This is the only textproperty we will change
-------------------------------
Label_weight Text  Property   :to      Type Weight 
Labe_height Text   Property   :to      type weight 
Button_calulate Text property :to      Calculate BMI
Text_BMI Text property        :to      BMI value: 
BMI_value Text property       :to      nothing please ❗️delete the text in there❗️and don’t add any text 
Text_Diagnosis Text property  :to      Diagnosis:
Diagnosis_report Text property:to      nothing please delete the text in there and don’t add any text.
-------------------------------
`picture of how it will look likebefore it centred`
Let change the property of our Screen as to how the component be placed, so we are going to centralised everything.
click on `-Screen` components then click on the Property *AlignHorizontal* and set it to {central:3}

`picture for the centralised `


then click on property Backgroundcolor  to set the bakground clour you prefare.
`pcsanother for background`
Your final screen of should look something like this:
`pics of the final`

Now you app should be good looking do some block!!!!

# Step 2


Now let go to our code to write our code.
Over the Properties slide click on the button `Code` next to `Design`, you will be directed to a a new page where we will make our block. There are two slide here one is the Block where we will get our block from and Viewer where our block will be placed.
Remember, this formula is used to find the BMI value:

`(Your weight / your height )^2`

 Let then create a procedure that does this, 
we will go onto the the *Block* slide and click on the BLock `🟪Procedure` and drag and drop the second bock that say `To Procedure result do`  on the viewer slide
.
`picture of creating a procedure`


Let go bak to the formula, we need to call `(your weight /  your height) ^ 2`, so let take the division sign, clickon the  `🟦Maths` 
`pctirse`
and drag and drop the Block with a ` / ` sign into the `TO Procedure result do`
`picture`
Go back to the `🟦Math` block and drag and drop the block with sign  the ` ^ `  drop it inside the second puzzle of of the division block ` / `.

`poish`

now let take the value from the Value_weight the user will input; go to the Block slide, find and click Value_weight Block, now inside the value_weight block we want to take text from the user so drag and drop the block Value_weight.Text and place it in the first puzzle of the block / (division),now let take as well The Value_height from the user, go back to the Block slide and click on the bock Value_height and scroll done for the block Value_Height.Text  and place it in the second puzzle of the block / (division)  like this:
Now we want to multiply it by 2, so go and click on the Block Math and take the first bock that has a 0  in it and place it after the multiplication sign your block , now click inside this block again to gauge the number to 2, your block should then be place in the remaining puzzle that allow the value to be multiply by 2. Now redone with our procedure that would allow us to know someone’s BMI value. 
Now let have a process that give the message to the user about they BMI Value and categories weight they are in. Now click on the Block Button_calculate  and look fist block When.Button_calculate.Click.do  and place it on the Viewer slide. Now go back on the Block slide and click on the Block BMI_value and drag and drop the block Set.BMI_value.text.to inside the the Button_calculate.  Now we see an error or a red cross on the block well no problem for that, it just informing us that we did not assign any value to that block. Go back on the Block slide and click on the block Procedure drag and drop the block Call.calculate inside the set.BMI_value.Text.to , now the cross line should go away. Let me explain what will happen here, so when the button_calculate is click the BMI_value ’s text will be the Value of the BMI, which was calculated by the Procedure Calculate. 
Let now categorise someone’s BMI value to the correct categories weight. So first there is a general rule to categorise someone’s weight here it is: 

`_If the BMI value is less than 17 then the person is very underweight`


`If the BMI value is between 17 and 18.5 then the person is underWeight`


`If the BMI value is between 18.5 and 25 then the person has normal weight` 


`If the BMI value is between 25 and 30 then the person is over Weight`


`If the BMI value is between 30 and 35 then the person has Obesity 1`


`If the BMI value is between 35 and 40 then the person has obesity 2(severe)`


`If the BMI value is over 40 then the person has obesity 3 (horbid)_`


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
