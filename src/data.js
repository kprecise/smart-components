
// Navigation
export const navigationLinks = [
  {
    id: 'home', 
    name: 'Home', 
    href: '/home', 
    secondaryNav: false
  },
  {
    id: 'about',
    name: 'About', 
    href: '/about', 
    secondaryNav: true,
    secondaryNavItem: [
      {id: 'link1', name: 'link1', href: '#link1', alt: 'link1'},
      {id: 'link2', name: 'link2', href: '#link2', alt: 'link2'}
    ]
  }
];

// Articles
export const JSONData = [
  {
    id: 1,
    heading: 'Lorem ipsum dolor sit amet',
    content: 'Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Purus sit amet luctus venenatis lectus. Non enim praesent elementum facilisis leo vel. Nullam ac tortor vitae purus faucibus ornare. Diam sollicitudin tempor id eu nisl nunc mi. Ornare suspendisse sed nisi lacus. ',
    image:'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com',
    link: {
      href: '/',
      label: 'See this',
      alt: 'See this'
    }
  },
  {
    id: 2,
    heading: 'Turpis egestas sed tempus urna et',
    content: 'Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Vestibulum lectus mauris ultrices eros in. ',
    image:'https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com',
    link: {
      href: '/',
      label: 'Further reading',
      alt: 'Further reading'
    }
  },
  {
    id: 3,
    heading: 'Ipsum a arcu cursus vitae',
    content: 'Ornare quam viverra orci sagittis eu. Eget dolor morbi non arcu. Amet mattis vulputate enim nulla aliquet porttitor. Ultrices tincidunt arcu non sodales neque sodales ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. ',
    image:'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com',
    link: {
      href: '/',
      label: 'Understand concept',
      alt: 'Understand concept'
    }
  }
];

// Cart
export const shoppingBasket = [
  {
    id: 1,
    heading: 'Box of chocolates',
    image:'https://via.placeholder.com/50/0000FF/808080?Text=Digital.com',
    price: 2.99,
    quantity: 2
  },
  {
    id: 2,
    heading: 'Travel bottles',
    image:'https://via.placeholder.com/50/CC0000/808080?Text=Digital.com',
    price: 6.99,
    quantity: 1
  }
]

// Carousel
export const carouselData = [
  {id: 1, background: 'https://via.placeholder.com/1110x400/E5E530', title: 'This is cool!'},
  {id: 2, background: 'https://via.placeholder.com/1110x400/808080/000000', title: 'Another heading!'},
  {id: 3, background: 'https://via.placeholder.com/1110x400/17BA0E/000000', title: 'More news!'},
  {id: 4, background: 'https://via.placeholder.com/1110x400/C9265F/FFFFFF', title: 'Fascinating stuff!'}
];

export const carouselSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};