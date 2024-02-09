---
name: Android Countdown App
description: Create an Android Native App to schedule a date and see how many days/hours/minutes/seconds until that time
author: @KaiDevrim
---

# Create a Countdown Clock

## Part 0: Introduction

Creating an android app is a heavily under appreciated area of software development for most people, but is actually very fun to do. In this workshop you will learn to create an Android app that will allow the user to select a date and time and the app will calculate the time until the chosen date! A preview of the app is shown below.

![App Demo](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/demo.gif)

Here is the [final code for the project](https://github.com/KaiDevrim/countdown).
It is a very simple app that should only take about 45 minutes to create, and has a lot of opportunity to be extended on further! So without further ado, lets begin the journey into the wonderful world of Android App development!

## Part 1: Setup

The most important tool to create Android apps is to install Android Studio. Android Studio is an Integrated Developer Environment (IDE) that has all the bells and whistles to develop Android apps. It is a very simple install process. First off, go to [the website](https://developer.android.com/studio/), the click on the `Download Android Studio` button, as of the time of writing, the latest version is `Flamingo`, but just about any version before or after is just fine. Then scroll down past all the legal information, click the checkbox, and press download. Then install it as you would any other software on your computer.

![Android Studio website](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230608-jvjx.jpeg)

![Android Studio download](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230608-jvkx.jpeg)

During the setup process it will ask you to agree to some licenses, just click on each one and hit agree. Then that should install Android Studio and all of its required components.

Finally, we need to setup an Android device to test on. Thankfully you don't need to own or buy one to test out your app as Android Studio comes with an Android emulator built-in to it. We just need to select a device and operating system version to create one.

To get started, click on the three dots at the top right corner, click on `Virtual Device Manager`, then in the top left corner click on `Create Device`. Then select any device, I tend to choose the `Pixel 6` as it isn't too new and has that stable feel to it. Then you will want to select the `System Image`, for this just choose the latest non-beta version, which as of the time of writing is `Tiramisu` at the `API Level: 33`. After this you will get to a details screen and just review your settings and click on `Finish`. Now you have a complete Android emulator to use!

![Select Pixel 6](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nnfo.png)
![Download and Select Tiramisu](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nnga.png)
![Finialize details](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nnjf.png)
## Part 2: Creating the Project

This is where the fun really begins! On the main Android Studio screen, click on the `New Project` -> `Empty Activity`. There are a lot of other boilerplate options, but are app doesn't require that many special features, so the Empty Activity is perfect for us.

![Choose the Empty Activity](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230608-iftm.jpeg)

Then you will be presented with a screen full of options, just choose a nice name for your app, since this is a countdown app I just called mine `Countdown`. Then the package name should be your website backwards, like for me it would be `tech.devrim`, then at the end should be the name of the app, so the package name for me is `tech.devrim.countdown`. Don't worry too much about this if you have a website or don't, its more of a style for businesses.

Then choose the location of your project, anywhere is fine.

Now for the `Minimum SDK` make sure to change it to `API 26 ("Oreo"; Android 8.0)` as we use some date/time features only available starting in that version.

![Change the API to 26](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230608-iftm.png)

And finally leave the `Build Configuration Language` as `Kotlin DSL`. This basically just defines the syntax for how your app's properties and build file is. We thankfully don't need to deal with anything other than the main view of the app's code itself.
![The last steps in the app's detail process](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230608-oeqc.png)

Finally click finish and your app will start being generated. Wait for all the tasks at the bottom to finish and then at the top, make sure to select your `Pixel 6` device to test on.

This is generally what the screen you should land on and make wait for the tasks at the bottom to finish. If you for some reason don't see the same code I do, make sure to have the `MainActivity.kt` file under the folder with your package name.

![Main screen with some code](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nhsu.png)
![The tasks you need to wait to finish](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nhub.png)
![Select Pixel 6](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nnog.png)

Then click on the `Run` button at the top in between the `app` and the bug icon. This should compile, build, and show your app either on the side or in a new window.

![The example app running in a virtual android device](https://raw.githubusercontent.com/devrimtech/devrim.tech/master/public/androidworkshop/SCR-20230531-nnys.jpeg)

## Step 3: Make the app

Finally, you should be on a screen similar to this, with no tasks at the bottom and your device selected at the top. We can start building the app and learning Kotlin and Jetpack Compose!

It is good to understand how and what the app is already doing, especially line by line. The package name at the top, which in my case is `package tech.kaidevrim.countdownhc` is defining which project the app is a part of. Next you have some `import` statements, some of the are Kotlin imports, some are Java imports, others are imports from other files like your theme. Next up you have the class which encapsulates just about everything in your file and if you notice it inherits from the `ComponentActivity()` class to provide various UI functions. Inside of this class you have a `setContent {}` block, which is a Kotlin [lambda](https://kotlinlang.org/docs/lambdas.html) which is basically a function that is passed as a parameter to another function. This is where all the UI code for your app goes. If you notice, there is a `Text("Hello World!")` inside the brackets. This is a Compose function that tells the app to display the text "Hello World!" in the app. Finally, you have the `@Preview` annotation which tells Android Studio to show the app in the preview window.

```kotlin
package tech.devrim.countdown

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import tech.devrim.countdown.ui.theme.CountdownTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CountdownTheme {
                // A surface container using the 'background' color from the theme
                Text("Hello World!")
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    CountdownTheme {
        Text("Hello World!")
    }
}
```

Now we can start making the app our own. First off, let's change the `Text("Hello World!")` to `Text("Countdown")`. Then you should see the text in the preview window change to "Countdown".

Now let's make a function that will calculate the time left until a certain date. This is where we will learn about Kotlin functions and variables.

First off, let's make a variable that will hold the amount of days left until the specified date. In Kotlin, you can make a variable by using the `var` keyword which makes it able to be changed. Then you can name it, I named mine `daysDiff`. Then you need to specify the type of the variable, which in this case is `Int`. Then you can assign a value to it with the `=` operator. I set mine to `0`, as there is no selected date to countdown to.

```kotlin
var daysDiff: Int = 0
```

Next, we need to create a function to calculate the difference between two dates, and if the "future" date has already elapsed to show a warning. To create a function in Kotlin, just use the `fun` keyword followed by the function name and any parameters the function needs to take in. For our function we need to take in three parameters as we will be needing the modify or view the state of parts of our application. The first parameter is the date to countdown to, the second is the input field for the days, and the third is a boolean that will be used to show a warning if the date has already elapsed. The type of the parameters are `String`, `MutableState<String>`, and `MutableState<Boolean>` respectively. The `MutableState` type is a special type that is used to hold the state of a variable, and is used in Compose to update the UI when the state (value of the variable) changes. The `MutableState` type is a generic type, which means that it can hold any type of variable. In our case, we are using it to hold a `String` and a `Boolean`.

Then in the function body we will need to find the currentDate and compare it to the future date. We can find the current date by using the Kotlin function, `LocaDate.now()` which we can then assign to a variable of `currentDay`. Since the date the user is in doesn't change throughout the use of the app, we can have `currentDay` be a `val` which means it cannot be changed after it is initialized. Then we can parse the future date into a `LocalDate` object by using the `LocalDate.parse()` function. Then we can use the `currentDay.until()` function to find the difference between the two dates. This function takes in two parameters, the first being the date to compare to, and the second being the unit of time to compare in. In our case, we want to compare in days, so we will use the `ChronoUnit.DAYS` parameter. Then we can use the `toInt()` function to convert the `Long` returned by the `until()` function to an `Int` so we can use it in our app. Finally, we can use an `if` statement to check if the days left is less than or equal to 0, and if it is, we can set the `incorrectDate` parameter to `true` so we can show a warning to the user. If the days left is greater than 0, we can set the `daysInput` parameter to the amount of days left.


This is what the function should look like:

```kotlin
fun calculateDaysLeft(futureDate: String, daysInput: MutableState<String>, incorrectDate: MutableState<Boolean>) {
    val currentDay = LocalDate.now()
    val parsedFutureDate = LocalDate.parse(futureDate)
    daysDiff = currentDay.until(parsedFutureDate, ChronoUnit.DAYS).toInt()
    if (daysDiff <= 0) {
        incorrectDate.value = true
    }
    else {
        daysInput.value = daysDiff.toString()
    }
}
```

Now we need to add a date picker part of the UI. Unfortunately Jetpack Compose doesn't have an updated version of the date picker dialog, so we will have to use an older version. As we are making a UI component we need to add the `@Composable` flag before the function to tell the compiler that the function is expected to show up on the UI. For the function, we can call it `ShowDatePicker` and it takes in an argument of `formattedDateState` which is a `MutableState<String>` that will hold the formatted date.

Then we can get the context of the app by using the `LocalContext.current` function. This will allow the Date Picker dialog to be displayed on the current page of the app.

Then we can create a `Calendar` object and create some variables for the day, month, and year. We use these values in the date picker dialog to save the selected values.

Then we can create a `DatePickerDialog` object and pass in the context, a `DatePickerDialog.OnDateSetListener` which will be called when the user selects a date, and the year, month, and day. As we are modifying some variables and don't expect to change anything just after the user selects a date, we can leave the `DatePickerDialog.OnDateSetListener` blank. Then we can call the `show()` function on the `DatePickerDialog` object to show the dialog.

Then we can create a `Column` which will hold the button to open the date picker dialog and the text that will show the formatted date. In Jetpack Compose, the layout of the app and all the components are usually placed within a `Column` or a `Row`. Then we can create a `Button` that will open the date picker dialog when clicked. Then we can create a `Text` that will show the formatted date for the user to see. The `Text` will have the `formattedDateState.value` as the text, which will be the formatted date. The reason why we can't use the `formattedDateState` directly is because it isn't a `String` but a state of the variable. The actual String data resides in the `.value` part of the variable.

Then we can call the `ShowDatePicker` function in the `setContent` function. The `formattedDateState` will be a `MutableState` that will hold the formatted date. We can create this by using the `mutableStateOf()` function and passing in the default value of the formatted date, which in our case is the current date. Then we can pass in the `formattedDateState` to the `ShowDatePicker` function. This is what the code should look like:

```kotlin
@Composable
fun ShowDatePicker(formattedDateState: MutableState<String>) {
    val mContext = LocalContext.current

    val mCalendar = Calendar.getInstance()
    val mYear: Int = mCalendar.get(Calendar.YEAR)
    val mMonth: Int = mCalendar.get(Calendar.MONTH)
    val mDay: Int = mCalendar.get(Calendar.DAY_OF_MONTH)

    val datePickerDialog = DatePickerDialog(
        mContext,
        { _: DatePicker, fYear: Int, fMonth: Int, fDay: Int ->
            if (fMonth + 1 <= 10) {
                formattedDateState.value = "$fYear-0${fMonth + 1}-$fDay"
            } else {
                formattedDateState.value = "$fYear-${fMonth + 1}-$fDay"
            }
        },
        mYear,
        mMonth,
        mDay
    )

    Column(
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(onClick = {
            datePickerDialog.show()
        }) {
            Text(text = "Choose Date", color = Color.White)
        }

        Text(text = "Date chosen: ${formattedDateState.value}")
    }
}
```

## Step 4: Creating the UI

We are almost done creating the app, currently it may not look like we have actually done much but that is because we aren't calling or saying where to place the components within the main UI function.

To change the UI we need to create a function to represent the Main Page of the app. Create a new `Composable` function, for me I chose the name `MainMenu` with no parameters in it.

We then need to actually initialize the state variables so that we can pass them into the other functions. We can do this by using the `remember` function. This function takes in a lambda function that will return the value of the state variable. We can then pass in the default value of the state variable. We can then pass in the state variable to the functions that need it. Create 3 state variables, two of which should be of type string and one of type boolean. The first state variable will be the formatted date, the second will be the days left, and the third will be a boolean to check if the date is incorrect. We will do this by having the variables have the value of `remember { mutableStateOf("") }`. This creates a mutable String that when it is changed will update the UI.

Then we can create a `Column` that will hold the button to open the date picker dialog and the text that will show the formatted date. In Jetpack Compose, the layout of the app and all the components are usually placed within a `Column` or a `Row`. Then we can create a `Row` that will hold the button to open the date picker dialog and the text that will show the formatted date. In Jetpack Compose, the layout of the app and all the components are usually placed within a `Column` or a `Row`. Then we can call the `ShowDatePicker` function that we created earlier. We can pass in the `formattedDateState` to the `ShowDatePicker` function.

We then need to, within one of the `Row`s create a button that when it is clicked will call the `ShowDatePicker` function with the `formattedDateState` variable passed in.

After the first `Row` we need to check if the user has selected a date and show the relevant UI when it is selected. We can do this by having an if statement that checks the value of the `formattedDateState.value` and as long as it isn't empty (`""`) then we can show the rest of the UI.

Then within that if statement we need to create a button that when clicked will call the `calculateDaysLeft` function. We will need to pass in all three mutable variables we created above to the function. We can also add text to the Button by adding a `Text` component with the text set to `"Calculate Days Left"`.

Finally we need to show the days left. We can do this by creating a `Row` that will hold the text that will show the days left. We can then create a `Text` component that will show the days left. We can set the text to the `daysLeft.value` variable. We can also set the font size to `80.sp` and the vertical alignment to `Alignment.Bottom`. We can also add a `Text` component that will show the text `"Days left"`.

This is what the code should look like:

```kotlin
@Composable
fun MainMenu() {
    val formattedDateState = remember { mutableStateOf("") }
    val daysLeft = remember { mutableStateOf("") }
    val incorrectDate = remember {mutableStateOf(false)}
    if (incorrectDate.value) {
        SimpleAlertDialog(incorrectDate)
    }
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Row(horizontalArrangement = Arrangement.Center, modifier = Modifier.padding(20.dp)) {
            ShowDatePicker(formattedDateState)
        }
        if (formattedDateState.value != "") {
            Button(onClick = { calculateDaysLeft(formattedDateState.value, daysLeft, incorrectDate) }) {
                Text(text = "Calculate Days Left")
            }
            Row(verticalAlignment = Alignment.Bottom, modifier = Modifier.padding(top = 100.dp)) {
                Text(text = daysLeft.value, fontSize = 80.sp)
            }
            Row {
                Text(text = "Days left")
            }
        }
    }
}
```

After all of this, the app is finally mostly finished! The only thing left to do is to call the `MainMenu` function in the `setContent` function within the onCreate function at the top. This is what the code should look like:

```kotlin

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CountdownHCTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                }
            }
        }
    }
}

```

## Step 5: Running the app

If everything looks fine, and there seems to be no errors, we can run the app by pressing the blue triangle at the top to build and run the app. This should display the app on the emulator or device that you have connected to your computer. If you have any errors, you can check the logcat to see what the error is and where it is. If you have any questions, feel free to ask me or any of the other mentors.

## Step 6: Hacking!

Want to add date validation? Write a function to do so!
Want to check if the date is in the past? Write a function to do so!
Want to create an app that creates a countdown to a specific time instead of a date? Write a function to do so!

I have created a repository that does the three things above if you want to compare your solution to mine.

You can also check out the [Jetpack Compose Documentation](https://developer.android.com/jetpack/compose/documentation) to learn more about Jetpack Compose and how to use it. As well as the [Kotlin Documentation](https://kotlinlang.org/docs/home.html) to learn more about Kotlin and how to use it.

![Celebration GIF](https://cloud-4zpw37atj-hack-club-bot.vercel.app/1celebrate_rush_hour.gif)