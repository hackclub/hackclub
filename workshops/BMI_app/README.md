---
name: "BMI application"
description: "createing a BMI application using App inventor"
author: "@Chrisrama"
---

Hello friends, today we will be using MIT APP INVENTOR, to create our BMI application. It an online platform that help you create android application using blocks to write the code, for this application we are doing, it will be simple that you don’t need any knowledge on how to do it. So you just need to go through each step and your app will be on  running. 

Body mass index (BMI) application an calculator that  measure the body's BMI category  based on height and weight of the person. It uses a very simple formula :


`(Your weight / your height )^2 will be the formula`


# Step 1

Now let build  our app. We will start off by visiting [MIT app inventor](http://appinventor.mit.edu/).Now inside the home page,then right clik on the button Create Apps!

 ![click here](https://cloud-k86tkribn.vercel.app/0screenshot_2020-09-30_at_12.31.43.png)
 
 You will be redirected to sign in using google;even if it your first time here. Now select you account to sign in then you will be redirected straight on your project and Name it.
 
![rename](https://cloud-gwkuhl2zb.vercel.app/2screenshot_2020-10-14_at_14.46.30.png)

if you were not redirected to _Create New App Invetor project, right on the top_, click the `Start new Project` button. then name your to  *BMI*.`photo`
NOTE: if you prefer to used another name, you can, but you should not place a space between the words instead use an undercover ( _ ). 


What you see now an interfaces of how your app will look like on an android phone/tablet. On the _Viewer_ slide it way you will place all your components you need for your app which will come from  _Palette_ slide.

![img](https://cloud-jckwy1fjl.vercel.app/0screenshot_2020-09-30_at_14.12.06.png)

if you would like to change the device such as to a tablet or a bigger phone ,

`photo`

just click on the the `Phone size` in the Viewer  and change the device size you want, i will be using the default sizes.

Now let start,We will mostly use the components under `user interfaces` _Palette_. 

Now drag and drop `A Label` component from the `user interface` and place it inside the Phone/ _Viewer_ slide.

`photo how it should look like` 

Then drag and drop `I TextBox` component and place it under `Label` component on the phone.

`picture`

Then drag and drop another `A Label` component and place it under the `TextBox` component in the Phone.

`picture`

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


Label1     :     to      Label_Weight

TextBox1   :     to      Value_Weight

Label2     :     to      Label_height

TextBox2   :     to      Value_Weight

Button1    :     to      Button_calculate

Label3     :     to      text_BMI

Label4     :     to      BMI_value

Label5     :     to      text_diagnosis

Label6     :     to      Diagnosis_report

`![picture how it look]()`

Now after this we are going to change the Text that should appear on the Phone.
⚠️ Note to change the name you must click on a Components Name inside the `Components` then go over to the `Properties` Slide and scroll down and click inside the text block that ddispaly the default name on the screen
`picture of the defaulfname and how it to change it`
then name chane the text to the name we want.

This is the only textproperty we will change

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

Now your app should be good looking do some block!!!!

# Step 2


Now let go to our code to write our code.
On the Properties slide click on the button `Code` next to `Design`, you will be directed to a a new page where we will make our block. There are two slide here one is the Block where we will get our block from and Viewer where our block will be placed.
Remember, this formula is used to find the BMI value:

`(Your weight / your height )^2`

 Let then create a procedure for that, 
we will go into the the *Block* slide and click on the BLock `🟪Procedure` and drag the second bock that say `🟣To Procedure result do` and drop on the viewer slide
.
`picture of creating a procedure`


Let go bak to the formula, we need to call `(your weight /  your height) ^ 2`, so let take the division sign first, inside the  `🟦Maths` block drag and drop the Block ` / `sign


inside the block `🟣TO Procedure result do`

`picture`

inside the `🟦Math` block and drag the block with sign the ` ^ ` and  drop it inside the second puzzle of of the division block ` / `.

`poish`

Then click on `⬜️Value_weight` Block, scroll down to the block `🟢Value_weight.Text`

`picture of the value_weigth text`  

and place it in the first puzzle of the` / `(division) block,

`picture`

then click on the block `⬜️Value_height` and scroll done for the block `🟢Value_Height.Text`

`picture`

and place it in the second puzzle of the` / ` (division) block.


`picture`

 
 
Now we want to square,or raise to the power of 2, so in the `🟦Math` block and take the first bock that has ` 0️⃣ ` and place it inside the last puzzle block.

`picture`

then click inside the 0️⃣ block and set the value to  `2`.

`picture`

Now let process the BMI value from the `🟣Calculate procedure` and give an output that categorise each BMI value.

Now click inside  `🟧Button_calculate` block and look for block `🟠When Button_calculate.Click do`  and place it on the Viewer slide. 

`picture`

Inside the Block `⬜️BMI_value` and scroll down for the block `🟢Set BMI_value.text to` and drop it inside the `🟠When Button_calculate.click do` block.

`picture`

Now we receive an error ❌ on the block well no problem will fix that,we are just being informed that we did not assign any value to this block. Now click on the `🟪Procedure` drag the block `🟣Call calculate` join it with `🟢set BMI_value.Text to` block, now the cross line should go away.

Let me explain what will happen here, so when the `🟧button_calculate` is click the label of the BMI willbe change to the value of the BMI from the procedure `🟣calculate.` 
Let  then do a comparission base of the BMI value to someone's to how someone is diagonis, this sis exact this how the code will be written:

` `🟠If` the BMI value from `🟣call calcualte` is less than 17 then the person is "very underweight"`

` `🟠else If` the BMI value from `🟣call calcualte` is smaller than 17 and bigger than 18.5 then the person is "under Weight"`

` `🟠else If` the BMI value from `🟣call calcualte` is smaller 18.5 and bigger than 25 then the person has "normal weight"` 


` `🟠else If` the BMI value from `🟣call calcualte` is smaller 25 and bigger than 30 then the person has "over Weight"`


` `🟠else If` the BMI value from `🟣call calcualte` is smaller 30 and bigger than 35 then the person has "Obesity 1"`


` `🟠else If` the BMI value from `🟣call calcualte` is smaller 35 and bigger than 40 then the person has "obesity 2(severe)"`


` `🟠else` the BMI value from `🟣call calcualte` is over 40 then the person has "obesity 3 (horbid)"`


So that what we are going to do now. we will need an `🟠If` statement.
Click on the `🟧Control` bock and drag and the third block of `🟠if` statement 

`picture`
and drop it under `🟢set BMI_value.Text to` block.
`picture`

Now we see a small button like ☸️ paremeter  inside the if statement, click on this button to to add more else if statement.

`picture`

an option will open up that we could add more `🟠else if` statement, now inside this blocks drag `🟠else if` statement inside the group of block and on top of `🟠else` statements.

`picture`

You will then add 4 `🟠Else if` statement one after another.

`picture`

Now click on that parameter option again to close this option.

`picture`




We now can start making the Block code according to he code I show you how we will diagonis the person according to their BMI value. 
Inside the `🟦Maths` block and drag the block with equal sign `=` and join it with the first `If`statement,

`picture`
`picture`
then click on the `=` sign and seelect the sign to ` < `.

`picture`

then click inside the `🟪Procedure` block drag the `🟣Call calculate` block join it with the first open puzzle from the `=` block.

`picture`

Now let call the block Number , inside the `🟦Maths` Block drag the first block `0️⃣` and place it in the second puzzle block of the `=` block. 
`picture`

Now click on this number block and set it value to ` 17 `.

`picture`

Now go inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the first `🟠Then` Statement.

Then inside `🟥Text`  block and drag the frist block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

`picture`

now click inside the `" "` block to set the text value to `“Very underweight “`. Now we just finish categorise.



# ⚠️Loop start


To compare values we will use the `And` operator, so click on the `🟩Logic` Block and drag the block with ` And ` then place it on the second `🟠ELse if`statement.

`picture`

Then go inside the `🟦Maths` Block and drag ` = ` sign block and place it inside the first puzzle of the ` And ` block, then change it sign to ` >= `  by clicking on the ` = ` sign.

`picture`

`picture`
 
 Then click on the `🟪procdure` block and drag the `🟣Call Calculate` block into the first puzzle of the ` > ` sign block.

`picture`

Then click on `🟦Math` Block and drag the block number With ` 0️⃣ `, and place it in the second puzzle of ` > ` sign block we have. 

`picture`
then clock on the ` 0️⃣ ` block and change the number value to ` 17 `.

`picture`

Now go on the `🟦Math` block and drag the block which ` = `sign and place it in the second puzzle of the ` And ` block then click on ` = ` sign to change the sign to ` < `.
`picture`

Then on the `🟪Procedure` Block and drag the `🟣Call calculate` block inside the first puzzle of the ` < ` block.

`picture`


Now go over the `🟦Math` block and drag the 0️⃣ block and place it in the second puzzle of the ` < ` sign block.

`picture`

Now set the value of the block number to 18.5.

`picture`


Now go inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the  `🟠Then` Statement.

`picture`

Then inside `🟥Text`  block and drag the frist block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

`picture`

now click inside the `" "` block to set the text value to `“Under Weight “`.
 `picture`
# ⚠️Loop end


Now we just completed the second phase for the rule of categorising the BMI value. 
Let me explain what this code does, it compare the BMI value from procedure if is bigger than 17 and smaller than 18.5 then set the Diagnosis value to the to “Under weight”.
So we will repeat this step 4 times, but only the text value we will change, 
from where ⚠️Loop start to where ⚠️Loop end we will repeat that part but only chaging value from the nuber and the string
start again from ⚠️Loop start to  ⚠️Loop end step but chage the number value and string value.
 So it should look like this : 
 
     _Else If     call calculate  >       18.5  and     call calculate    <        25_
     
          _Then       set Diagonis_report.text to     "Normal Weight" _
          
     _Else if     call calculate  >        25  and      call calculate    <         30_
     
         _Then        set Diagonis_report.text to      "Over Weight"_
         
      _Else if   call calculate  >         30 and       call calculate    <         35_
      
         _Then        set Diagonis_report.text to        "Obesity 1"_
      
      _Else if   call calculate  >         35 and       call calculate    <          40_
      
        _Then        set Diagonis_report.text to         "Obesity 2(severe)"_
  
  
`picture` 


Now after you done your block of code should look like the above picture.

So now you should be left with one `🟠else if` and `🟠else` statement.

Now inside the  `🟦Math` Block and drag the ` = ` sign block and place it in the last  `🟠Else if` statement.
then set it sign to ` >= ` sign by clicking on the ` = ` sign.

`picture`

Then on the `🟪Procedure` Block and drag the `🟣Call calculate` block inside the first puzzle of the ` > ` block.


Then click on `🟦Math` Block and drag the block number With ` 0️⃣ `, and place it in the second puzzle of ` > ` sign block we have. 

`picture`
then clock on the ` 0️⃣ ` block and change the number value to ` 40 `.

`picture`

Now go inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the last  `🟠Then` Statement.
/////
`picture`

now click inside the `" "` block to set the text value to `“Under Weight “`.

`picture`

Then inside `🟥Text`  block and drag the frist block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

`picture`

now click inside the `" "` block to set the text value to `“Obesity 3(Horbid) “`.


Then for the last `🟠Else` statement,inside `⬜️Diagnosis_report` drag the block `🟢set Diagnosis_report.Text to` inside the last `🟠Else` Statement.

`picture` 

Then inside `🟥Text`  block and drag the frist block  ` " " `and join it with the `🟢set Diagnosis_report.Text to` block;

`picture`

now click inside the `" "` block to set the text value to `“Invalid input “`.

`picture`


`picture final`

Check out if there is no warnings 
We have done with our code and app, time to upload it and download it on our phone. 
if you were using your computer, go over o your phone on and open the app invetor on the web nd open your project, then follow this procees

Click on the button on top that say `Designer`.

`picture`

Now on the top menu click on the button `Build` then choose the second option,

`picture`

that will allow you to download it to your computer or phone. Now it will start to process and download . Note: you may receive a message stating that if you want to download this app, just accept it,  as this app is not identify by google play store yet as it not publish.

`picture`

Now when done it done install your application or run it on your phone.

