//Data store is an array of objects containing each question & answer form with corresponding img & alt

const STORE = [
               {
               title: 'What is a baby bear called?',
               answers: [
                         'baby',
                         'cub',
                         'polliwog',
                         'neonate'
                         ],
               correctAnswer: 'cub',
               img: 'https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7cce16b11befb3dc6ed56074727b7b6&auto=format&fit=crop&w=750&q=80',
               alt: 'Bear image'
               },
               {
               title: 'What is a baby bee called?',
               answers: [
                         'kid',
                         'bee',
                         'larva',
                         'cub'
                         ],
               correctAnswer: 'larva',
               img: 'https://sweettootsco.files.wordpress.com/2018/09/bee.png',
               alt: 'Bees on a flower image'
               },
               {
               title: 'What is a baby cicada called?',
               answers: [
                         'nymph',
                         'piglet',
                         'kit',
                         'fry'
                         ],
               correctAnswer: 'nymph',
               img: 'https://images.unsplash.com/photo-1518685632785-9825b0a0e2a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73e30027ccb9949630467a29555abd34&auto=format&fit=crop&w=900&q=60',
               alt: 'Cicada on a tree image'
               },
               {
               title: 'What is a baby deer called?',
               answers: [
                         'geese',
                         'fawn',
                         'foal',
                         'pup'
                         ],
               correctAnswer: 'fawn',
               img: 'https://sweettootsco.files.wordpress.com/2018/09/deer.png',
               alt: 'Deer in sunset image'
               },
               {
               title: 'What is a baby donkey called?',
               answers: [
                         'foal',
                         'kitten',
                         'farrow',
                         'kit'
                         ],
               correctAnswer: 'foal',
               img: 'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a48ce90544794a96507c4797450584a7&auto=format&fit=crop&w=1100&q=60',
               alt: 'Donkey near flower bushes image'
               },
               {
               title: 'What is a baby eagle called?',
               answers: [
                         'fledgling',
                         'elver',
                         'owlet',
                         'calf'
                         ],
               correctAnswer: 'fledgling',
               img: 'https://images.unsplash.com/photo-1517672350427-6b2bc984984a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27b2846752280e19c8e9dced8511b8bb&auto=format&fit=crop&w=600&q=60',
               alt: 'Two eagles image'
               },
               {
               title: 'What is a baby goat called?',
               answers: [
                         'whelp',
                         'pig',
                         'poult',
                         'kid'
                         ],
               correctAnswer: 'kid',
               img: 'https://images.unsplash.com/photo-1533318087102-b3ad366ed041?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7c44c0f0444b034b078d48bb23aeb69&auto=format&fit=crop&w=600&q=60',
               alt: 'Baby goat image'
               },
               {
               title: 'What is a baby goose called?',
               answers: [
                         'geese',
                         'mice',
                         'gosling',
                         'chick'
                         ],
               correctAnswer: 'gosling',
               img: 'https://images.unsplash.com/photo-1508451145896-a9fb022e9fdb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b8cfab894bad3c2741270b7a9bf987a&auto=format&fit=crop&w=600&q=60',
               alt: 'Goose Image'
               },
               {
               title: 'What is a baby kangaroo called?',
               answers: [
                         'kitten',
                         'joey',
                         'ephyna',
                         'pupa'
                         ],
               correctAnswer: 'joey',
               img: 'https://images.unsplash.com/photo-1479092945463-68586beeacde?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=996415ea5f92b9824120b596fdec9cf9&auto=format&fit=crop&w=600&q=60',
               alt: 'Baby kangaroo and mom'
               },
               {
               title: 'What is a baby alpaca called?',
               answers: [
                         'leveret',
                         'cria',
                         'farrow',
                         'billy'
                         ],
               correctAnswer: 'cria',
               img: 'https://images.unsplash.com/photo-1526308422422-6a57b9567eff?ixlib=rb-0.3.5&s=560512cfef2cc4eeb072a4155e1bbb2b&auto=format&fit=crop&w=600&q=60',
               alt: 'Alpaca on a mountain'
               }
               ];
