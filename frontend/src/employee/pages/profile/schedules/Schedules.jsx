import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Schedules.scss';
import { Header, Navbar, TaskCard, Card } from '../../../components/index';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Schedules = () => {
  const [showDetails, setShowDetails] = useState({});
  const [showMoreCards, setShowMoreCards] = useState({});

  const handleMoreDetailsClick = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleLessDetailsClick = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  const handleToggleCards = (section) => {
    setShowMoreCards((prevShowMoreCards) => ({
      ...prevShowMoreCards,
      [section]: !prevShowMoreCards[section],
    }));
  };

  return (
    <>
      <section className="schedule-container">
        <section className="schedule-mid">
          <section className="schedule-mid-child">
            <section className="schedule-day">
              <p>Tuesday 4</p>
            </section>
            <section className="schedule-task">
              {[0, 1, 2].map((index) =>
                showDetails[index] ? (
                  <>
                    <Card key={index} />
                    <section className="more-details">
                      <Link
                        to="#"
                        onClick={() => handleLessDetailsClick(index)}
                      >
                        show less
                      </Link>
                    </section>
                  </>
                ) : (
                  <>
                    <TaskCard
                      key={index}
                      showDetails={showDetails[index]}
                      onMoreDetailsClick={() => handleMoreDetailsClick(index)}
                    />
                    <section className="more-details">
                      <Link
                        to="#"
                        onClick={() => handleMoreDetailsClick(index)}
                      >
                        more details
                      </Link>
                    </section>
                  </>
                )
              )}
              {showMoreCards['Tuesday'] && (
                <>
                  {[3, 4].map((index) =>
                    showDetails[index] ? (
                      <>
                        <Card key={index} />
                        <section className="more-details">
                          <Link
                            to="#"
                            onClick={() => handleLessDetailsClick(index)}
                          >
                            show less
                          </Link>
                        </section>
                      </>
                    ) : (
                      <>
                        <TaskCard
                          key={index}
                          showDetails={showDetails[index]}
                          onMoreDetailsClick={() =>
                            handleMoreDetailsClick(index)
                          }
                        />
                        <section className="more-details">
                          <Link
                            to="#"
                            onClick={() => handleMoreDetailsClick(index)}
                          >
                            more details
                          </Link>
                        </section>
                      </>
                    )
                  )}
                </>
              )}
              <section className="toggle-button">
                <button onClick={() => handleToggleCards('Tuesday')}>
                  {showMoreCards['Tuesday'] ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </section>
            </section>
          </section>
          <section className="schedule-mid-child">
            <section className="schedule-day">
              <p>Monday 3</p>
            </section>
            <section className="schedule-task">
              {[5, 6, 7].map((index) =>
                showDetails[index] ? (
                  <>
                    <Card key={index} />
                    <section className="more-details">
                      <Link
                        to="#"
                        onClick={() => handleLessDetailsClick(index)}
                      >
                        show less
                      </Link>
                    </section>
                  </>
                ) : (
                  <>
                    <TaskCard
                      key={index}
                      showDetails={showDetails[index]}
                      onMoreDetailsClick={() => handleMoreDetailsClick(index)}
                    />
                    <section className="more-details">
                      <Link
                        to="#"
                        onClick={() => handleMoreDetailsClick(index)}
                      >
                        more details
                      </Link>
                    </section>
                  </>
                )
              )}
              {showMoreCards['Monday'] && (
                <>
                  {[8, 9].map((index) =>
                    showDetails[index] ? (
                      <>
                        <Card key={index} />
                        <section className="more-details">
                          <Link
                            to="#"
                            onClick={() => handleLessDetailsClick(index)}
                          >
                            show less
                          </Link>
                        </section>
                      </>
                    ) : (
                      <>
                        <TaskCard
                          key={index}
                          showDetails={showDetails[index]}
                          onMoreDetailsClick={() =>
                            handleMoreDetailsClick(index)
                          }
                        />
                        <section className="more-details">
                          <Link
                            to="#"
                            onClick={() => handleMoreDetailsClick(index)}
                          >
                            more details
                          </Link>
                        </section>
                      </>
                    )
                  )}
                </>
              )}
              <section className="toggle-button">
                <button onClick={() => handleToggleCards('Monday')}>
                  {showMoreCards['Monday'] ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Schedules;
