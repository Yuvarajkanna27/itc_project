/* import React, { useEffect, useState } from "react";
import ClubItc from "./ClubItc";
// Club page images
import Simplicity from "./img1/points-never-expire.png"
import Member from "./img1/member-only-rates.png";
import Reward from "./img1/reward-nights.png";
import Contactless from "./img1/contactless-redemption.png";
import International from "./img1/direct-access-to-arossim-beach.png";
import Vouchers from "./img1/e-vouchers.png";
import Rollover from "./img1/rollover-nights.png";
import Gift from "./img1/gift-points.png";
import Points from "./img1/club-itc-page1.jpg";
import Free from "./img1/wi-fi.png";

function ClubList() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Simplicity & transparency",
      image: Simplicity,
      para:
        "Earn 2%-5% of the eligible spends as Green Points, 1 Green Point=Re 1. The more you stay, the faster you move up the tiers & benefits multiply.",
    },
    {
      id: 2,
      title: "Member only rates",
      image: Member,
      para:
        "Club ITC members get up to 10% additional savings for all bookings made through itchotels.com.",
    },
    {
      id: 3,
      title: "Reward Nights",
      image: Reward,
      para: "Unlock exceptional experiences at your favorite hotels using your Green Points.",
    },
    {
      id: 4,
      title: "Contactless Redemption",
      image: Contactless,
      para:
        "Redeem your Green Points for impromptu holidays, staycations, fine dining experiences, spa sojourns, and more using your mobile phone.",
    },
    {
      id: 5,
      title: "International Getaways",
      image: International,
      para:
        "Redeem your Club ITC Green Points for award nights at more than 6,500 Marriott Hotels & Resorts worldwide and discover exciting destinations. Terms apply.",
    },
    {
      id: 6,
      title: "E-Vouchers",
      image: Vouchers,
      para:
        "Members receive a bouquet of e-vouchers on achieving/retaining higher tier status, such as savings on spa & dining experiences, room upgrades, etc. Members may redeem the value e-vouchers digitally.",
    },
    {
      id: 7,
      title: "Rollover Nights",
      image: Rollover,
      para:
        "Each spend and room night counts! Members carry forward excess room nights and eligible spends to the next calendar year to enable upgrades to their next tier faster.",
    },
    {
      id: 8,
      title: "Gift Points",
      image: Gift,
      para:
        "Members can transfer/gift Green Points to other Club ITC membership accounts. So, your loved ones can be a part of the programme and enjoy the benefits too.",
    },
    {
      id: 9,
      title: "Points never expire",
      image: Points,
      para: "Green Points never expire for active members.",
    },
    {
      id: 10,
      title: "Free Wi-Fi",
      image: Free,
      para: "Receive complimentary Wi-Fi for your stays at participating hotels.",
    },
  ]);

  useEffect(() => {
    console.log("Booking confirmed");
  }, []);

  return (
    <>
      {list.map((item) => (
        <ClubItc 
          key={item.id} 
          title={item.title} 
          image={item.image} 
          para={item.para} 
        />
      ))}
    </>
  );
}

export default ClubList; */