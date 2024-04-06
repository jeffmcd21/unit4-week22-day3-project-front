
const BatterStats = () => {
  return (
    <div>
        <h2>Batter Stats</h2>
        <p>A sample of the batter stats & information in development</p>
        <table className="batter-fields">
          <thead>
            <tr>
              <th>Full_Name</th>
              <th>Season (Year)</th>
              <th>Batting Avg</th>
              <th>Home Runs</th>
              <th>RBI</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron Judge</td><td>2018</td><td>0.278</td><td>27</td><td>67</td></tr>
            <tr><td>Aaron Judge</td><td>2019</td><td>0.272</td><td>27</td><td>55</td></tr>
            <tr><td>Aaron Judge</td><td>2020</td><td>0.257</td><td>9</td><td>22</td></tr>
            <tr><td>Aaron Judge</td><td>2021</td><td>0.287</td><td>39</td><td>98</td></tr>
            <tr><td>Aaron Judge</td><td>2022</td><td>0.311</td><td>62</td><td>131</td></tr>

            <tr><td>Freddie Freeman</td><td>2018</td><td>0.309</td><td>23</td><td>98</td></tr>
            <tr><td>Freddie Freeman</td><td>2019</td><td>0.295</td><td>38</td><td>121</td></tr>
            <tr><td>Freddie Freeman</td><td>2020</td><td>0.341</td><td>13</td><td>53</td></tr>
            <tr><td>Freddie Freeman</td><td>2021</td><td>0.300</td><td>31</td><td>83</td></tr>
            <tr><td>Freddie Freeman</td><td>2022</td><td>0.325</td><td>21</td><td>100</td></tr>

            <tr><td>Miguel Cabrera</td><td>2018</td><td>0.299</td><td>3</td><td>22</td></tr>
            <tr><td>Miguel Cabrera</td><td>2019</td><td>0.282</td><td>12</td><td>59</td></tr>
            <tr><td>Miguel Cabrera</td><td>2020</td><td>0.250</td><td>10</td><td>35</td></tr>
            <tr><td>Miguel Cabrera</td><td>2021</td><td>0.256</td><td>15</td><td>75</td></tr>
            <tr><td>Miguel Cabrera</td><td>2022</td><td>0.254</td><td>5</td><td>43</td></tr>

            <tr><td>Mike Trout</td><td>2018</td><td>0.312</td><td>39</td><td>79</td></tr>
            <tr><td>Mike Trout</td><td>2019</td><td>0.291</td><td>45</td><td>104</td></tr>
            <tr><td>Mike Trout</td><td>2020</td><td>0.281</td><td>17</td><td>46</td></tr>
            <tr><td>Mike Trout</td><td>2021</td><td>0.333</td><td>8</td><td>18</td></tr>
            <tr><td>Mike Trout</td><td>2022</td><td>0.283</td><td>40</td><td>80</td></tr>

            <tr><td>Mookie Betts</td><td>2018</td><td>0.346</td><td>32</td><td>80</td></tr>
            <tr><td>Mookie Betts</td><td>2019</td><td>0.295</td><td>29</td><td>80</td></tr>
            <tr><td>Mookie Betts</td><td>2020</td><td>0.292</td><td>16</td><td>39</td></tr>
            <tr><td>Mookie Betts</td><td>2021</td><td>0.264</td><td>23</td><td>58</td></tr>
            <tr><td>Mookie Betts</td><td>2022</td><td>0.269</td><td>35</td><td>82</td></tr>

            </tbody>
        </table>
        <h3>Complete List of Anticipated Data Points</h3>
        <p className="batter-fields">("last_name", "first_name", "full_name", "player_id", "year", "player_age", "b_ab", "b_total_pa", "b_total_hits", "b_single", "b_double", "b_triple", "b_home_run", "b_strikeout", "b_walk", "b_k_percent", "b_bb_percent", "batting_avg", "slg_percent", "on_base_percent", "on_base_plus_slg", "isolated_power", "b_rbi", "b_lob", "b_total_bases", "r_total_caught_stealing", "r_total_stolen_base", "b_ab_scoring", "b_ball", "b_called_strike", "b_catcher_interf", "b_foul", "b_foul_tip", "b_game", "b_gnd_into_dp", "b_gnd_into_tp", "b_gnd_rule_double", "b_hit_by_pitch", "b_hit_ground", "b_hit_fly", "b_hit_into_play", "b_hit_line_drive", "b_hit_popup", "b_out_fly", "b_out_ground", "b_out_line_drive", "b_out_popup", "b_intent_ball", "b_intent_walk", "b_interference", "b_pinch_hit", "b_pinch_run", "b_pitchout", "b_played_dh", "b_sac_bunt", "b_sac_fly", "b_swinging_strike", "r_caught_stealing_2b", "r_caught_stealing_3b", "r_caught_stealing_home", "r_defensive_indiff", "r_interference", "r_pickoff_1b", "r_pickoff_2b", "r_pickoff_3b", "r_run", "r_stolen_base_2b", "r_stolen_base_3b", "r_stolen_base_home", "b_total_ball", "b_total_sacrifices", "b_total_strike", "b_total_swinging_strike", "b_total_pitches", "r_stolen_base_pct", "r_total_pickoff", "b_reached_on_error", "b_walkoff", "b_reached_on_int")</p>
    </div>
  )
}

export default BatterStats