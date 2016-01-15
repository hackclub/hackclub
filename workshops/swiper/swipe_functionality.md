# Swipe Actions

### `UISwipeGestureRecognizer`

Now that we have our box spawning functionality working, we need to handle swipe
gestures that swipe the boxes right and left! The class that we have to use to
get swiping functionality is `UISwipeGestureRecognizer`. We first, in the
`didMoveToView()` method, need to create two `UISwipeGestureRecognizer` objects,
one for the left swipe and one for the right swipe. The first line starting with
`let swipeLeft` or `let swipeRight` is where we create the object. In the `()`
of `UISwipeGestureRecognizer()` there are two **parameters**. This means that
there are two special conditions when we create the `UISwipeGestureRecognizer`.
The first is beyond the scope of this tutorial. The second prefixed by `action:`
means that when the device receives a swipe gesture to the specific direction,
it calls the method of that name. Then the next line sets the direction of the
gesture and then the next adds the recognizer and tells the game to start
listening for gestures. Write in this code before the `}` of the
`didMoveToView()` method.

```swift
// 8. set up the swipe gesture recognizers
// left swipe
let swipeLeft = UISwipeGestureRecognizer(target: self, action: "leftSwipe:")
swipeLeft.direction = UISwipeGestureRecognizerDirection.Left
view.addGestureRecognizer(swipeLeft)

// right swipe
let swipeRight = UISwipeGestureRecognizer(target: self, action: "rightSwipe:")
swipeRight.direction = UISwipeGestureRecognizerDirection.Right
view.addGestureRecognizer(swipeRight)
```

### Handling Left Swipes

Now let's implement the method that receives the left swipe gestures. There are
four steps to this method. The first step is the first line. We name the method,
the same name we specified when creating the `UISwipeGestureRecognizer` object.
Then we declare an `SKSpriteNode` variable. We will later on set this to the
`firstObject` in the `arrayOfBlocks`. This comes in the if statement that checks
to make sure that the `arrayOfBlocks` has some blocks in it. After that, we
apply an impulse to propel it to the left. Then we remove the block from the
array in order to make sure you aren't swiping the same block every time.

```swift
func leftSwipe(leftSwipeGesture: UISwipeGestureRecognizer) {
	// 1. access the first block in the array of blocks
	var firstBlock: SKSpriteNode!

	if arrayOfBlocks.count > 0 {
		firstBlock = arrayOfBlocks.firstObject as! SKSpriteNode
	}

	// 2. apply impulse to swipe the block that way
	firstBlock.physicsBody?.applyImpulse(CGVectorMake(-(screenWidth / 2.0), 0.0))

	// 3. remove block from the array
	arrayOfBlocks.removeObject(firstBlock)
}
```

### Handling Right Swipe

We will do the same exact thing for handling right swipes, but we apply the
impulse to the opposite way.

```swift
func rightSwipe(rightSwipeGesture: UISwipeGestureRecognizer) {
	// 1. access the first block in the array of blocks
	var firstBlock: SKSpriteNode!

	if arrayOfBlocks.count > 0 {
		firstBlock = arrayOfBlocks.firstObject as! SKSpriteNode
	}

	// 2. apply impulse to swipe the block that way
	firstBlock.physicsBody?.applyImpulse(CGVectorMake(screenWidth / 2.0, 0.0))

	// 3. remove block from the array
	arrayOfBlocks.removeObject(firstBlock)
}
```

### Run the Project

Now we can run the project and see what this did!

![](img/Step 6/4. HCRunProjectSwipe.gif)

We can only swipe the first block, but that will change in the next part when we
handle collision detection!

### Recap

You learned how to:

- Create a `UISwipeGestureRecognizer`
- Pass in `parameters` to a `method`
- Remove an object from an `array`
- Access the `firstObject` of an `array`

--------------------------------------------------------------------------------

Now to complete the game, we only have two more steps: collision detection and
the retry screen! Let's get started!
