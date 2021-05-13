import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Table} from "reactstrap";
import API from "./utils/API";


export interface AlbumInterface {
   id:Number;
   name:String;
}

export interface SongInterface {
   id:Number;
   name:String;
}

export interface LyricsInterface {
   id:Number;
   text:String;
   votes:Number;
   song:SongInterface;
   album:AlbumInterface;

}

function App(this: any) {

  const [lyricsData, setLyricsData] = useState<any>([]);
  const [resultsNum,setResultsNum] = useState<number>(25);
  const [sortNum,setSortNum] = useState<string>("text");
  const [deletionFlag,setDeletionFlag] = useState<boolean>(false);


  //get a list of lyrics from db
  useEffect (()=>{
    //check user requested number of results-defaults to 25
  
      API.getLyrics(resultsNum,sortNum).then(
        res => {
          setLyricsData(res.data.results);
        }
      ).catch(err => console.log(err))
    


  },[resultsNum,sortNum,deletionFlag])

  
//delete item
  const handleDelete = (id) => {
    API.deleteLyric(id).then(
      res => {
        setDeletionFlag(true);
      }
    ).catch(err => console.log(err))
  }

  //toggle number of results
  const handleResultsClick = (e) => {  
    let resNum = parseInt(e.target.getAttribute("dataKey"));
    setResultsNum(resNum);
    
  }

  const handleSort = (e) => {
    setSortNum(e.target.getAttribute("dataKey"));    
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Find your Favorite!</p>
          <div style={{marginLeft: "150px", marginRight: "150px", marginTop: "50px"}}>
          <Table>
         <thead>
            <tr>
              <th>        
                <div style={{display: "flex", flexDirection: "row", justifyContent:"center"}}>
                  <p style={{marginBottom: "0px"}}>Results:</p>
                  <Button dataKey="10" color="link" onClick={handleResultsClick}>10</Button>
                  <Button dataKey="50" color="link" onClick={handleResultsClick}>50</Button>
                  <Button dataKey="25" color="link" onClick={handleResultsClick}>25</Button>
                </div>
              </th>
              <th><Button dataKey="text" onClick={handleSort}> Lyrics</Button></th>
              <th><Button dataKey="song__name" onClick={handleSort}> Song </Button></th>
              <th><Button dataKey="song__album__name" onClick={handleSort}> Album </Button></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
            <tbody>
            {lyricsData.map((lyric:LyricsInterface,i) => 
                <tr key={lyric.id.toString()}>
                  <th scope="row">{i + 1}</th>   
                                        <td>{lyric.text}</td>
                                        <td>{lyric.song.name}</td>
                                        <td>{lyric.album.name}</td>
                                        <td><Button disabled>Edit</Button></td>
                                        <td><Button onClick={() => handleDelete(lyric.id)}>Delete</Button></td>
                </tr>
               )}

            </tbody>
        </Table>
        </div>

      </header>
    </div>
  );
}

export default App;
