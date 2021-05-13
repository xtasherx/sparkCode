import axios, { AxiosResponse } from "axios";
import {LyricsInterface} from "./../App";
// eslint-disable-next-line
export default {
  // Gets lyrics
  getLyrics: function(size,filter) {
    return axios.get(`http://localhost:8000/swiftlyrics/lyric/?size=${size}&ordering=${filter}`);
  },

  //delete lyric
  deleteLyric: function (id:Number):Promise<AxiosResponse<LyricsInterface>> {
    return axios.delete("http://localhost:8000/swiftlyrics/lyric/" + id);
  }
}; 