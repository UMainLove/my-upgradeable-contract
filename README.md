# Proxy Smart contract Project from Alchemy University Module 7

Why Are We Upgrading a Vending Machine?! 🤖
We know the example might seem simplistic, but for learning purposes this actually works pretty great... think about it: a real life vending machine has certain abilities... it can:

dispense a drink if the user inputs the coins/cash required
typically vending machines hold drinks, but they can also hold snacks
some vending machines accept credit cards, which is a nice feature for users
some vending machines provide cold drinks, some don't
These are just typical features of a vending machine! Right. But put yourself in the shoes of a vending machine's owner for a minute... you have to consider so many things:

What drinks/snacks sell the best?
What price points are the right balance between profit and customer satisfaction?
Should I optimize for more drinks, more snacks, only drinks, only snacks? What are the space tradeoffs of each one?
How much real estate do I even have to set this vending machine? And how much will rent cost?
How many people even pass by the machine every day?
etc, etc, etc
As you can see, for something as simple as a vending machine, these decisions are quite tough to make! Similarly, when deploying a dApp, developers can be faced with many similar decisions!

Luckily, upgradeable smart contracts give them flexibility to choose a more iterative approach to solving these problems - rather then going with a solution set in stone forever. 🗿 The above are all planned considerations... but what about unplanned or as us developers call them bugs? Let's run through some hypothetical ones, still using the vending machine example:

The machine was set up with a mechanical issue that prevents sodas from being dispensed.
The machine coin slot is left unlocked accidentally.
The soda brand being advertised on the machine goes out of business.
The city council builds a new pedestrian road around where your machine is placed, now no one passes by it.
One of the buttons was pressed so hard by someone that it jammed.
We didn't even mention the case where you as a business owner just want to... well... upgrade!

Your machine is doing so well, you need to set up a new bigger one that can handle a larger flow of people more efficiently.
Your machine is doing so well, you add new soda brands.
In order to reward your users, you've set up a loyalty points system.
Your machine was initially set up to only accept coins, you have now upgraded it to accept coins, cash, bitcoin, ether and credit cards - giving it access to whole new markets of users (ayooo!).
All right, all right.. you get the point!

Just like in real life you need flexibility to account for bugs, issues and iterative upgrades, smart contract upgradeability gives you that flexibility and we will get to see this first hand via deploying an upgradeable vending machine smart contract.

Step 1: Set Up Hardhat Project Structure

Step 2: Add Smart Contracts

Step 3: Write a Deploy Script to Deploy VendingMachineV1

Step 4: Deploy (and Verify) your Contracts!

Step 5: Interact With VendingMachineV1 via its Proxy contract!

Step 6: Upgrade Proxy to VendingMachineV2