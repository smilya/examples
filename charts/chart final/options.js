// OPTIONS:
//https://developers.google.com/chart/interactive/docs/gallery/linechart?hl=ru#configuration-options
let options = {
  width: 1300,
  height: 500,
  backgroundColor: 'ivory',
  title: "My new chart!!",
  curveType: 'function',

   chartArea: {
    backgroundColor: "white",
    left: 100,
    right: 150,
  }, 

  hAxis: {
    title: 'Years',
    gridlines: {
      interval: 1,
      minSpacing: 40,
    }
  },

  vAxis: {
    title: 'Amount'
  },
  
  titleTextStyle: {
    fontSize: 20,
  },

  legend: {
    // position: 'none',
  },
};