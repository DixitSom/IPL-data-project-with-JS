
// This Will plot Total Runs Scored By teams.
fetch('data/json/total_run_by_team.json')
  .then(response => response.json())
  .then(data => {
      Highcharts.chart('total-run-by-team', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Total Runs Scored By Teams'
          },
          xAxis: {
              type: 'category',
          },
          yAxis: {
              title: {
                  text: 'Runs Scored'
            }
          },
          series: [{
              name: 'Total Runs',
              data: Object.entries(data).sort((a, b) => b[1] - a[1])
          }]
      });
  });

// Total Runs by player scored for Royal Challanger Banglore is here
fetch('data/json/player_runs_by_team.json')
  .then(response => response.json())
  .then(data => {
      Highcharts.chart('run-by-players', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Runs Scored By Players for RCB'
          },
          xAxis: {
              type: 'category',
          },
          yAxis: {
              title: {
                  text: 'Runs Scored'
            }
          },
          series: [{
              name: 'Total Runs',
              data: Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, 20)
          }]
      });
  });

// $(document).ready( ()=> {
//     Highcharts.chart('container', {
//         chart: {
//           type: 'column'
//         },
//         // title: {
//         //   text: 'World\'s largest cities per 2017'
//         // },
//         // subtitle: {
//         //   text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
//         // },
//         // xAxis: {
//         //   type: 'category',
//         //   labels: {
//         //     rotation: -45,
//         //     style: {
//         //       fontSize: '13px',
//         //       fontFamily: 'Verdana, sans-serif'
//         //     }
//         //   }
//         // },
//         // yAxis: {
//         //   min: 0,
//         //   title: {
//         //     text: 'Population (millions)'
//         //   }
//         // },
//         // legend: {
//         //   enabled: false
//         // },
//         // tooltip: {
//         //   pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
//         // },
//         series: [{
//           name: 'Population',
//           data: [
//             ['Shanghai', 24.2],
//             ['Beijing', 20.8],
//             ['Karachi', 14.9],
//             ['Shenzhen', 13.7],
//             ['Guangzhou', 13.1],
//             ['Istanbul', 12.7],
//             ['Mumbai', 12.4],
//             ['Moscow', 12.2],
//             ['São Paulo', 12.0],
//             ['Delhi', 11.7],
//             ['Kinshasa', 11.5],
//             ['Tianjin', 11.2],
//             ['Lahore', 11.1],
//             ['Jakarta', 10.6],
//             ['Dongguan', 10.6],
//             ['Lagos', 10.6],
//             ['Bengaluru', 10.3],
//             ['Seoul', 9.8],
//             ['Foshan', 9.3],
//             ['Tokyo', 9.3]
//           ],
//         //   dataLabels: {
//         //     enabled: true,
//         //     rotation: -90,
//         //     color: '#FFFFFF',
//         //     align: 'right',
//         //     format: '{point.y:.1f}', // one decimal
//         //     y: 10, // 10 pixels down from the top
//         //     style: {
//         //       fontSize: '13px',
//         //       fontFamily: 'Verdana, sans-serif'
//         //     }
//         //   }
//         }]
//       });
// });
  