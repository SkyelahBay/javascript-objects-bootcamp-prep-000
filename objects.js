var playlist = {
  Bayside : 'Demons',
  Reol : 'Drop Pop Candy'
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName] : songTitle});
}