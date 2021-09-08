
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


// Foreign Umpire Analysis is here
fetch('data/json/umpire_analysis.json')
  .then(response => response.json())
  .then(data => {
      Highcharts.chart('umpire-analysis', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Umpire Count by Countries'
          },
          xAxis: {
              type: 'category',
          },
          yAxis: {
              title: {
                  text: 'Count'
            }
          },
          series: [{
              name: 'Umpire Count',
              data: Object.entries(data).sort((a, b) => b[1] - a[1])
          }]
      });
  });


// Matches Played By Teams in Every Season is here
fetch('data/json/matches_played_by_season.json')
  .then(response => response.json())
  .then(data => {

    // Create a temprary array to store all year and teams
      let boolean = false;
      let all_years = [];
      let all_teams = [];

      for (item of Object.entries(data)){
            if (!boolean){
                for (i of Object.entries(item[1])){
                    all_years.push(i[0])
                }
                boolean = true
            }
            all_teams.push(item[0])
        }

    //   To Store all series for plotting
      let series = [];

      for (year of all_years){
          let values = []
          for (team of all_teams){
              values.push(data[team][year])
          }
          series.push({
              name: `${year}`,
              data: values
          })
      }


      Highcharts.chart('matches-played-by-team', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Matches Played By Teams in Seasons'
          },
          xAxis: {
              type: 'category',
              categories: all_teams
          },
          yAxis: {
            title: {
                  text: 'Count'
            },
            stackLabels: {
                enabled: true
            }
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              dataLabels: {
                enabled: true
              }
            }
          },
          series: series
      });
  });

  