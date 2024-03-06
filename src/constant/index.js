import { deliveryImage, pickMeals, chooseImage , john, ratings } from '../assets';

export const navLinks = [
    { href: '/home',  label: 'Home' },
    { href: '/about',  label: 'About' },
    { href: '/testimonials',  label: 'Testimonials' },
    { href: '/contact' , label: 'Contact' }
  ];

  export const works = [
    {thumbnail: chooseImage, title: 'Choose your meals', text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'},
    {thumbnail: deliveryImage, title: 'Fast delivery', text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'},
    {thumbnail: pickMeals, title: 'Pick your favorite meal', text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis.'}
  ];

  export const testimonial = [
    {name: 'John doe', image: john, rating: ratings, text: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam. '},
  ]

  export const footer = [
    { title:'Quality',
      links:[
        {
          label:'Help',
        },
        {
          label:'Share',
        },
        {
          label:'Carrier',
        }
      ]},
      { title:'0325-4070762',
      links:[
        {
          label:'umairahmad.ua1999@gmail.com',
        }
      ]},
      {
        title:'Terms & Conditions',
        links:[
          {
            label:'Privacy Policy',
          }
        ]
      }
  ]