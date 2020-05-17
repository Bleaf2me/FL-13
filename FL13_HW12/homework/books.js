const data = [
  {
    'id': '1',
    'title': 'Becoming',
    'author': 'Michelle Obama',
    'url': 'https://secure.coverart.bookstores.com/large/138/1-9781524763138.jpg',
    'plot': `An intimate, powerful, and inspiring memoir by the former First Lady of the United States In
    a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic 
    and compelling women of our era. As First Lady of the United States of America--the first African-American
    to serve in that role--she helped create the most welcoming and inclusive White House in history.`
  },
  {
    'id': '2',
    'title': 'On Painting',
    'author': 'Leon Battista Alberti',
    'url': 'https://secure.coverart.bookstores.com/large/319/1-9780140433319.jpg',
    'plot': `Leon Battista Alberti was born in Genoa, Italy, on February 18, 1404. His father was a major 
    figure in the Florentine political world, and Alberti received a quality education. He studied Latin in
    Padua and completed his formal training at the University of Bologna, where he received a doctorate in
    canon law in 1428. In 1432, as a secretary in the Papal Chancery in Rome, Alberti became acquainted
    with Tommaso Parentucelli who was later elected Pope Nicholas V. Alberti worked for the Pope,
    studying law cases for seven years.`
  },
  {
    'id': '3',
    'title': 'Educated A Memoir',
    'author': 'Tara Westover',
    'url': 'https://secure.coverart.bookstores.com/large/504/1-9780399590504.jpg',
    'plot': `A searing, unforgettable memoir in the tradition of The Liars Club about a young girl who,
    raised by Mormon survivalists in the mountains of Idaho and forbidden to go to school, defies her
    family and earns a PhD from Cambridge University.`
  }
];

if (!localStorage.getItem('bookList')) {
  localStorage.setItem('bookList', JSON.stringify(data));
}

