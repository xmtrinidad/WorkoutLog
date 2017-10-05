import { Post } from './post';

const weights = 'https://png.icons8.com/ez-curl-bar/ios7/50';
const run = 'https://png.icons8.com/exercise/ios7/50';
const bike = 'https://png.icons8.com/spinning/ios7/50';

 export const POSTS: Post[] = [
  {
    id: 1,
    title: 'This is my first workout',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Maecenas ac metus vitae leo fringilla finibus quis id nunc. ' +
    'Nulla sit amet sapien vitae',
    categories: [weights, run, bike],
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
     title: 'Day 2 workout Example',
     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
     'Maecenas ac metus vitae leo ',
     categories: [run],
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
     title: 'Workout 3',
     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
     'Maecenas ac metus vitae leo fringilla finibus quis id nunc. ' +
     'Nulla sit amet sapien vitae odio dapibus aliquet',
     categories: [weights, bike],
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
