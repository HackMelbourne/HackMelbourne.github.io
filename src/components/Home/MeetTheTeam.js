import '../../styles/meetTheTeam.css';
import React from "react";

/* Cute Puppies */
import cute_pup1 from "../../img/team/2022/cute-puppies/cute_pup1.jfif"
// import cute_pup2 from "../../img/team/2022/cute-puppies/cute_pup2.jfif"
// import cute_pup3 from "../../img/team/2022/cute-puppies/cute_pup3.jfif"
import cute_pup4 from "../../img/team/2022/cute-puppies/cute_pup4.jfif"
import cute_pup5 from "../../img/team/2022/cute-puppies/cute_pup5.png"
import cute_pup6 from "../../img/team/2022/cute-puppies/cute_pup6.jfif"
import cute_pup7 from "../../img/team/2022/cute-puppies/cute_pup7.jfif"
import cute_pup8 from "../../img/team/2022/cute-puppies/cute_pup8.jfif"

/* Execs */
import miskaan from "../../img/team/2022/Execs/hm-miskaan.jpeg";
import aditya from "../../img/team/2022/Execs/hm-aditya-a.jpg";
// import tanishq from "../../img/team/2022/Execs/hm-tanishq.jpg";

/* Education Team */
import ryan from "../../img/team/2022/Education team/hm-ryan.jpg"
import daniel from "../../img/team/2022/Education team/hm-daniel.JPG"
import hoan from "../../img/team/2022/Education team/hm-hoan.jpg"
import jerry from "../../img/team/2022/Education team/hm-jerry.jpg"
import xinyu from "../../img/team/2022/Education team/hm-xinyu.jpg"

/* Website Team */
// import arsam from "../../img/team/2022/Website team/hm-arsam.jpg"
import florence from "../../img/team/2022/Website team/hm-florence.png"

/* Logistics Team */
import yupin from "../../img/team/2022/Logistics team/hm-yupin.jpeg"
import aldrich from "../../img/team/2022/Logistics team/hm-aldrich.jpg"
import amy from "../../img/team/2022/Logistics team/hm-amy.jpg"
import jiahao from "../../img/team/2022/Logistics team/hm-jiahao.jpg"
// import selena from "../../img/team/2022/Logistics team/hm-selena.jpg"
import suren from "../../img/team/2022/Logistics team/hm-suren.jpg"

/* Marketing Team */
import arya from "../../img/team/2022/Marketing team/hm-arya.png"

/* Sponsorship Team */
// import rishabh from "../../img/team/2022/Sponsorship team/hm-rishabh.jpg"
import sean from "../../img/team/2022/Sponsorship team/hm-sean.jpg"
// import kasie from "../../img/team/2022/Sponsorship team/hm-kasie.jpg"
// import henry from "../../img/team/2022/Sponsorship team/hm-henry.jpg"
import aaditya_g from "../../img/team/2022/Sponsorship team/hm-aaditya-g.jpg"

/* Student Engagement Team */
import calvin from "../../img/team/2022/Student Engagement team/hm-calvin.jpg"
import aditya_d from "../../img/team/2022/Student Engagement team/hm-aditya-d.png"
import adhiraj from "../../img/team/2022/Student Engagement team/hm-adhiraj.JPG"
import jamie from "../../img/team/2022/Student Engagement team/hm-jamie.jpg"

function MeetTheTeam() {
  return (
    <div>
      <div className="meetTheTeamContainer">
        <h1 className="meetTheTeamTitle">Meet the team</h1>
        <div className="teamPhotos">
          <Team avatar={miskaan} name="Muskaan Dalmia" position="President"/>
          <Team avatar={aditya} name="Aditya Ajit" position="Secretary"/>
          <Team avatar={cute_pup1} name="Tanishq Chawla" position="Treasurer"/>

          <Team avatar={ryan} name="Ryan Samarakoon" position="Education and Website Director"/>
          <Team avatar={xinyu} name="Chuah Xin Yu" position="Education Officer"/>
          <Team avatar={daniel} name="Daniel" position="Education Officer"/>
          <Team avatar={hoan} name="Hoan Tran" position="Education Officer"/>
          <Team avatar={jerry} name="Jerry Luong" position="Education Officer"/>
          <Team avatar={cute_pup6} name="Arsam Samadi" position="Website Officer"/>
          {/* <Team avatar={arsam} name="Arsam Samadi" position="Website Officer"/> */}
          <Team avatar={florence} name="Florence Tang" position="Website Officer"/>

          <Team avatar={yupin} name="Gan Yu Pin" position="Logistics Director"/>
          <Team avatar={aldrich} name="Aldrich Chan" position="Logistics Officer"/>
          <Team avatar={amy} name="Amy Ly" position="Logistics Officer"/>
          {/* <Team avatar={amy} name="Amy Ly" position="Logistics Officer"/> */}
          <Team avatar={jiahao} name="Jia Hao" position="Logistics Officer"/>
          <Team avatar={cute_pup4} name="Selena Lee" position="Logistics Officer"/>
          {/* <Team avatar={selena} name="Selena Lee" position="Logistics Officer"/> */}
          <Team avatar={suren} name="Suren Fernando" position="Logistics Officer"/>

          <Team avatar={arya} name="Arya" position="Marketing Director"/>

          <Team avatar={cute_pup5} name="Rishabh Dhawan" position="Sponsorships Director"/>
          {/* <Team avatar={rishabh} name="Rishabh Dhawan" position="Sponsorships Director"/> */}
          <Team avatar={aaditya_g} name="Aaditya Gupta" position="Sponsorships Officer"/>
          <Team avatar={cute_pup8} name="Henry Do" position="Sponsorships Officer"/>
          {/* <Team avatar={henry} name="Henry Do" position="Sponsorships Officer"/> */}
          <Team avatar={cute_pup7} name="Kasie Wang" position="Sponsorships Officer"/>
          {/* <Team avatar={kasie} name="Kasie Wang" position="Sponsorships Officer"/> */}
          <Team avatar={sean} name="Sean Chen" position="Sponsorships Officer"/>

          <Team avatar={calvin} name="Calvin Zhang" position="Student Engagement Director"/>
          <Team avatar={aditya_d} name="Aditya Desu" position="Student Engagement Officer"/>
          <Team avatar={adhiraj} name="Adhiraj jain" position="Student Engagement Officer"/>
          <Team avatar={jamie} name="Jamie Toh" position="Student Engagement Officer"/>

          {/* <Team avatar={} name=""/> */}
        </div>
      </div>
    </div>
  );
}

function Team(props) {
  return (
    <div>
      <img className="profile" src={props.avatar} alt=""></img>
      <h4>{props.name}</h4>
      <p>{props.position}</p>
    </div>
  )
}

export default MeetTheTeam;