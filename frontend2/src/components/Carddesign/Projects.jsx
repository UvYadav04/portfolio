import React, { useState } from "react";
import "./card.css";
import Projects from "../../data/Projects";
import { Link } from "react-router-dom";

const MOBILE_VISIBLE_COUNT = 3;

const Card = ({ name, description1, description2, techstack, link, git }) => {
    return (
        <div className="project-card">
            <p className="project-card__name">{name}</p>
            <p className="project-card__stack">{techstack}</p>
            <p className="project-card__about">
                {description1} {description2}
            </p>
            <div className="project-card__links">
                {link ? (
                    <Link to={link} className="project-card__link">
                        Live
                    </Link>
                ) : null}
                {git ? (
                    <Link to={git} className="project-card__link">
                        GitHub
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

const ProjectsCard = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="projects-section" id="projects">
            <h2 className="projects-section__title">What I've Built</h2>
            <div className={`projects-grid ${expanded ? "" : "projects-grid--collapsed"}`}>
                {Projects.map((card) => (
                    <Card
                        key={card.name}
                        name={card.name}
                        description1={card.description1}
                        description2={card.description2}
                        techstack={card.techstack}
                        link={card.link}
                        git={card.git}
                    />
                ))}
            </div>
            {Projects.length > MOBILE_VISIBLE_COUNT ? (
                <button
                    type="button"
                    className="projects-see-more"
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded ? "See less" : "See more"}
                </button>
            ) : null}
        </div>
    );
};

export default ProjectsCard;
