---
name: "BMI application"
description: "creating a BMI application using App inventor"
author: "@Chrisrama"
---

Hello friends, today we will be using MIT APP INVENTOR, to create our BMI application. It is an online platform that helps you create an android application using blocks to write the code of this application we are doing, it will be simple that you don’t need any knowledge on how to do it. So you just need to go through each step and your app will be on running. 

Body mass index (BMI) application is a calculator that measures the body's BMI index based on the height and weight of the person. It uses a very simple formula :


`(Your weight / your height )^2 will be the formula`


# Step 1

Now let's build the app. We will start by visiting [MIT app inventor](http://appinventor.mit.edu/). Now inside the home page, then right-click on the button Create Apps!

 ![click here on the create Apps button](https://cloud-k86tkribn.vercel.app/0screenshot_2020-09-30_at_12.31.43.png)
 
 You will be redirected to sign in using google; even if this your first time here. Now select your account to sign in then you will be redirected straight to your project then Name it.
 
![rename your project to BMI](https://cloud-gwkuhl2zb.vercel.app/2screenshot_2020-10-14_at_14.46.30.png)

if you were not redirected to _Create New App Inventor project_, right on the top, click the `Start new Project` button. then name your project  to  *BMI*


NOTE: if you prefer to use another name, you can, but you should not place a space between the words instead use an undercover ( _ ). 


What you see now is the interface of how your app will look like on an android phone/tablet. On the _Viewer_ slide it’s where you will place all the components you need for your app which will come from the _Palette_ slide.

![img of the project template](https://cloud-jckwy1fjl.vercel.app/0screenshot_2020-09-30_at_14.12.06.png)

if you would like to change the device such as to a tablet or a bigger phone,

![to change the phone size](https://cloud-kimhkb4fl.vercel.app/0screenshot_2020-09-30_at_12.48.09.png)

just click on the `Phone size` in the Viewer and change the device size you want, I will be using the default sizes.

Now let start, We will mostly use the components under `user interfaces` _Palette_. 

![img](https://cloud-jckwy1fjl.vercel.app/0screenshot_2020-09-30_at_14.12.06.png)

Now drag and drop the `Label` component from the `user interface` and place it inside the Phone/ _Viewer_ slide.

Then drag and drop the `TextBox` component and place it under the `Label` component on the phone.

Then drag and drop another ` Label` component and place it under the `TextBox` component in the Phone.

Then again drag and drop another `TextBox` and place it under the last `Label` we drop from.

Then Drag and drop component `Button` and place it under the `TextBox`.

Then drag and drop another `Label`  and place it under `Button`,

Then again drag and drop another `Label` and place it under `Label`

Then again drag and drop another `Label` and place it under `Label`

and last  drag and drop another `Label` and place it  under `Label`

your final screen should look like this

![img of the phone after all the components are in the viewer](https://cloud-19htxtacx.vercel.app/0screenshot_2020-10-14_at_18.15.06.png)

# Step 2

Alright, we now have all the components we need.

Now go over the slide name `COMPONENTS` So we can rename all our components, on the name we will use to create the block.
Note: To Rename our components you must click one component on the components slide and scroll down and click on the button `Rename` next to `Delete` then rename.

![](https://cloud-kocs0wuh7.vercel.app/0screenshot_2020-09-30_at_15.02.50.png)
 

This is how you should rename the component: 


Label1             :     to      Label_Weight

TextBox1           :     to      Value_Weight

Label2               :     to      Label_height

TextBox2           :     to      Value_Weight

Button1             :     to      Button_calculate

Label3               :     to      text_BMI

Label4               :     to      BMI_value

Label5               :     to      text_diagnosis

Label6               :     to      Diagnosis_report

![picture how it look](https://cloud-m29nx0q47.vercel.app/0screenshot_2020-09-30_at_15.45.27.png)

Now after this we are going to change the text that should appear on the Phone.
⚠️ Note: To change the name you must click on a Component inside the `Components` then go over to the `Properties` Slide and scroll down and click inside the text block that displays the default name on the screen, example:

![img](https://cloud-r87dy46vr.vercel.app/0screenshot_2020-09-30_at_16.20.02.png)

then change the text to the name we want.

This is the only text property we will change
---
Label_weight Text  Property       : to     " Type Weight" 

Labe_height Text   Property       : to      type weight"

Button_calulate Text property     : to      "Calculate BMI"

Text_BMI Text property            : to     " BMI value: "

BMI_value Text property           : to      "nothing please ❗️delete the text in there❗️and don’t add any text "

Text_Diagnosis Text property      : to     " Diagnosis:"

Diagnosis_report Text property    : to     " nothing please delete the text in there and don’t add any text."

---

![](https://cloud-kocs0wuh7.vercel.app/1screenshot_2020-10-20_at_17.40.21.png)

Let's change the property of our Screen as to how the component is placed, so we are going to centralize everything.
Click on `-Screen` components then click on the Property *Align Horizontal* and set it to {central:3}

![](https://cloud-19htxtacx.vercel.app/2screenshot_2020-10-14_at_14.48.15.png)

then click on the property Background color to set the background color you prefer.

![](https://cloud-j9tjuzlmd.vercel.app/3screenshot_2020-10-14_at_18.16.21.png)

Your final screen should look something like this:

![](https://cloud-kocs0wuh7.vercel.app/2screenshot_2020-10-20_at_17.49.43.png)

Now your app should be good-looking!!!!

# Step 2


Now let go to our code to write our code.
On the Properties slide click on the button `Code` next to `Design`, you will be directed to a new page where we will make our block. There are two slides here one is the Block where we will get our block from and Viewer where our block will be placed.
Remember, this formula is used to find the BMI value:

`(Your weight / your height )^2`

 Let then create a procedure for that, 
we will go into the *Block* slide and click on the BLock `🟪Procedure` and drag the second block that says `🟣To Procedure result do` and drop on the viewer slide.

![](https://cloud-kocs0wuh7.vercel.app/3screenshot_2020-10-20_at_17.53.07.png)

Let go back to the formula, we need to call `(your weight /  your height) ^ 2`, so let take the division sign first, inside the  `🟦Maths` block drag and drop the Block ` / `sign
inside the block `🟣TO Procedure result do`
`picture`
![](https://cloud-nit6a9lnh.vercel.app/0screenshot_2020-10-01_at_18.33.15-1.png)

inside the `🟦Math` block and drag the block with the sign the ` ^ ` and drop it inside the second puzzle of the division block ` / `.

![](https://cloud-kocs0wuh7.vercel.app/5screenshot_2020-10-01_at_18.31.09.png)
![](https://cloud-9gy6fkkle.vercel.app/0screenshot_2020-10-01_at_18.33.32.png)

Then click on `⬜️Value_weight` Block, scroll down to the block `🟢Value_weight.Text`

![](https://cloud-kocs0wuh7.vercel.app/6screenshot_2020-10-01_at_18.36.04.png)

and place it in the first puzzle of the` / `(division) block,

![](https://cloud-ojz2muccs.vercel.app/0screenshot_2020-10-01_at_18.35.18.png)

then click on the block `⬜️Value_height` and scroll done for the block `🟢Value_Height. Text`

![](https://cloud-kocs0wuh7.vercel.app/4screenshot_2020-10-20_at_17.56.00.png)

and place it in the second puzzle of the` / ` (division) block.

![](https://cloud-hyvrauhc9.vercel.app/0screenshot_2020-10-01_at_18.36.32.png)

 
Now we want to square, or raise to the power of 2, so in the `🟦Math` block and take the first block that has ` 0️⃣ ` and place it inside the last puzzle block.

![](https://cloud-kocs0wuh7.vercel.app/4screenshot_2020-10-20_at_17.56.00.png)

then click inside the 0️⃣ blocks and set the value to  `2`.

![](https://cloud-2ye0x24ow.vercel.app/0screenshot_2020-10-01_at_18.37.11.png)

Now let us process the BMI value from the `🟣Calculate procedure` and give an output base on the BMI value.

Now click inside the `🟧Button_calculate` block and look for block `🟠When Button_calculate. Click do`  and place it on the Viewer slide. 

![](https://cloud-5ms7s2zfs.vercel.app/0screenshot_2020-10-01_at_18.38.07.png)

Inside the Block `⬜️BMI_value` and scroll down for the block `🟢Set BMI_value.text to` and drop it inside the `🟠When Button_calculate.click do` block.

![img](https://cloud-i8w9tju86.vercel.app/0screenshot_2020-10-01_at_18.40.46.png)
![](https://cloud-fj058t1ie.vercel.app/0screenshot_2020-10-01_at_18.41.25.png)

Now we receive an error on the block(❌) well no problem will fix that, we are just being informed that we did not assign any value to this block.

![](https://cloud-ak6482qx9.vercel.app/0screenshot_2020-10-01_at_18.42.26.png)

Now click on the `🟪Procedure` drag the block `🟣Call calculate` join it with `🟢set BMI_value. Text to` block, now the cross line should go away.

![](https://cloud-gi8v12qi0.vercel.app/0screenshot_2020-10-01_at_18.43.04.png)

Let me explain what will happen here, so when the `🟧button_calculate` is clicked the label of the BMI will be changed to the value of the BMI from the procedure `🟣calculate.` 
Let  then do a comparison base of the BMI value to someone's to how someone is diagnosed with, this is how the code will be written:

` `🟠If` the BMI value from `🟣call calculate` is less than 17 then the person is "very underweight"`

` `🟠else If` the BMI value from `🟣call calculate` is smaller than 17 and bigger than 18.5 then the person is "underWeight"`

` `🟠else If` the BMI value from `🟣call calculate` is smaller 18.5 and bigger than 25 then the person has "normal weight"` 


` `🟠else If` the BMI value from `🟣call calculate` is smaller 25 and bigger than 30 then the person has "over Weight"`


` `🟠else If` the BMI value from `🟣call calculate` is smaller 30 and bigger than 35 then the person has "Obesity 1"`


` `🟠else If` the BMI value from `🟣call calculate` is smaller 35 and bigger than 40 then the person has "obesity 2(severe)"`


` `🟠else` the BMI value from `🟣call calculate` is over 40 then the person has "obesity 3 (morbid)"`


So that what we are going to do now. we will need an `🟠If` statement.
Click on the `🟧Control` bock and drag and the third block of the `🟠if` statement 

![](https://cloud-dcik8k9rd.vercel.app/0screenshot_2020-10-01_at_18.44.15.png)

and drop it under `🟢set BMI_value.Text to` block.

![](https://cloud-jpm75ondl.vercel.app/0screenshot_2020-10-01_at_18.47.04.png)

Now we see a small button like ☸️ parameter inside the if statement, click on this button to add more else if statement.

![](https://cloud-83r6bcwxc.vercel.app/0screenshot_2020-10-01_at_18.44.46.png)

an option will open up that we could add more `🟠else if` statement, now inside this blocks drag `🟠else if` statement inside the group of the block and on top of `🟠else` statements.

![gif](https://cloud-kocs0wuh7.vercel.app/7elseif.gif)

You will then add 4 `🟠Else If` statement one after another.

![elseIf](https://user-images.githubusercontent.com/62946196/96993234-4af0bc80-152b-11eb-9664-a9b86d87f2b9.gif)


Now click on that parameter option again to close this option. In total, you will have 1`🟠If` 5`🟠Else If` and 1 `🟠Else`. MAKE SURE THAT ELSE, GO BACK ON THAT PARAMETER AND ADD MORE ELSE IF STATEMENT OR TAKEOUT SOME.

![](https://cloud-kocs0wuh7.vercel.app/8screenshot_2020-10-20_at_18.34.44.png)


We now can start making the Block code according to the code. I will show you how we will diagnosis the person according to their BMI value. 
Inside the `🟦Maths` block and drag the block with equal sign `=` and join it with the first `If`statement,

![](https://cloud-mgwd8r6yh.vercel.app/0screenshot_2020-10-01_at_18.48.42.png)
![](https://cloud-2vlvvpj66.vercel.app/0screenshot_2020-10-01_at_18.49.07.png)

then click on the `=` sign and select the sign to ` <= `.

![](https://cloud-1m4i76sm5.vercel.app/0screenshot_2020-10-01_at_20.38.16.png)

then click inside the `🟪Procedure` block drag the `🟣Call calculate` block join it with the first open puzzle from the `=` block.

![](https://cloud-nxqu8s2ac.vercel.app/0screenshot_2020-10-01_at_18.49.35.png)

Now let call the block Number, inside the `🟦Maths` Block drag the first block `0️⃣` and place it in the second puzzle block of the `<=` block. 

![](https://cloud-67nd751a7.vercel.app/0screenshot_2020-10-01_at_18.32.07.png)

Now click on this number block and set its value to ` 17 `.

![](https://cloud-o9dbl5vy1.vercel.app/0screenshot_2020-10-01_at_18.50.29.png)

Now go inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the first `🟠Then` Statement.
`picture`
![](https://cloud-kocs0wuh7.vercel.app/9screenshot_2020-10-01_at_18.40.46.png)
![](https://cloud-5xezqqtxs.vercel.app/0screenshot_2020-10-01_at_18.51.39.png)

Then inside `🟥Text`  block and drag the first block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

![](https://cloud-n2y79sumo.vercel.app/0screenshot_2020-10-01_at_18.52.15.png)
![](https://cloud-n2y79sumo.vercel.app/1screenshot_2020-10-01_at_18.53.04.png)

now click inside the `" "` block to set the text value to `“Very underweight “`. Now we just finish categorize.

![](https://cloud-36i8guq34.vercel.app/0screenshot_2020-10-01_at_18.53.49.png)


# ⚠️Loop start


To compare values we will use the `And` operator, so click on the `🟩Logic` Block and drag the block with ` And ` then place it on the first `🟠ELse if`statement.

![](https://cloud-36i8guq34.vercel.app/1screenshot_2020-10-01_at_20.39.00.png)
![](https://cloud-36i8guq34.vercel.app/4screenshot_2020-10-20_at_19.09.20.png)

Then go inside the `🟦Maths` Block and drag ` = ` sign block and place it inside the first puzzle of the ` And ` block, then change its sign to ` >= `  by clicking on the ` = ` sign

![](https://cloud-19htxtacx.vercel.app/3screenshot_2020-10-14_at_15.49.26.png)

![](https://cloud-36i8guq34.vercel.app/2screenshot_2020-10-01_at_20.39.33.png)

![](https://cloud-36i8guq34.vercel.app/3screenshot_2020-10-20_at_19.05.36.png)
 
 Then click on the `🟪procedure` block and drag the `🟣Call Calculate` block into the first puzzle of the ` > ` sign block.

![](https://cloud-ak6482qx9.vercel.app/0screenshot_2020-10-01_at_18.42.26.png)

![](https://cloud-36i8guq34.vercel.app/5screenshot_2020-10-20_at_19.06.12.png)

Then click on `🟦Math` Block and drag the block number With ` 0️⃣ `, and place it in the second puzzle of ` > ` sign block we have. 

![](https://cloud-67nd751a7.vercel.app/0screenshot_2020-10-01_at_18.32.07.png)

then clock on the ` 0️⃣ ` block and change the number value to ` 17 `.

![](https://cloud-36i8guq34.vercel.app/6screenshot_2020-10-20_at_19.06.34.png)

Now go on the `🟦Math` block and drag the block which ` = `sign and place it in the second puzzle of the ` And ` block then click on ` = ` sign to change the sign to ` < `.

![](https://cloud-mgwd8r6yh.vercel.app/0screenshot_2020-10-01_at_18.48.42.png)

![](https://cloud-36i8guq34.vercel.app/7screenshot_2020-10-01_at_20.41.41.png)

Then on the `🟪Procedure` Block and drag the `🟣Call calculate` block inside the first puzzle of the ` < ` block.

![](https://cloud-36i8guq34.vercel.app/8screenshot_2020-10-01_at_20.42.06.png)

Now go over the `🟦Math` block and drag the 0️⃣ block and place it in the second puzzle of the ` < ` sign block.

Now set the value of the block number to 18.5.

![](https://cloud-e8m9xzhx6.vercel.app/0screenshot_2020-10-01_at_20.51.31.png)

Now go inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the  `🟠Then` Statement.

![](https://cloud-6yznwxnfi.vercel.app/0screenshot_2020-10-01_at_18.51.16.png)
![](https://cloud-5xezqqtxs.vercel.app/0screenshot_2020-10-01_at_18.51.39.png)

Then inside `🟥Text`  block and drag the first block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

1[](https://cloud-n2y79sumo.vercel.app/0screenshot_2020-10-01_at_18.52.15.png)
![](https://cloud-n2y79sumo.vercel.app/1screenshot_2020-10-01_at_18.53.04.png)

now click inside the `" "` block to set the text value to `“Underweight “`

 ![](https://cloud-e8m9xzhx6.vercel.app/1screenshot_2020-10-01_at_20.47.36.png)

# ⚠️Loop end


Now we just completed the second phase for the rule of categorizing the BMI value.

Let me explain what this code does, it compares the BMI value from the procedure if is bigger than 17 and smaller than 18.5 then sets the Diagnosis value to “Underweight”.

So we will repeat this step 4 times, but only the text value we will change, 
from where ⚠️Loop starts to where ⚠️Loop end we will repeat that part but only changing the value from the number and the string.
start again from ⚠️Loop start to  ⚠️Loop end step but change the number value and string value.
 So it should look like this : 
 
     _Else If     call calculate  >       18.5  and     call calculate    <        25_
     
          _Then       set Diagonis_report.text to     "Normal Weight" _
          
     _Else if     call calculate  >        25  and      call calculate    <         30_
     
         _Then        set Diagonis_report.text to      "Over Weight"_
         
      _Else if   call calculate  >         30 and       call calculate    <         35_
      
         _Then        set Diagonis_report.text to        "Obesity 1"_
      
      _Else if   call calculate  >         35 and       call calculate    <          40_
      
        _Then        set Diagonis_report.text to         "Obesity 2(severe)"_
  
  
![](https://cloud-e8m9xzhx6.vercel.app/2screenshot_2020-10-01_at_21.04.18.png)


Now after you are done your block of code should look like the above picture.

So now you should be left with one `🟠else if` and `🟠else` statement.

![](https://cloud-e8m9xzhx6.vercel.app/3screenshot_2020-10-01_at_18.47.04.png)

Now inside the  `🟦Math` Block and drag the ` = ` sign block and place it in the last  `🟠Else if` statement.

![](https://cloud-e8m9xzhx6.vercel.app/4screenshot_2020-10-20_at_17.56.00.png)

then set it sign to ` >= ` sign by clicking on the ` = ` sign.

![](https://cloud-e8m9xzhx6.vercel.app/8screenshot_2020-10-20_at_19.47.26.png)
![](https://cloud-e8m9xzhx6.vercel.app/6screenshot_2020-10-20_at_19.46.35.png)

Then on the `🟪Procedure` Block and drag the `🟣Call calculate` block inside the first puzzle of the ` > ` block.


Then click on `🟦Math` Block and drag the block number With ` 0️⃣ `, and place it in the second puzzle of ` > ` sign block we have. 

![](https://cloud-e8m9xzhx6.vercel.app/7screenshot_2020-10-20_at_19.46.54.png)

then clock on the ` 0️⃣ ` block and change the number value to ` 40 `.

![](https://cloud-e8m9xzhx6.vercel.app/9screenshot_2020-10-20_at_19.47.50.png)

Now go inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the last  `🟠Then` Statement.

![](https://cloud-p9r7ltsh3.vercel.app/0screenshot_2020-10-20_at_19.48.22.png)

Then inside `🟥Text`  block and drag the first block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

now click inside the `" "` block to set the text value to `“Obesity 3(Horbid) “`.

![](https://cloud-p9r7ltsh3.vercel.app/2screenshot_2020-10-20_at_19.50.01.png)

Then for the last `🟠Else` statement,inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the last `🟠Else` Statement.

![](https://cloud-p9r7ltsh3.vercel.app/2screenshot_2020-10-20_at_19.50.01.png)

Then inside `🟥Text`  block and drag the first block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

now click inside the `" "` block to set the text value to `“Invalid input “`.

![](https://cloud-p9r7ltsh3.vercel.app/3screenshot_2020-10-20_at_19.50.38.png)


![](https://cloud-e8m9xzhx6.vercel.app/5screenshot_2020-09-30_at_12.30.06.png)

Check out if there are no warnings 


We have done with our code and app, time to upload it and download it on our phone. 
if you were using your computer, go over o your phone on and open the app inventor on the web then open your project, then follow this process

Click on the button on top that says `Designer`.

![](https://cloud-a809dlexh.vercel.app/0screenshot_2020-10-01_at_18.25.21.png)

Now on the top menu click on the button `Build` then choose the second option,

![](https://cloud-a809dlexh.vercel.app/1screenshot_2020-10-01_at_21.05.36.png)

that will allow you to download it to your computer or phone. Now it will start to process and download. Note: you may receive a message stating that if you want to download this app, just accept it,  as this app is not identified by google play store yet as it is not published.

![](https://cloud-a809dlexh.vercel.app/2screenshot_2020-10-01_at_21.15.54.png)

Now when it is done install your application or run it on your phone.

# Well Done!!!!!


# Challenge 

-

-


-


