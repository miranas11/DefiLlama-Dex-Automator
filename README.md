# DefiLlama Dex Automator

This is a simple node project that uses pupetter to fill some details on a DEX on https://swap.defillama.com/
Node Version - 18.16.0
Puppeteer Version - ^20.8.2

## Installation

1. Clone the repository: `git clone https://github.com/miranas11/DefiLlama-Dex-Automator`
2. Navigate to the project directory: `cd project-location`
3. Install dependencies: `npm install`

## Usage

1. Start the application: `npm start`

## Details

This project contains two main files

### DeFiLlama Class

DefiLlama.js which contains the Puppetter automation script for interacting with https://swap.defillama.com/

#### Constructor

`constructor()`

Initializes the DeFiLlama instance.

Sets the browser and page properties to null.

#### Methods

`delay(ms: number): Promise<void>`

Delays the execution for the specified number of milliseconds.

Returns: A promise that resolves after the delay.

`init(): Promise<void>`

Initializes the Puppeteer browser and page.

Launches a new Puppeteer browser instance with the specified options.

Returns: A promise that resolves when the initialization is complete.

`goToPage(url: string): Promise<void>`

Navigates the Puppeteer page to the specified URL.

Returns: A promise that resolves when the page navigation is complete.

`fillForm(): Promise<void>`

Fills out the form on the DeFiLlama page.

Selects the desired chain, sets the sell value, chooses the sell and buy currencies, and selects the second best route.

Returns: A promise that resolves when the form filling is complete.

`run(): Promise<void>`

Executes the automation script.

Returns: A promise that resolves when the script execution is complete.

### Index.js

This file imports the DefiLlama class and creates a object from it.

It then runs the run() method of the class.
