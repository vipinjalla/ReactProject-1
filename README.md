# MyReads Project
This is a small application where we can search books and add them to our various shelfs. 

## Screens: It has 2 screens:
* Screen 1 will show us list of books divided in various shelfs (read, want to read, currently reading). Each books book has option to chnage shelf.
* Screen 2 will give us an option to search books. On typing text in search bar, we get various books suggestion. We can add them to our shelfs.

## User actions and experiance:
Each book has option to change shelf. We have option to change shelf on both the screens. Both screens are in sync, whenever we change shelf of a book on 1 screen, it will also be reflected on another screen. Whenever we open book shlef chnage option, the current shelf will be pre selected and after changing shelf it is immediatedly reflected.



## Instructions to launch application

To get started lauching right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* open application in browser at url "http://localhost:3000/"


## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── navigations
    │	└── MyBooks.js # A react component which is a route of url "/" and is showing list of books in our shelf
    │	└── SearchBooks.js # A react component which is a route of url "/search" and is provising user a screen to search books
    └── components
    │	└── BookShelf.js # A react component representing a book shelf having list of books of same shelf type
    │	└── Book.js # A react component representing a book. It have options to change the book shelf
    └── utils
    	└── BooksUtils.js # A utility file where we have 2 reusable functions.     
```
