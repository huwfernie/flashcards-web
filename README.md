# Flashcards

## About

This is a simple text-based flashcards app that comes with a set of ChatGPT sample questions that may help (or not) in preparing for JavaScript job interviews.

## Getting Started

Use `npm run start` to launch the development server and you can see the page at [http://localhost:3000/](http://localhost:3000/)

This project is live on Vercel [https://flashcards-web-mu.vercel.app/](https://flashcards-web-mu.vercel.app/).

## New Questions

You can add/change your own questions by modifying the `./public/data.json` file [here](./public/data.json).

For now this is just JSON data that is hand formatted, this snippet represents the one **book** with one **chapter** with two **questions**

```
[
    {
        "title": "My Book",
        "chapters": [
            {
                "title": "Chapter 1. - Basics",
                "questions": [
                    {
                        "questionText": "What does **HTML** stand for?",
                        "answerText": "HTML is an acronym for Hyper Text Markup Language."
                    },
                    {
                        "questionText": "How does **prototypal inheritance** work in JavaScript?",
                        "answerText": "**Prototypal inheritance** allows objects to inherit properties & methods from prototypes.",
                        "codeExample": "// child is an object that inherits from parent\nconst child = {\n\t__proto__: parent\n};",
                        "externalLink": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
                    }
                ]
            }
        ]
    },
```

**Note:** Questiosn in JSON data must have `"questionText"` and `"answerText"` supplied, with optional extra detail in `"codeExample"` and `"externalLink"` properties.


## Navigation

This page doesn't use a traditional url based routing, instead state is stored in the windows localStorage and different page *views* are transitioned based on HTML class names together with CSS.

You can move forward in navigation by clicking on a list item (book name/chapter name/question name), there is a generic *back* button, or you can open the *menu* and then jump forward/backwards to a new section.

When you re-open the app you should jump back to where you left off as state is updated in localStorage as you navigate through the different views.


## Debugging

This page doesn't use a traditional url based routing, instead state is stored in the windows localStorage and different page *views* are transitioned based on HTML class names together with CSS.

for easy debugging of the inter-related views and state - each view you can change the class name on the HTML element from **mode-prod** to **mode-dev** which will then show all available views at a reduced scale on a single page.

Production:

`<html lang="en" class="mode-prod ...`

Dev / Debugging

`<html lang="en" class="mode-dev ...`


## Ref:

This project is based upon Create-React-App and their Progressive Web App template.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

