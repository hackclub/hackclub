---
name: 'Hot Dog or Not Hot Dog?'
description: 'Build a basic hot dog classifier using the Clarifai API for Python'
author: '@harrisbegca'
group: 'misc'
order: 5
begin: 'https://repl.it/repls/GullibleAccomplishedCables'
---

## Part 1: Background

You may or may not already be familiar with the popular TV show __Silicon Valley__, in which a character, Jian-Yang, promises to help build an app that identifies different types of food. While the idea is promising, Jian-Yang clearly misunderstands and makes, well, [this](https://www.youtube.com/watch?v=pqTntG1RXSY).

So the question remains: is it possible to build a fast and reliable hot dog identification app?

And what if it only took 5 lines of code?

![](https://i.ibb.co/PGsbXFn/carbon-1.png)

The answer is yes, although it actually takes 16 lines of code (still pretty impressive).

## Part 2: Setup

### 1) Using repl.it

Luckily, [repl.it](https://repl.it/) provides an easy-to-use interface where we can get our code set up without worrying about dependencies and small, obscure errors that yield one answer on Stack Overflow.

To get started, please go to: [https://repl.it/languages/python3](https://repl.it/languages/python3).

### 2) Implementing Clarifai's Food Model

Now that we're able to write our code, we have to determine what to use to identify the hotdogs.


To do that, we'll be using [Clarifai](https://www.clarifai.com/), a popular API with prebuilt models including a [food model]
(https://www.clarifai.com/models/food-image-recognition-model-bd367be194cf45149e75f01d59f77ba7?hsLang=en):


![](https://i.ibb.co/xsfSpVJ/image.png)


In a simplified sense, Clarifai's food model has many pictures of food items that are then divided into categories, helping a complex algorithm identify patterns between food items' appearances. For the sake of this tutorial, we don't have to worry about the algorithmic details, but rather the implementation.

**If you'd like to delve into custom models, I'd recommend reading the [full Clarifai documentation](https://www.clarifai.com/developer/guide/train#train).**



Anyways, to use Clarifai, we'll need an API key. To get started, you'll need to sign up here:
[https://www.clarifai.com/signup](https://www.clarifai.com/signup).

Once you've signed up, you should arrive at this page:

![](https://i.ibb.co/RzKNcNt/image.png). To continue, click on the project that Clarifai created for you named "my-first-application."


You should now be at a "settings" page of sorts, and clicking a dropdown option called "API Keys" (highlighted below) should bring up a long string of letters and numbers. This is called your API key - make sure not to give it to anyone.


![](https://i.ibb.co/bmpR7Jm/image.png)

Copy the API key and replace "YOUR_API_KEY" in [my repl](https://repl.it/repls/GullibleAccomplishedCables) with the key. The repl should now run, and will print a bunch of jargon into the console.

## Part 3: Processing Clarifai's Predictions

The "jargon," when reformatted, looks like this:
````json
{  
   'status':{  
      'code':10000,
      'description':'Ok',
      'req_id':'1a5319397f344267a00f7057ef212a39'
   },
   'outputs':[  
      {  
         'id':'e5d43934f74c4697b1388d4819db780b',
         'status':{  
            'code':10000,
            'description':'Ok'
         },
         'created_at':'2019-06-09T18:24:09.106022738Z',
         'model':{  
            'id':'bd367be194cf45149e75f01d59f77ba7',
            'name':'food-items-v1.0',
            'created_at':'2016-09-17T22:18:59.955626Z',
            'app_id':'main',
            'output_info':{  
               'message':'Show output_info with: GET /models/{model_id}/output_info',
               'type':'concept',
               'type_ext':'concept'
            },
            'model_version':{  
               'id':'dfebc169854e429086aceb8368662641',
               'created_at':'2016-09-17T22:18:59.955626Z',
               'status':{  
                  'code':21100,
                  'description':'Model trained successfully'
               }
            },
            'display_name':'Food'
         },
         'input':{  
            'id':'a642f530e11d4188a24cf2f679842829',
            'data':{  
               'image':{  
                  'url':'https://samples.clarifai.com/food.jpg'
               }
            }
         },
         'data':{  
            'concepts':[  
               {  
                  'id':'ai_GC6FB0cQ',
                  'name':'sauce',
                  'value':0.9983333349227905,
                  'app_id':'main'
               },
               {  
                  'id':'ai_fBH5DFMJ',
                  'name':'pasta',
                  'value':0.9958708882331848,
                  'app_id':'main'
               },
               {  
                  'id':'ai_2KV5G1Fg',
                  'name':'basil',
                  'value':0.9758102893829346,
                  'app_id':'main'
               },
               {  
                  'id':'ai_XN1QLhwp',
                  'name':'penne',
                  'value':0.9758005142211914,
                  'app_id':'main'
               },
               {  
                  'id':'ai_KWmFf1fn',
                  'name':'meat',
                  'value':0.9716258645057678,
                  'app_id':'main'
               },
               {  
                  'id':'ai_XVpwLB09',
                  'name':'beef',
                  'value':0.9662393927574158,
                  'app_id':'main'
               },
               {  
                  'id':'ai_qmTM9wzt',
                  'name':'spaghetti',
                  'value':0.9625737071037292,
                  'app_id':'main'
               },
               {  
                  'id':'ai_CB8hsS3T',
                  'name':'tomato',
                  'value':0.9441984295845032,
                  'app_id':'main'
               },
               {  
                  'id':'ai_FnZCSVMH',
                  'name':'cheese',
                  'value':0.8896348476409912,
                  'app_id':'main'
               },
               {  
                  'id':'ai_CQT1pP96',
                  'name':'macaroni',
                  'value':0.8692030906677246,
                  'app_id':'main'
               },
               {  
                  'id':'ai_NDbbpCv1',
                  'name':'vegetable',
                  'value':0.8648395538330078,
                  'app_id':'main'
               },
               {  
                  'id':'ai_CSW3Njnd',
                  'name':'meat sauce',
                  'value':0.8523142337799072,
                  'app_id':'main'
               },
               {  
                  'id':'ai_3fJXxTPQ',
                  'name':'sausage',
                  'value':0.6793823838233948,
                  'app_id':'main'
               },
               {  
                  'id':'ai_ZBtC2kLC',
                  'name':'spaghetti bolognese',
                  'value':0.6277346611022949,
                  'app_id':'main'
               },
               {  
                  'id':'ai_Bh2xGwKk',
                  'name':'tomato sauce',
                  'value':0.6133120059967041,
                  'app_id':'main'
               },
               {  
                  'id':'ai_TRbv6FWL',
                  'name':'pork',
                  'value':0.5717142820358276,
                  'app_id':'main'
               },
               {  
                  'id':'ai_cdw5bgmc',
                  'name':'pasta sauce',
                  'value':0.46453768014907837,
                  'app_id':'main'
               },
               {  
                  'id':'ai_6s1vcbq9',
                  'name':'garlic',
                  'value':0.45510831475257874,
                  'app_id':'main'
               },
               {  
                  'id':'ai_gNpKXVhq',
                  'name':'tagliatelle',
                  'value':0.4506647288799286,
                  'app_id':'main'
               },
               {  
                  'id':'ai_gLHbKNPn',
                  'name':'parmesan',
                  'value':0.44485723972320557,
                  'app_id':'main'
               }
            ]
         }
      }
   ]
}
````

And your code should be:

````python
from clarifai.rest import ClarifaiApp
#YOUR_API_KEY
app = ClarifaiApp(api_key="YOUR_API_KEY")
model = app.models.get('food-items-v1.0')
result = model.predict_by_url('https://samples.clarifai.com/food.jpg')
print(result)
````

By analyzing the json structure above, it can be noticed that in order to access the prediction labels and values, we have to go to:
"outputs" -> first item -> "data" -> "concepts"

You can do that by adding this line to your repl:

````python
predictions = result["outputs"][0]["data"]["concepts"]
````

If we print `predictions` to the console, we'll see something like this:
````python
[
   {
      'id':'ai_GC6FB0cQ',
      'name':'sauce',
      'value':0.9983333349227905,
      'app_id':'main'
   },
   {
      'id':'ai_fBH5DFMJ',
      'name':'pasta',
      'value':0.9958708882331848,
      'app_id':'main'
   },
   {
      'id':'ai_2KV5G1Fg',
      'name':'basil',
      'value':0.9758102893829346,
      'app_id':'main'
   },
   {
      'id':'ai_XN1QLhwp',
      'name':'penne',
      'value':0.9758005142211914,
      'app_id':'main'
   },
   {
      'id':'ai_KWmFf1fn',
      'name':'meat',
      'value':0.9716258645057678,
      'app_id':'main'
   },
   {
      'id':'ai_XVpwLB09',
      'name':'beef',
      'value':0.9662393927574158,
      'app_id':'main'
   },
   {
      'id':'ai_qmTM9wzt',
      'name':'spaghetti',
      'value':0.9625737071037292,
      'app_id':'main'
   },
   {
      'id':'ai_CB8hsS3T',
      'name':'tomato',
      'value':0.9441984295845032,
      'app_id':'main'
   },
   {
      'id':'ai_FnZCSVMH',
      'name':'cheese',
      'value':0.8896348476409912,
      'app_id':'main'
   },
   {
      'id':'ai_CQT1pP96',
      'name':'macaroni',
      'value':0.8692030906677246,
      'app_id':'main'
   },
   {
      'id':'ai_NDbbpCv1',
      'name':'vegetable',
      'value':0.8648395538330078,
      'app_id':'main'
   },
   {
      'id':'ai_CSW3Njnd',
      'name':'meat sauce',
      'value':0.8523142337799072,
      'app_id':'main'
   },
   {
      'id':'ai_3fJXxTPQ',
      'name':'sausage',
      'value':0.6793823838233948,
      'app_id':'main'
   },
   {
      'id':'ai_ZBtC2kLC',
      'name':'spaghetti bolognese',
      'value':0.6277346611022949,
      'app_id':'main'
   },
   {
      'id':'ai_Bh2xGwKk',
      'name':'tomato sauce',
      'value':0.6133120059967041,
      'app_id':'main'
   },
   {
      'id':'ai_TRbv6FWL',
      'name':'pork',
      'value':0.5717142820358276,
      'app_id':'main'
   },
   {
      'id':'ai_cdw5bgmc',
      'name':'pasta sauce',
      'value':0.46453768014907837,
      'app_id':'main'
   },
   {
      'id':'ai_6s1vcbq9',
      'name':'garlic',
      'value':0.45510831475257874,
      'app_id':'main'
   },
   {
      'id':'ai_gNpKXVhq',
      'name':'tagliatelle',
      'value':0.4506647288799286,
      'app_id':'main'
   },
   {
      'id':'ai_gLHbKNPn',
      'name':'parmesan',
      'value':0.44485723972320557,
      'app_id':'main'
   }
]
````

If you're familiar with Python and acknowledge that the above item is an array (since it's surrounded by hard brackets), we can very easily iterate and access the values of prediction by adding this to your repl:

````python
for food in prediction:
  print(food['name'], food['value'])
````

The console should log:
````
sauce 0.9983333349227905
pasta 0.9958708882331848
basil 0.9758102893829346
penne 0.9758005142211914
meat 0.9716258645057678
beef 0.9662393927574158
spaghetti 0.9625737071037292
tomato 0.9441984295845032
cheese 0.8896348476409912
macaroni 0.8692030906677246
vegetable 0.8648395538330078
meat sauce 0.8523142337799072
sausage 0.6793823838233948
spaghetti bolognese 0.6277346611022949
tomato sauce 0.6133120059967041
pork 0.5717142820358276
pasta sauce 0.46453768014907837
garlic 0.45510831475257874
tagliatelle 0.4506647288799286
parmesan 0.44485723972320557
````

## Part 4: Checking for Hot Dogs

Now that our basic project works, we have to add the "hot dog" component, or else Jian-Yang will be disappointed. Before doing that, though, we should probably store our data (in case we ever want to use it later). We can use python tuples for this case, as we're only storing two values: the name of the food and the prediction value.

Using a tuple would imply changing our loop to something similar to this:

````python
food_predictions = []
for food in prediction:
  food_prediction = (food['name'], food['value'])
  food_predictions.append(food_prediction)
````

Now that we've stored the data, we can check if any of the food names are "hot dog" and, if so, whether or not the prediction value is high enough such that it's a hot dog.

To do this, we have to determine a "threshold" for the model's hot dog confidence. In this tutorial, we'll just say that if it's more than 95% sure that something is a hot dog, the "thing" is a hot dog.

Translating this to code would look a little something like:
````python
is_hotdog = False
for item in food_predictions:
  if item[0] == "hot dog": # The first item, which was designated to be the name in our tuple for loop
    if item[1] > 0.95: is_hotdog = True
print(is_hotdog)
````

If you've followed along thus far, your code should look like:
````python
from clarifai.rest import ClarifaiApp
#YOUR_API_KEY
app = ClarifaiApp(api_key="YOUR_API_KEY")
model = app.models.get('food-items-v1.0')
result = model.predict_by_url('https://samples.clarifai.com/food.jpg')
###
prediction = result["outputs"][0]["data"]["concepts"]
food_predictions = []
for food in prediction:
  food_prediction = (food['name'], food['value'])
  food_predictions.append(food_prediction)
is_hotdog = False
for item in food_predictions:
  if item[0] == "hot dog": # The first item, which was designated to be the name in our tuple for loop
    if item[1] > 0.95: is_hotdog = True
print(is_hotdog)

````

Surprisingly, if we run the script, it works on most hot dogs. You can test this yourself by replacing
'https://samples.clarifai.com/food.jpg' with any image URL.

**Some examples include**:


![](https://www.awrestaurants.com/sites/default/files/hotdog_0.png)

`True`


![](https://leitesculinaria.com/wp-content/uploads/fly-images/96169/best-hot-dog-recipe-fi-400x225-c.jpg)

`True`


![](https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)

`False`


![](https://images-na.ssl-images-amazon.com/images/I/81bXmvVitkL._SX466_.jpg)

`True` (This one is debatable)


# Part 5: Applications

If everything worked out, then you should have been able to build a functional hot dog identifier! I know for a fact Jian-Yang would be proud, and, if you follow other tutorials, such at this one that helps you build a Python-based website: [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website), you can create a publicly accessible hot dog identification website!

![](https://media.giphy.com/media/1d5U0OaCqfC0DQpriC/giphy.gif)

While the fact remains that this "hot dog" identifier may not have a lot of real world implications, now that you know how to use Clarifai, it's easy to jump into other applications, such as being able to identify diseases, reddit reposts, memes, or license plates (those are all things I've done).

**The truth of the matter is that machine learning is becoming increasingly mainstream, so the opportunities really are endless, now that you know how to use the Clarifai API. All it takes is a Google search and a nudge in the right direction, and you end up making a global impact.**
