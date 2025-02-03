---
name: Intro to Reinforcement Learning with Gym
description: Learn a new type of AI and Q-learning
author: '@Ben182911'
img: https://www.gymlibrary.dev/_images/cart_pole.gif
---

> This assumes you have completed the [Handwriting Recognition Workshop](https://workshops.hackclub.com/digit_recognition/) and are familiar with Python

>Before we begin: please run the following command in your terminal to install all dependencies.
>`pip install numpy==1.24.3 gymnasium==0.29.1 gymnasium[classic-control]==0.29.1 pygame==2.4.0 matplotlib==3.7.1`
# What is Reinforcement Learning (RL)

RL is a form of machine learning based upon a model learning by trial and error. This differs from the previous MNIST handwriting recognition project, because that type of project (known as supervised learning) had labeled data (Essentially data and a classification) for the model to learn from. This gives RL an advantage, as it doesn't require a known outcome, and can be more adaptable. One place where RL is being used now is self driving cars.

# Key Terms

Let's stick with the self driving car analogy for now while we define some key terms.

1. **Agent** - What the model controls or what is doing the action. In this example, this would be the car.

2. **Environment** - The world the agent interacts with. This would be the area around the car.

3. **State** - A snapshot of the environment at a moment used by the agent to do something. It could be the car's location, speed, a camera feed, etc.

4. **Action** - Something the agent does based on the state. This could be to speed up, slow down, move left, or move right.

5. **Reward** - A numerical value that rates the agent's action by providing feedback. An agent's goal is to maximize reward. This could be as simple as +5 for staying within a lane and can be expanded upon to control the agents actions.

 > Let's start simple and build up from there. Imagine that you are in a grid based world and looking for a buried treasure. The environment in this example is the grid world and each state will be derived from this. The collection of all possible states (You on every square) is called the **State Space**. Your **Action Space** (The actions you can do) can be written as {Move up, Move down, Move Left, Move Right, Dig}.

# Foundations

## Markov Decision Process

Going back to the self driving car analogy, let's say that the car is heading towards a red light (This is the **State**). A reasonable response would be to slow down (The **action**), but the AI has to learn this. The AI learns through training a **Policy (π)** which learns to choose an action which moves to the next state and will lead to the highest total reward. If the model was to be given a -10 reward for running a red light and +5 for slowing before the light, the policy would learn to choose the *slow* action to maximize total reward (Also known as return). You can think of the MDP as a graph which connects each state (Node) by actions (edges) with rewards (weights) with the policy determining the path an agent takes through it.

> For those interested in more detail:
> The MDP also defines the **Transition** which is the probability of an action leading to a state. For example, in the treasure hunt from earlier, their could  be a 10% chance of finding the treasure and a 90% chance of not.
## Value functions
The policy makes decisions based off of **Value Functions** which the the policy's estimate of the total future reward given by an action. Based on the goal, the value function can be tweaked to weight future rewards more or less heavily.

# Q-Learning
Q learning is one method to implement a value function which works by keeping track of past actions and using them to predict future rewards. The most basic way this is done is by storing a table mapping the state and action pair to the reward that it received. When the Agent is in the same state again, it can look at this *Q-table* and see what happened for each reward previously.

One important part of Q-learning is the balancing of exploration and exploitation. Exploration is the process of trying new actions while exploitation is using known strategies to get as high a reward as possible. If the model starts exploitation too soon, it might not learn the optimal strategy, while if it doesn't start exploiting, it could waste time on a unpromising strategy, This is dealt with by a concept known as epsilon decay which has epsilon represent the probability of taking a random action (Exploring) and having epsilon gradually decrease to near zero as the Agent learns.

## Other Important terms
- **Learning Rate** - How quickly a policy updates its Q-table based on new rewards. This is helpful, because an Agent may receive a high reward by chance and we don't want the policy to learn that is always what will happen.
- **Discount Factor** - A way to scale down future rewards so that they don't reach infinity.
# Implementation
## Understanding the environment
The first environment we will be working with is *Cartpole* which is one of the simpler uses of RL. This environment is focused on the goal of balancing a rod which is sitting on a cart which can be moved left or right.
![](https://www.gymlibrary.dev/_images/cart_pole.gif)
## Introduction to gym
### Installation
Gym is a python framework designed for RL tasks. It can be installed by running `pip install gymnasium` in your terminal of command prompt (In Jupyter Notebooks or Google Colab: `!pip install gymnasium`).
### Basic use
> I would recommend not using Google Colab for this. Ideally, you should use a Jupyter notebook or a standard python file.
```python
import gymnasium as gym
import random

#Initialize the environment
env = gym.make("CartPole-v1")

#Make reproducible
random.seed(42)
env.seed(42)

#Print out action space
print(f"Action space: {env.action_space}")
```
Running this code gives us: `Action space: Discrete(2)` 
 - 0 = move left
 - 1 = move right
 Let's now add the line `print(f"Observation space: {env.observation_space}")`
 - This gives us `Observation space: Box([-4.8               -inf -0.41887903        -inf], [4.8               inf 0.41887903        inf], (4,), float32)`
 - This means that the environment's state space can be described by the following table:

| Parameter             | Min    | Max   |
| --------------------- | ------ | ----- |
| Cart Position         | -4.8   | 4.8   |
| Cart Velocity         | -inf   | inf   |
| Pole Angle            | -0.418 | 0.418 |
| Pole Angular Velocity | -inf   | inf   |

### Random Actions
```python
import time
import gymnasium as gym
import random

env = gym.make("CartPole-v1", render_mode = "human")

# Run 10 episodes
episodes = 10
for i in range(episodes):

    initalState = env.reset(seed=42)
    rewardSum = 0

    while True:  # We want to balance the pole forever
        env.render()  # Helpful to see for debugging but can slow down training
        
        state, reward, terminated, truncated, info = env.step(random.randint(0, 1))  # Take a random action and get its reward and the next state
        rewardSum += reward

        time.sleep(0.01)  # Artificially slowing it down so it is easier to see
        
        # End episode when pole falls
        if terminated or truncated:
            print(f"Episode {i} Reward: {rewardSum}")
            break

env.close()  # Shut down the env cleanly
```
### Simple Heuristic
As you may have noticed from this, moving randomly is not going to work. Let's try one more approach to balance it before turning to RL. Change the while loop to be the following:
```python
    while True:  
        env.render()
        
        action = 1 if state[2]>0 else 0 #Move left if the pole is leaning to the right and vice versa
        state, reward, terminated, truncated, info = env.step(action)  

        rewardSum += reward
        time.sleep(0.01)  

        if terminated or truncated:
            print(f"Episode {i} Reward: {rewardSum}")
            break
```
This is better, but still allows the pole to fall. For this proble, we will need Q-learning.
### Q-Learning Implementation
There will be a few new concepts to introduce before we jump into the implementation. 
- Discretization Function - A way of grouping similar states together to avoid the table growing to large. For example, the Q-table likely doesn't need a separate row for the pole being at position 4.8, 4.81, and 4.78, so they can be grouped together. 
```python
import numpy as np
import gymnasium as gym

numBins = [10, 10, 10, 10]  # Because CartPole is continous, we need to break down the values into discrete steps
stateBounds = [(-4.8, 4.8), (-3.0, 3.0), (-0.418, 0.418), (-3.0, 3.0)]  # Min/max values for each state var

  
# Q-learning hyperparameters
learningRate = 0.1 # How much to update the policy for each reward
discountFactor = 0.99 # How much to weigh future rewards
explorationRate = 1.0  # Episilon
explorationDecay = 0.995 # How quickly the Agent moves from exploration to exploitation
minExplorationRate = 0.01 # A non zero value allows for the agent to contiue to learn even while exploiting
episodes = 10_000 # Number of training episodes

# Initialize environment and Q-table
env = gym.make("CartPole-v1")

qTable = np.zeros(numBins + [env.action_space.n])  # (10x10x10x10x2) table - Each possible discretized state and each of the two possible actions. All initialized at zero expected reward


# Discretize by grouping into different bins
def discretizeState(state):
    discreteState = []
    for i in range(len(state)):
        low, high = stateBounds[i]
        bins = np.linspace(low, high, numBins[i] - 1) # Space out ten bins across the range of values
        discreteState.append(np.digitize(state[i], bins))
    return tuple(discreteState)

# Training loop
for episode in range(episodes):
    state, _ = env.reset()
    state = discretizeState(state) # Discretize so that it can be looked up in the q-table
    totalReward = 0

    done = False
    while not done:
        if np.random.rand() < explorationRate: # Randomly decide to explore or exploit
            action = env.action_space.sample()  # Explore by sampling a random action from the action space
        else:
            action = np.argmax(qTable[state])  # Get best action from the table for this state

        # Execute action
        nextState, reward, terminated, truncated, _ = env.step(action)
        nextState = discretizeState(nextState)

        totalReward += reward

        # Q-learning update rule
        bestNextAction = np.max(qTable[nextState])
        qTable[state][action] += learningRate * (reward + discountFactor * bestNextAction - qTable[state][action]) # scaling * (reward + scaled expected future reward - expecte reward)

        state = nextState  # Move to next state
        done = terminated or truncated  # Episode ends

    # Reduce exploration rate
    explorationRate = max(minExplorationRate, explorationRate * explorationDecay)


    # Print progress
    if episode % 500 == 0:
        print(f"Episode {episode}, Total Reward: {totalReward}, Exploration Rate: {explorationRate:.3f}")

env.close()


# Visualize trained agents
env = gym.make("CartPole-v1", render_mode="human")

for _ in range(3):  # Run 3 episodes
    state, _ = env.reset()
    episode_reward = 0

    done = False
    while not done:

        state = discretizeState(state)
        action = np.argmax(qTable[state])

        state, reward, terminated, truncated, _ = env.step(action)

        episode_reward += reward
        done = terminated or truncated

    print(f"Reward: {episode_reward}")

env.close()
```
## Challenges
 - What happens if you increase the number of bins
 - How could you make the pole balance for longer
# Review and Discussion Questions
- How does RL differ from supervised learning (The MNIST Digit Recognizer)?
- In the CartPole env, why is the reward +1 for each second the pole doesn't fall and not something more complex?
- What would happen if we set our exploration rate (Epsilon) to 1.0, 0.3, and 0.0?
- Why do we need to discretize values and what limitations does this cause.
- Can you think of a scenario where equal sized bins wouldn't be useful?
- Consider the exploration vs. exploitation tradeoff, how would this apply to a marketing company trying a new advertisement strategy or a chef developing new recipes.
- What would happen if you change learning rate, discount factor, or exploration rate? Change the code and try.

# Conclusion
The results from this can vary significantly due to Q-learning being such a simple method. In my next workshop, I will introduce the concept of Deep Q-Learning which relies on neural networks for the Q-function and is more reliable overall.