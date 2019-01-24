import React, { Component } from "react";
import Speech from "speak-tts";

const speech = new Speech();

// create a global array variable and each index is new speech.init for each input/voice (init speech will have a forloop )

// create and array of property objects

class SpeechComp extends Component {
  state = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // uncomment below to refresh input
    // this.setState({ textInput: "" });
  };

  initSpeech = voice => {
    speech
      .init()
      .then(data => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data);
      })
      .catch(e => {
        console.error("An error occured while initializing : ", e);
      });
  };

  speak = num => {
    speech
      .speak({
        text: this.state[num],
        queue: false, // current speech will be interrupted
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
                " boundary reached after " +
                event.elapsedTime +
                " milliseconds."
            );
          }
        }
      })
      .then(() => {
        console.log("Success !");
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  };
  componentDidMount() {
    this.initSpeech();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sequenceContainer">
          <div id="step1" className="inputButtonContainer">
            <input
              className="inputArea"
              name="1"
              value={this.state[1]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(1)}>
              Button 1
            </button>
          </div>
          <div id="step2" className="inputButtonContainer">
            <input
              className="inputArea"
              name="2"
              value={this.state[2]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(2)}>
              Button 2
            </button>
          </div>
          <div id="step3" className="inputButtonContainer">
            <input
              className="inputArea"
              name="3"
              value={this.state[3]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(3)}>
              Button 3
            </button>
          </div>
          <div id="step4" className="inputButtonContainer">
            <input
              className="inputArea"
              name="4"
              value={this.state[4]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(4)}>
              Button 4
            </button>
          </div>
          <div id="step5" className="inputButtonContainer">
            <input
              className="inputArea"
              name="5"
              value={this.state[5]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(5)}>
              Button 5
            </button>
          </div>
          <div id="step6" className="inputButtonContainer">
            <input
              className="inputArea"
              name="6"
              value={this.state[6]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(6)}>
              Button 6
            </button>
          </div>
          <div id="step7" className="inputButtonContainer">
            <input
              className="inputArea"
              name="7"
              value={this.state[7]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(7)}>
              Button 7
            </button>
          </div>
          <div id="step8" className="inputButtonContainer">
            <input
              className="inputArea"
              name="8"
              value={this.state[8]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(8)}>
              Button 8
            </button>
          </div>
          <div id="step9" className="inputButtonContainer">
            <input
              className="inputArea"
              name="9"
              value={this.state[9]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(9)}>
              Button 9
            </button>
          </div>
          <div id="step10" className="inputButtonContainer">
            <input
              className="inputArea"
              name="10"
              value={this.state[10]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(10)}>
              Button 10
            </button>
          </div>
          <div id="step11" className="inputButtonContainer">
            <input
              className="inputArea"
              name="11"
              value={this.state[11]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(11)}>
              Button 11
            </button>
          </div>
          <div id="step12" className="inputButtonContainer">
            <input
              className="inputArea"
              name="12"
              value={this.state[12]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(12)}>
              Button 12
            </button>
          </div>
          <div id="step13" className="inputButtonContainer">
            <input
              className="inputArea"
              name="13"
              value={this.state[13]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(13)}>
              Button 13
            </button>
          </div>
          <div id="step14" className="inputButtonContainer">
            <input
              className="inputArea"
              name="14"
              value={this.state[14]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(14)}>
              Button 14
            </button>
          </div>
          <div id="step15" className="inputButtonContainer">
            <input
              className="inputArea"
              name="15"
              value={this.state[15]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(15)}>
              Button 15
            </button>
          </div>
          <div id="step16" className="inputButtonContainer">
            <input
              className="inputArea"
              name="16"
              value={this.state[16]}
              onChange={this.handleChange}
            />
            <button className="playButton" onClick={() => this.speak(16)}>
              Button 16
            </button>
          </div>
        </div>
        <button>"PLAY"</button>
        <button>"STOP"</button>
        <p>tempo slider =========|======= </p>
      </form>
    );
  }
}

// to get sequencing to work - look into setInterval and setTimeout

export default SpeechComp;
