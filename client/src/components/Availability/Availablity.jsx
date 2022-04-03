import React, {useState } from "react";
import AvailabilityCSS from "./Availability.module.css";
import { BiCalendarStar } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { RiSettings3Fill } from "react-icons/ri";
import { BiListUl } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

export const Availability = () => {
  const initial = [
    "12:00am",
    "12:15am",
    "12:30am",
    "12:45am",
    "1:00am",
    "1:15am",
    "1:30am",
    " 1:45am",
    "2:00am",
    "2:15am",
    "2:30am",
    " 2:45am",
    " 3:00am",
    " 3:15am",
    " 3:30am",
    " 3:45am",
    "4:00am",
    "4:15am",
    "4:30am",
    "4:45am",
    "5:00am",
    " 5:15am",
    "6:30am",
    "6:45am",
    "7:00am",
    "7:15am",
    "7:30am",
    " 7:45am",
    " 8:00am",
    " 8:15am",
    "8:30am",
    " 8:45am",
    " 9:00am",
    " 9:15am",
    "9:30am",
    " 9:45am",
    " 10:00am",
    " 10:15am",
    "10:30am",
    " 10:45am",
    " 11:00am",
    " 11:15am",
    "11:30am",
    " 11:45am",
    " 12:00pm",
    " 12:15pm",
    "12:30pm",
    " 12:45pm",
    " 1:00pm",
    " 1:15pm",
    "1:30pm",
    " 1:45pm",
    " 2:00pm",
    " 2:15pm",
    "2:30pm",
    " 2:45pm",
    " 3:00pm",
    " 3:15pm",
    "3:30pm",
    " 3:45pm",
    " 4:00pm",
    " 4:15pm",
    "4:30pm",
    " 4:45pm",
    " 5:00pm",
    " 5:15pm",
    "5:30pm",
    " 5:45pm",
    " 6:00pm",
    " 6:15pm",
    "6:30pm",
    " 6:45pm",
    " 7:00pm",
    " 7:15pm",
    "7:30pm",
    " 7:45pm",
    " 8:00pm",
    " 8:15pm",
    "8:30pm",
    " 8:45pm",
    " 9:00pm",
    " 9:15pm",
    "9:30pm",
    " 9:45pm",
    " 10:00pm",
    " 10:15pm",
    "10:30pm",
    " 10:45pm",
    " 11:00pm",
    " 11:15pm",
    "11:30pm",
    " 11:45pm",
  ];

  const [newSchedule, setNewSchedule] = useState(false);
  const [time, setTime] = useState(initial);
  const [sun, setSun] = useState();
  const [tue, setTue] = useState();
  const [mon, setMon] = useState();
  const [wed, setWed] = useState();
  const [thu, setThu] = useState();
  const [fri, setFri] = useState();
  const [sat, setSat] = useState();


  function handleWorkingHours() {
    console.log("click");
  }
  function handleNewSchedule() {
    setNewSchedule(!newSchedule);
  }
  function handleCheckBox(e) {
    const {checked, name} = e.target;

    if(name === "sun"){
       setSun(checked)
    }
    if(name === "mon"){
       setMon(checked)
    }
    if(name === "tue"){
       setTue(checked)
    }
    if(name === "wed"){
       setWed(checked)
    }
    if(name === "thu"){
       setThu(checked)
    }
    if(name === "fri"){
       setFri(checked)
    }
    if(name === "sat"){
       setSat(checked)
    }
   
  }
  function handleCheckBox2() {

  }

  return (
    <>
      <div
        className={
          !newSchedule
            ? AvailabilityCSS.mainContainer
            : AvailabilityCSS.mainContainerActive
        }
      >
        <div className={AvailabilityCSS.titleBox}>
          <h2>Set your availability</h2>
        </div>
        <div className={AvailabilityCSS.sheduleBox}>
          <div>
            <p>
              Choose a schedule below to edit or create a new one that you can
              apply to your event types
            </p>
          </div>
          <div className={AvailabilityCSS.sheduleBoxDiv}>
            <h5 style={{
              padding:"1rem"
            }}>SCHEDULE</h5>

            <div className={AvailabilityCSS.workingBoxEvent}>
              <div
                className={AvailabilityCSS.workingHoursBoxIcon}
                onClick={() => handleWorkingHours()}
              >
                <span className={AvailabilityCSS.iconCal}>
                  <BiCalendarStar />
                </span>
                <h4>Working hours</h4>
              </div>

              <div
                className={AvailabilityCSS.newScheduleBox}
                onClick={() => {
                  handleNewSchedule();
                }}
              >
                <span className={AvailabilityCSS.iconPlus}>
                  <AiOutlinePlus />
                </span>
                <h4>New Schedule</h4>
              </div>
            </div>

            {/* Active details Box start*/}
            <div className={AvailabilityCSS.activeScheduledetailBox}>
              <div className={AvailabilityCSS.defaultWorkingHoursMainBox}>
                <div>
                  <h3>Working hours</h3>
                  <p style={{
                      margin:"1rem"
                    }}>
                    <AiFillStar
                      style={{
                        color: "rgb(232, 202, 11)",
                        fontSize: "18px",
                      }}
                    ></AiFillStar>{" "}
                    <span >default schedule</span>
                  </p>
                </div>
                <div>
                  <RiSettings3Fill
                    style={{
                      fontSize: "20px",
                      marginLeft: "95%",
                    }}
                  ></RiSettings3Fill>
                </div>
                <div className={AvailabilityCSS.eventType}>
                  <div>
                    <p>Active on</p>
                    <br />
                    <div>
                      <span>
                        {" "}
                        <p
                          style={{
                            color: "rgb(0, 107, 255)",
                          }}
                        >
                          Event Type
                        </p>
                      </span>
                    </div>
                  </div>
                  <div>
                    <p>Time Zone</p>
                    <br />
                    <span>
                      {" "}
                      <p
                        style={{
                          color: "rgb(0, 107, 255)",
                        }}
                      >
                        India Standard Time
                      </p>
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "5vh",
                    background: "rgb(232,232,232)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div className={AvailabilityCSS.listViewBox}>
                    <span
                      style={{
                        display: "flex",
                      }}
                    >
                      <BiListUl style={{
                        paddingTop:"0.5rem"
                      }}></BiListUl>
                      <p>List view</p>
                    </span>
                  </div>

                  <div className={AvailabilityCSS.listViewBox2}>
                    <span
                      style={{
                        display: "flex",
                      }}
                    >
                      <AiTwotoneCalendar style={{
                        paddingTop:"0.5rem"
                      }}></AiTwotoneCalendar>
                      <p>Calender view</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Active details Box end */}
            {/* ActiveBox body Box start */}
            <div className={AvailabilityCSS.activeBoxBody}>
             
              <div className={AvailabilityCSS.activeBoxBody1}>
                <span>
                  <h3
                    style={{
                      marginLeft: "1.5rem",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Set your weekly hours
                  </h3>
                </span>  
                {/* days */}
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="sun"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    SUN
                  </span>
                {sun ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="mon"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    MON
                  </span>
                {mon ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="tue"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    TUE
                  </span>
                {tue ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="wed"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    WED
                  </span>
                {wed ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="thu"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    THU
                  </span>
                {thu ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="fri"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    FRI
                  </span>
                {fri ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                <div className={AvailabilityCSS.activeBoxBodyDiv}>      
                  <span>
                    <input
                      style={{
                        marginTop: "0.5rem",
                      }}
                      type="checkbox"
                      name="sat"
                      id=""
                      onChange={(e)=>{handleCheckBox(e)}}
                    />{" "}
                    SAT
                  </span>
                {sat ?  <div>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              borderRadius: "1rem",
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>

                    <span
                      style={{
                        padding: "1rem",
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      list="time"
                      className={AvailabilityCSS.timeOptionTag}
                    />
                    <datalist id="time">
                      {time.map((el) => {
                        return (
                          <option
                            style={{
                              webkitAppearance: "none",
                              mozAppearance: "none",
                              textIndent: "1px",
                              textOverflow: "",
                            }}
                          >
                            {el}
                          </option>
                        );
                      })}
                    </datalist>
                    <span className={AvailabilityCSS.deleteIcon} >
                    <AiFillDelete onClick={()=>{handleCheckBox2()}} ></AiFillDelete>
                  </span>
                  <span className={AvailabilityCSS.plusAndCopyIcon}> <AiOutlinePlus/> <BiCopy/> </span>
                  </div> : <span className={AvailabilityCSS.unavailableTextBox}>Unavailable</span>  }
                </div>
                 {/* days */}
              </div>

              <div className={AvailabilityCSS.activeBoxBody2}>
                <h3 style={
                  {
                    fontWeight: "900",
                    fontSize: "20px",
                  }
                }>Add date overrides</h3>
                <p style={
                  {
                    fontWeight: "500",
                    fontSize: "14px",
                  }
                }>
                  Add dates when your availability changes from your weekly
                  hours
                </p>

                <br />

                <button>Add date override</button>
              </div>
            </div>
            {/* ActiveBox body Box end */}
          </div>
        </div>
      </div>
      <div
        className={
          !newSchedule
            ? AvailabilityCSS.popupDiv
            : AvailabilityCSS.popupDivActive
        }
      >
        <div style={{ textAlign: "center" }}>
          {" "}
          <h3>New schedule</h3>
        </div>
        <div>
          <p>Schedule name</p>{" "}
          <input
            type="text"
            placeholder="Working Hours, Exclisive Hours, etc..."
          />
        </div>
        <div className={AvailabilityCSS.buttonsDiv}>
          <button
            onClick={() => {
              handleNewSchedule();
            }}
          >
            {" "}
            Cancel
          </button>

          <button>Create</button>
        </div>
      </div>
    </>
  );
};