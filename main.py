import json

import read


# Main function
def main():

    # Get data total runs made by teams
    total_run_by_team = read.get_total_runs_by_team()

    # Save dictionary in json formate
    with open("data/json/total_run_by_team.json", "w") as file:
        json.dump(total_run_by_team, file)

    # Get data player runs made by teams
    player_runs_by_team = read.get_player_runs_by_team('Royal Challengers Bangalore')

    # Save dictionary in json formate
    with open("data/json/player_runs_by_team.json", "w") as file:
        json.dump(player_runs_by_team, file)

    # Get data for umpire analysis
    umpire_analysis = read.foreign_umprire_analysis()

    # Save dictionary in json formate
    with open("data/json/umpire_analysis.json", "w") as file:
        json.dump(umpire_analysis, file)

    # Get data for number of matches played by team by season
    matches_played_by_season, _ = read.played_by_team_by_season()

    # Save dictionary in json formate
    with open("data/json/matches_played_by_season.json", "w") as file:
        json.dump(matches_played_by_season, file)


# If this is the runnig file.
if __name__ == '__main__':
    main()
