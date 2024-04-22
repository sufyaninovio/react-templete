import React from "react";
import TeamCard from "../../components/TeamCard";
import {
    member1Img,
    member2Img,
    member3Img,
    member4Img,
} from "../../constants/mediaConstants";
const TeamSec = (props) => {
    const members = [
        {
            first_name: "Andrew",
            last_name: "Strauss",
            image: member1Img,
            position: "@abcd",
        },
        {
            first_name: "Ana",
            last_name: "Williams",
            image: member2Img,
            position: "@anawilliams",
        },
        {
            first_name: "John",
            last_name: "Doe",
            image: member3Img,
            position: "@john_doe",
        },
        {
            first_name: "Emma",
            last_name: "Carter",
            image: member4Img,
            position: "@emma_carter",
        }
    ];
    return (
        <>
            <section className="team-section py-5">
                <div className="container">
                    <div className="team-start">
                        <div className="top-heading text-center wow animate__animated animate__fadeInBottom animate__delay-1s">
                            <h6 className="level-5 text-primary">Our Team</h6>
                            <h2 className="level-2">Meet our Revolutionary <span className="text-primary">Team</span></h2>
                        </div>
                        <div className="members-list pt-5">
                            <div className="row">
                                {
                                    members.map((member, index) => (
                                        <>
                                            <TeamCard first_name={member.first_name} last_name={member.last_name} image={member.image} position={member.position} />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TeamSec;