# Various React Components Using React Hooks

## Technologies
This is a customised front end boilerplate using Webpack 4, React, Reactstrap, SASS and Cypress for Unit Testing.

## Components

### Navigation
A simple navigation which uses `Reactstrap's Navs` component https://reactstrap.github.io/components/navs/.  The component currently receives props for `links`, `tabs`, `pills`, `vertical` and `justified.`

```
<Navigation 
  links={links} 
  tabs={false}
  pills={true}
  vertical={false}
  justified={false}
  />
```

### Links 
Links is an array containing objects (can contain a secondary level too):

### Tabs
This receives a boolean value. True will set a tab layout for the navigation.

### Pills   
This receives a boolean value. True will set a pills shaped layout for the navigation.

### Vertical 
This receives a boolean value. It will set a vertical orientation for the navigation.

### Justified
This receives a boolean value. This will set a justified alignment for the navigation.

### Header
The header receives a prop, `mainImg`, which is string to an image path. This acts as responsive background image. It can also receive an image path in a `logo` prop, another string, which will sit in the foreground of the main background image. If this empty it will not render. Lastly, it takes a `text` string prop which is the header title.

```
<Header
  mainImg="https://www.blackhillsbadlands.com/sites/default/files/styles/bhb40_page_hero/public/photos/events/5th-annual-holiday-bazaar/abstract-background-blur-255377.jpg"
  logo="https://carlisletheacarlisletheatre.org/images/football-logo-7.png"
  text="This is the heading"
/>
```

### Carousel
The carousel uses the React Slick library https://react-slick.neostack.com. 

```
<Carousel
  data={carouselData}
  settings={carouselSettings}
/>
```
    
It takes a `data` prop which is an array of objects for the carousel items and a `settings` prop which determines if `dots`, `arrows` and `infinite` loops are used, the `speed` of the carousel transitions, the number of `slidesToShow` in one view and the number of `slidesToScroll.`       

### Article
The article component can display items of data from either an API or a local JSON file. The prop `srcType` receives a string of either `JSON` or `API.` If `JSON` is passed the `dataSrc` should recieve an array of objects. Where as if `API` was chosen then a path/endpoint is expected. 

```
<Article
  srcType="JSON / API"
  dataSrc={Array / path}
/>
```

### Order Form
The Order Form does not take any properties but utilizes componenets `PersonalInfo` and `Products` which are form elements.`PersonalInfo` requires a title property.
    
```    
<PersonalInfo 
  title="Personal Information"
/>
```

`Products` takes a title, an array of objects as its source which is used in a loop to display all products. There is also a boolean value for `alternatCols` which will display the products with an alternating left and right alignment.

```
<Products 
  title="Products"
  src={data}
  alternateCols={true}
/>    
```

### Cart
The Cart component expects an array containing objects pertaining to a customer order.

```  
<Cart order={shoppingBasket} />
```

## Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:8080
npm run dev

# Build for production
npm run build
```

## Cypress

```
# Run
node_modules/.bin/cypress open
```

### Author

Kyri Kyriacou

### Version

1.0.0

### License

This project is licensed under the MIT License
