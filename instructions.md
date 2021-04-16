## Instructions

You can find the DeepArmor React Challenge at https://github.com/sparkcognition/da-react-challenge
- Clone the repo
- Setup has two options:
	- Docker Compose
		- Simply run "docker-compose up" from the da-react-challenge directory - this should bring up the backend and setup the database automatically, exposing the server on port 8000
	- Manual
		- Follow the instructions in the readme

You'll also need to setup the React application(under lyrics_api/swift-lyrics-react) - Instructions are also in the readme, and the default React readme included in the project

### API Description
The backend is a simple API for searching and storing lyrics.  The lyrics should have an album, song, and the text of the lyrics. The API supports paging, filtering/sorting coming soon.

The current frontend app is minimal - it is a basic React app, with a few dependencies, mainly bootstrap.

### Your Task:
   - Wire up the table (currently has 2 hard-coded lyrics) to fetch data from the API, with page size defaulting to 25, but toggleable to 10 or 50;
   - Search box - query parameter 'search' will search text in song name, album name, or lyric text
   - Sorting - Allow sorting by song name, album name, or lyric text
   - Implement a Delete button for lyrics.
   - Add a form for submitting new lyrics, including the album, song, and text. Album and song are required fields.
   - Add upvote/downvote functionality to backend API
   - Implement upvote/downvote - one per lyric (can't be fully blocked with just frontend, but just as best as you can)

### What We're Looking For
   - Clean Code with good structure
   - Functionality
   - Good user experience
   - Maintability
   - Reusability



