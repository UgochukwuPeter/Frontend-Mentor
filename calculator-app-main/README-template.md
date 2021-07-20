# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### The challenge

-Had challenges on setting the themes two three color prefrences.
-Had challenges on setting the del key to delete  unwanted numbers before calculations.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with
- Sublime Text
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- I learnt how to make a particular style superceed another by using the word "!important" on the style.
- I learnt how to use javascript to clear numbers.
- I learnt how to calculate numbers using the eval() function.

To see how you can add code snippets, see below:

```html
<input type="button" class="del" onclick="clr()" value="DEL">
```
```css
input[type=button] {
  width: 19%;
  height: 70px;
  float: left;
  padding: 0;
  margin: 15px;
  border-radius: 10px;
  background: hsl(30, 25%, 89%);
  box-shadow: 0 3px hsl(28, 16%, 65%); 
  border: none;
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
  color: hsl(221, 14%, 31%);
  cursor: pointer;
  
}

.del{
	background: hsl(225, 21%, 49%) !important;
	box-shadow: 0 3px hsl(224, 28%, 35%) !important; 
	color: white !important;
}
```
```js
function clr()
{
document.getElementById("res").value = "";
}
```

### Continued development
- I want more project that focuses on more applications that has to do with calculations and mathematical fuctions on javascripts that way
i can be able to learn more about javascript.
- 

### Useful resources

- [w3Schools](https://www.w3schools.com) - This site helped me in learning how to create a toogle switch button between two colors.


## Author

- Website - [Ugochukwu Peter](https://www.your-site.com)
- Frontend Mentor - [@Ugochukwu Peter Uche](https://www.frontendmentor.io/profile/yourusername)

