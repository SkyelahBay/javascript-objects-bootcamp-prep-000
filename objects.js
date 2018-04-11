var playlist = {
  Bayside : 'Demons',
  Reol : 'Drop Pop Candy'
};

function updatePlaylist(playlistName, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}