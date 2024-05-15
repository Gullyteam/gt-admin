import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './scoreBoard.css'; // Adjust the path based on your project structure
import PageContainer from 'src/components/container/PageContainer';
import { uniqueId } from 'lodash';

//s3 bucket url
const S3bucketUrl = process.env.REACT_APP_PROFILE_S3_BUCKET_URL;

const ScoreBoard = () => {
  const [scoreBoard, setscoreBoard] = useState(null);
  const [inningsrunning, setInningsRunning] =useState(null)

  

  useEffect(() => {
    // Replace 'http://your-socket-server-url' with the actual URL of your WebSocket server
    const socket = io('http://13.233.149.139:5001');

    const roomId = "66139d66d93bc338b2f4bee7";
    // Emit an event to join the room
    socket.emit('joinRoom', roomId);

    // Event listener for when a message is received from the server
    socket.on('receiveMessage', (data) => {
      // console.log('Message from server:', data);
      setscoreBoard(JSON.parse(data.ScoreDetails));

    });

    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      socket.disconnect();
      console.log('Disconnected from the server');
    };
  }, [scoreBoard]);

  if (scoreBoard ? console.log('score', scoreBoard) : console.log('empty'));

  return (
    <PageContainer title="Match List" description="this is Sample page">
      {scoreBoard ? (
        <Grid container spacing={2}>
          <div className="main">
            <div className="matchdetails">
              <div className="team">
                <img src={S3bucketUrl + scoreBoard.scoreBoard.team1.teamLogo} alt="" />
                <h3>{scoreBoard.scoreBoard.team1.teamName}</h3>
              </div>
              <div className="score">
                <h5>Innings{scoreBoard.scoreBoard.currentInnings}</h5>
                <h6>
                  {scoreBoard.scoreBoard.team1._id == scoreBoard.scoreBoard.tossWonBy.$oid
                    ? scoreBoard.scoreBoard.team1.teamName +
                      'win Toss and elected to ' +
                      scoreBoard.scoreBoard.electedTo
                    : scoreBoard.scoreBoard.team2.teamName +
                      'win Toss and elected to ' +
                      scoreBoard.scoreBoard.electedTo}
                </h6>

                <h3>{scoreBoard.scoreBoard.team1.teamName}</h3>
                <h1>{scoreBoard.scoreBoard.currentInningsScore}/4</h1>
                <h3>overs : {scoreBoard.scoreBoard.totalOvers}</h3>
              </div>
              <div className="team">
                <img src={S3bucketUrl + scoreBoard.scoreBoard.team2.teamLogo} alt="" />
                <h3>{scoreBoard.scoreBoard.team2.teamName}</h3>
              </div>
            </div>

            <div className="matchdetails" >
              {/* batting */}
              <table>
                <thead>
                  <tr>
                    <th>PlayerName</th>
                    <th>Run</th>
                    <th>Ball</th>
                    <th>Fours</th>
                    <th>Sixs</th>
                    <th>Strike Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreBoard.scoreBoard.team2.players.map((player) => {
                    if (player._id === scoreBoard.scoreBoard.strikerId.$oid || player._id === scoreBoard.scoreBoard.nonStrikerId.$oid) {
                      return (
                        <tr key={player._id} style={{ backgroundColor: player._id === scoreBoard.scoreBoard.strikerId.$oid ? '#90ee90' : 'transparent' }}>
                          <td>{player.name}</td>
                          <td>{player.batting.runs}</td>
                          <td>{player.batting.balls}</td>
                          <td>{player.batting.fours}</td>
                          <td>{player.batting.sixes}</td>
                          <td>{player.batting.strikeRate}</td>
                        </tr>
                      );
                    } else{
                      return null; // or any other fallback, or remove this line if you want to skip other players
                    }
                  })}
                </tbody>
              </table>

              {/* Bowling */}
              <table>
                <thead>
                  <tr>
                    <th>PlayerName</th>
                    <th>Runs</th>
                        <th>Wide</th>
                        <th>4</th>
                        <th>6</th>
                        <th>Wicket</th>
                        <th>Median</th>
                        <th>Economy</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreBoard.scoreBoard.team1.players.map((player) => {
                    if (player._id === scoreBoard.scoreBoard.bowlerId.$oid ) {
                      return (
                        <tr key={player._id} style={{ backgroundColor: player._id === scoreBoard.scoreBoard.strikerId.$oid ? '#90ee90' : 'transparent' }}>
                          <td>{player.name}</td>
                          <td>{player.bowling.runs}</td>
                            <td>{player.bowling.wides}</td>
                            <td>{player.bowling.fours}</td>
                            <td>{player.bowling.sixes}</td>

                            <td>{player.bowling.wickets}</td>
                            <td>{player.bowling.maidens}</td>
                            <td>{player.bowling.economy}</td>
                        </tr>
                      );
                    } else{
                      return null; // or any other fallback, or remove this line if you want to skip other players
                    }
                  })}
                </tbody>
              </table>
            </div>

            <div className="InningsBox">
              <div className="Innings">
                <h4>Innings1</h4>
                <h3>Batting</h3>
                <div className="batsman">
                  <table>
                    <tbody>
                      <tr>
                        <th>PlayerName</th>
                        <th>Role</th>
                        <th>Run</th>
                        <th>Ball</th>
                        <th>Fours</th>
                        <th>Sixs</th>
                        <th>Strike Rate</th>
                        <th>Wicket</th>
                      </tr>

                      {scoreBoard.scoreBoard.team1.players.map((player, index) => {
                        return (
                          <tr key={uniqueId()}>
                            <td>{player.name}</td>
                            <td>{player.role}</td>
                            <td>{player.batting.runs}</td>
                            <td>{player.batting.balls}</td>
                            <td>{player.batting.fours}</td>
                            <td>{player.batting.sixes}</td>
                            <td>{player.batting.strikeRate}</td>
                            <td>{player.batting.outType}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="Innings">
                <h4>Innings1</h4>
                <h3>Bowling</h3>
                <div className="batsman">
                  <table>
                    <tbody>
                      <tr>
                        <th>Runs</th>
                        {/* <th>O</th> */}
                        <th>Wide</th>
                        <th>4</th>
                        <th>6</th>
                        <th>Wicket</th>
                        <th>Median</th>
                        <th>Economy</th>
                      </tr>

                      {scoreBoard.scoreBoard.team1.players.map((player, index) => {
                        return (
                          <tr key={uniqueId()}>
                            <td>{player.bowling.runs}</td>
                            {/* <td >{player.bowling.overs}</td> */}
                            <td>{player.bowling.wides}</td>
                            <td>{player.bowling.fours}</td>
                            <td>{player.bowling.sixes}</td>

                            <td>{player.bowling.wickets}</td>
                            <td>{player.bowling.maidens}</td>
                            <td>{player.bowling.economy}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="InningsBox">
              <div className="Innings">
                <h4>Innings2</h4>
                <h3>Batting</h3>
                <div className="batsman">
                  <table>
                    <tbody>
                      <tr>
                        <th>PlayerName</th>
                        <th>Role</th>
                        <th>Run</th>
                        <th>Ball</th>
                        <th>Fours</th>
                        <th>Sixs</th>
                        <th>Strike Rate</th>
                        <th>Wicket</th>
                      </tr>

                      {scoreBoard.scoreBoard.team2.players.map((player, index) => {
                        return (
                          <tr key={uniqueId()}>
                            <td>{player.name}</td>
                            <td>{player.role}</td>
                            <td>{player.batting.runs}</td>
                            <td>{player.batting.balls}</td>
                            <td>{player.batting.fours}</td>
                            <td>{player.batting.sixes}</td>
                            <td>{player.batting.strikeRate}</td>
                            <td>{player.batting.outType}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="Innings">
                <h4>Innings2</h4>
                <h3>Bowling</h3>
                <div className="batsman">
                  <table>
                    <tbody>
                      <tr>
                        <th>Runs</th>
                        {/* <th>O</th> */}
                        <th>Wide</th>
                        <th>4</th>
                        <th>6</th>
                        <th>Wicket</th>
                        <th>Median</th>
                        <th>Economy</th>
                      </tr>

                      {scoreBoard.scoreBoard.team2.players.map((player, index) => {
                        return (
                          <tr key={uniqueId()}>
                            <td>{player.bowling.runs}</td>
                            {/* <td >{player.bowling.overs}</td> */}
                            <td>{player.bowling.wides}</td>
                            <td>{player.bowling.fours}</td>
                            <td>{player.bowling.sixes}</td>

                            <td>{player.bowling.wickets}</td>
                            <td>{player.bowling.maidens}</td>
                            <td>{player.bowling.economy}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Grid>
      ) : (
        <h5>This Match Not Live yet</h5>
      )}
    </PageContainer>
  );
};

export default ScoreBoard;
