<template>
  <h1>마이페이지 입니다</h1>
   <VCalendar expanded
    :rows="2"   
    :attributes='attributes'
  
  />
</template>

<script setup>
import { ref, computed } from 'vue';

const todos = ref([
  {
    description: 'Take Noah to basketball practice.',
    isComplete: false,
    dates: [
            new Date(2018, 0, 1),           // Jan 1st
            new Date(2018, 0, 10),],
    color: 'blue',
  },
  {
    description: 'Tummmmme.',
    isComplete: false,
    dates: [
            new Date(2018, 0, 1),           // Jan 1st
            new Date(2018, 0, 1),      
            new Date(2018, 0, 1),          
            new Date(2018, 0, 10),
            {start: new Date(2018, 0, 1),  // Jan 1st
            end: new Date(2018, 0, 4)},
            {start: new Date(2018, 0, 1),  // Jan 1st
            end: new Date(2018, 0, 4)},
            {start: new Date(2018, 0, 1),  // Jan 1st
            end: new Date(2018, 0, 4)},
            {start: new Date(2018, 0, 1),  // Jan 1st
            end: new Date(2018, 0, 4)},
            {start: new Date(2018, 0, 1),  // Jan 1st
            end: new Date(2018, 0, 4)},    // - Jan 4th
           ],
    color: 'red',
  },  
  
]);

const attributes = computed(() => [
  // Attributes for todos
  ...todos.value.map(todo => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      ...(todo.isComplete && { class: 'opacity-75' }),
    },
    popover: {
      label: todo.description,
       
    },
  })),
]);

// export default {
//   data() {
//     return {
//       attributes: [
//         {
//           dot: {
//             color: 'red', // Red dot
//           },
//           dates: [
//             new Date(2018, 0, 1),           // Jan 1st
//             new Date(2018, 0, 10),          // Jan 10th
//             new Date(2018, 0, 22),          // Jan 22nd
//             new Date(2018, 1, 6),           // Feb 6th
//             new Date(2018, 1, 16),          // Feb 16th
//           ],
//         },
//         {
//           highlight: {
//             color: 'red',
//             fillMode: 'light',
            
//           },
          
//           dates: [
//             {
//               start: new Date(2018, 0, 1),  // Jan 1st
//               end: new Date(2018, 0, 4),    // - Jan 4th
//             },
//             new Date(2018, 1, 6),           // Feb 6th
//             new Date(2018, 1, 23),          // Feb 23rd
//           ],
//         },       
//         {
//           highlight: {
//             color: 'purple',
//             fillMode: 'light'
//           },
//           dates: [
          
//             new Date(2018, 0, 23),          // Jan 28th
//             new Date(2018, 1, 4),           // Feb 4th
//             {
//               start: new Date(2018, 0, 3), // Feb 16th
//               end: new Date(2018, 0, 5),   // - Feb 17th
//             },
//           ],
//         },
//       ],
//     };
//   },
// };
</script>

<style></style>
