class Application extends React.Component {

countDown () {      
    var countDownDate = new Date("Dec 31, 2018 23:59:59").getTime();
    var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var newNow = days + "days " + hours + "h "
    + minutes + "m " + seconds + "s ";

  return newNow;
  } 
  
  render() {
return (
  <div>Count Down to 2019!! {this.countDown()}</div>
      )
  };
};
setInterval(function(){ React.render(<Application/>, document.getElementById('app'));
 }, 1000);
