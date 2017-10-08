import { Post } from './post';
import { Category } from './post';

const arms = 'https://png.icons8.com/muscle/ios7/65';
const back = 'https://png.icons8.com/pullups/ios7/65';
const chest = 'https://png.icons8.com/bench-press/ios7/65';
const shoulders = 'https://png.icons8.com/shoulders/ios7/50';
const legs = 'https://png.icons8.com/squats/ios7/50';
const abs = 'https://png.icons8.com/pilates/ios7/50';

export const CATEGORIES: Category[] = [
  { muscle: 'Arms', src: arms, selected: false },
  { muscle: 'Back', src: back, selected: false },
  { muscle: 'Chest', src: chest, selected: false },
  { muscle: 'Shoulders', src: shoulders, selected: false },
  { muscle: 'Legs', src: legs, selected: false },
  { muscle: 'Abs', src: abs, selected: false }
];

 export const POSTS: Post[] = [
  {
    id: 1,
    date: '10/07/2017',
    title: 'This is my first workout',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Maecenas ac metus vitae leo fringilla finibus quis id nunc. ' +
    'Nulla sit amet sapien vitae',
    categories: [chest, back],
    exercises: [
      {
        exercise: 'Machine Fly',
        numberOfSets: 3,
        sets: [
          {
            setNumber: 1,
            weight: 25,
            reps: 10
          },
          {
            setNumber: 2,
            weight: 35,
            reps: 7
          },
          {
            setNumber: 3,
            weight: 40,
            reps: 6
          }
        ]
      },
      {
        exercise: 'Bench Press',
        numberOfSets: 4,
        sets: [
          {
            setNumber: 1,
            weight: 135,
            reps: 10
          },
          {
            setNumber: 2,
            weight: 155,
            reps: 8
          },
          {
            setNumber: 3,
            weight: 175,
            reps: 6
          },
          {
            setNumber: 4,
            weight: 185,
            reps: 5
          },
          {
            setNumber: 5,
            weight: 195,
            reps: 3
          }
        ]
      },
      {
        exercise: 'Incline Dumbbell Press',
        numberOfSets: 4,
        sets: [
          {
            setNumber: 1,
            weight: 60,
            reps: 5
          },
          {
            setNumber: 2,
            weight: 55,
            reps: 7
          },
          {
            setNumber: 3,
            weight: 65,
            reps: 6
          },
          {
            setNumber: 4,
            weight: 75,
            reps: 4
          }
        ]
      },
      {
        exercise: 'Bench Press',
        numberOfSets: 4,
        sets: [
          {
            setNumber: 1,
            weight: 135,
            reps: 10
          },
          {
            setNumber: 2,
            weight: 155,
            reps: 8
          },
          {
            setNumber: 3,
            weight: 175,
            reps: 6
          },
          {
            setNumber: 4,
            weight: 185,
            reps: 5
          },
          {
            setNumber: 5,
            weight: 195,
            reps: 3
          }
        ]
      },
      {
        exercise: 'Bench Press',
        numberOfSets: 4,
        sets: [
          {
            setNumber: 1,
            weight: 135,
            reps: 10
          },
          {
            setNumber: 2,
            weight: 155,
            reps: 8
          },
          {
            setNumber: 3,
            weight: 175,
            reps: 6
          },
          {
            setNumber: 4,
            weight: 185,
            reps: 5
          },
          {
            setNumber: 5,
            weight: 195,
            reps: 3
          }
        ]
      }
    ]
  },
   {
     id: 2,
     date: '10/06/2017',
     title: 'Day 2 workout Example',
     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
     'Maecenas ac metus vitae leo ',
     categories: [legs],
     exercises: [
       {
         exercise: 'Treadmill',
         numberOfSets: 3,
         sets: [
           {
             setNumber: 1,
             weight: 25,
             reps: 10
           },
           {
             setNumber: 2,
             weight: 35,
             reps: 7
           },
           {
             setNumber: 3,
             weight: 40,
             reps: 6
           }
         ]
       }
     ]
   },
   {
     id: 3,
     date: '10/05/2017',
     title: 'Workout 3',
     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
     'Maecenas ac metus vitae leo fringilla finibus quis id nunc. ' +
     'Nulla sit amet sapien vitae odio dapibus aliquet',
     categories: [arms, shoulders],
     exercises: [
       {
         exercise: 'Squats',
         numberOfSets: 4,
         sets: [
           {
             setNumber: 1,
             weight: 135,
             reps: 15
           },
           {
             setNumber: 2,
             weight: 185,
             reps: 7
           },
           {
             setNumber: 3,
             weight: 220,
             reps: 6
           },
           {
             setNumber: 4,
             weight: 225,
             reps: 6
           }
         ]
       },
       {
         exercise: 'Lunges',
         numberOfSets: 3,
         sets: [
           {
             setNumber: 1,
             weight: 135,
             reps: 10
           },
           {
             setNumber: 2,
             weight: 155,
             reps: 8
           },
           {
             setNumber: 3,
             weight: 175,
             reps: 6
           }
         ]
       },
       {
         exercise: 'Leg Press',
         numberOfSets: 4,
         sets: [
           {
             setNumber: 1,
             weight: 270,
             reps: 12
           },
           {
             setNumber: 2,
             weight: 360,
             reps: 10
           },
           {
             setNumber: 3,
             weight: 450,
             reps: 6
           },
           {
             setNumber: 4,
             weight: 450,
             reps: 6
           }
         ]
       },
       {
         exercise: 'Leg Ext',
         numberOfSets: 4,
         sets: [
           {
             setNumber: 1,
             weight: 70,
             reps: 15
           },
           {
             setNumber: 2,
             weight: 85,
             reps: 12
           },
           {
             setNumber: 3,
             weight: 95,
             reps: 10
           },
           {
             setNumber: 4,
             weight: 95,
             reps: 10
           },
           {
             setNumber: 5,
             weight: 85,
             reps: 15
           }
         ]
       }
     ]
   }
];
