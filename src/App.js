import "./App.css";
import Logo from "./reimg.png";
import Search from "./ser.png";


function App() {
  return (
    <div className="App">
      <div className="pag1">
        <div className="contain_box">
          <div>
            <a className="logo">Your Logo</a>
            <div className="pagelinks">
              <a className="explore">Explore</a>
              <a className="explore">About Us</a>
              <a className="explore">
                Cities <img src={Logo} />
              </a>

              <div className="borderbox">
                <a className="explore">Call</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="heading">Rethink your living & renting</p>
        </div>
        <div>
          <p className="text">Make your stay painless with us</p>
        </div>
        <div className="serchbox">
          <div className="txtBox">
            {" "}
            <p className="fieldname">CITY</p>
            <input type="text" className="pholder" placeholder="Select your City" />
          </div>
          <div className="txtBox">
          <p className="fieldname">DATES</p>
            <input type="text" className="pholder" placeholder="Select your Dates" />
          </div>
          <div className="txtBox">
          <p className="fieldname">GUESTS</p>
            <input type="text" className="pholder" placeholder="Add your Guests" />
          </div>
          <div className="serBox">
            <img className="searchIcon" src={Search} />
          </div>
        </div>
      </div>
      <div className="pag2">
        <p className="explore2">Explore</p>
        <p className="content">From one-guest rooms to penthouses with pools and gardens</p>
        <div className="pic_container">
        <div className="flex2 imgset">
        <div className="imgtext"><p className="txtimg">Pent house for 8 person</p></div>
        <div className="imgbtn">
          <span className="btn btn1">2039$</span>
          <span className="btn btn2">438m2</span>
          <span className="btn btn3">Book!</span>

        </div>
        </div>
          <div className="flex1 imgset">
            <div className="imgtext"><p className="txtimg">Room with one king size bed</p></div>
            <div className="imgbtn">
            <span className="btn btn1">35$</span>
          <span className="btn btn2">28m2</span>
          <span className="btn btn3">Book!</span>
            </div>

          </div>
          

        </div>
      </div>
      <div className="pag3">
      <p className="title">About Us</p>
      <p className="p3text">Allow us to tell you a short story...</p>
      <div className="grid-container">
        <div className="grid-item img1">
          <div className="chapter chp1">
            <p className="hding">Chapter I</p>
            <p className="txtchap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className="grid-item img2">
        <div className="chapter chp1">
        <p className="hding">Chapter II</p>
            <p className="txtchap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className="grid-item img3">
        <div className="chapter chp1">
        <p className="hding">Chapter III</p>
            <p className="txtchap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className="grid-item img4">
        <div className="chapter chp1">
        <p className="hding">Chapter IV</p>
            <p className="txtchap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
      </div>
     
      </div>
    </div>
  );
}

export default App;
