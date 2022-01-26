const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set', 'Unit'],
      datasets: [{
         label: 'Pageviews',
         data: [31000, 26000, 12000, 22000, 28000, 32000, 23000],
         backgroundColor: [
            '#D6CF6E',
            '#D6CF6E',
            '#D6CF6E',
            '#D6CF6E',
            '#D6CF6E',
            '#D6CF6E'
         ],
         borderWidth: 16,
      }]
   },
   options: {}
});

const ctx2 = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx2, {
   type: 'line',
   data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set', 'Unit'],
      datasets: [{
         label: 'Ghost Variant',
         data: [180, 140, 52, 51, 100, 101, 53],
         backgroundColor: [
            '#14A38B',
         ],
         borderColor: [
            '#14A38B',
            '#14A38B',
            '#14A38B',
            '#14A38B',
            '#14A38B',
            '#14A38B'
         ],
         borderWidth: 2,
      }]
   },
   options: {}
});

const ctx3 = document.getElementById('dountChart').getContext('2d');
const dountChart = new Chart(ctx3, {
   type: 'doughnut',
   data: {
      labels: ['Green', 'Yellow', 'Blue'],
      datasets: [{
         data: [40, 20, 40],
         backgroundColor: [
            '#14A38B',
            '#D6CF6E',
            '#0880AE'
         ],
         borderWidth: 1,
      }]
   },
   options: {}
});