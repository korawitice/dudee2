import './style.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Content() {
  return (
    <><div class="bg-image"></div>

      <div class="bg-text">
        <h1>ซัก อบ รีด</h1>
        <Popup trigger={<button id="ta" >สั่งจองตอนนี้</button>} position="top">
          <div>

            <label ><b>ชื่อ-นามสกุล</b></label>
            <input></input>

            <label><b>เวลา</b></label>
            <input type="time"></input>

            <label><b>ID-LINE</b></label>
            <input></input>

            <Popup trigger={<button id="sb" >Submit</button>} position="right">
              <di>Success</di>
            </Popup>
          </div>
        </Popup>
      </div>
    </>
  );
}

export default Content;
