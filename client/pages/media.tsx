import React from 'react';

function Media() {
  return (
    <div className='media bg-myColor'>
        <h1>
    Developed more than{" "}
    <span className="highlight">
      100
      <br />
    </span>{" "}
    projects in <span className="highlight">15</span> industries
  </h1>
  <ul>
    <li>
      <span className="icon" /> Social media &nbsp; &nbsp;{" "}
      <span className="icon" /> Fitness and spor <span className="icon" /> Bank
    </li>
    <li>
      <span className="icon">
        <i className="fas fa-tools" />
      </span>{" "}
      Construction &nbsp; &nbsp;{" "}
      <span className="icon">
        <i className="fas fa-gamepad" />
      </span>{" "}
      Game projects &nbsp; &nbsp;{" "}
      <span className="icon">
        <i className="fas fa-graduation-cap" />
      </span>{" "}
      Education
    </li>
    <li>
      <span className="icon">
        <i className="fas fa-car" />
      </span>{" "}
      Auto, transport{" "}
      <span className="icon">
        <i className="fas fa-heart" />
      </span>{" "}
      Medicine, health &nbsp;{" "}
      <span className="icon">
        <i className="fas fa-utensils" />
      </span>{" "}
      Restaurants, food delivery
    </li>
    <li>
      <span className="icon">
        <i className="fas fa-home" />
      </span>{" "}
      Marketplaces &nbsp;{" "}
      <span className="icon">
        <i className="fas fa-satellite-dish" />
      </span>{" "}
      AR technology &nbsp; &nbsp; &nbsp;{" "}
      <span className="icon">
        <i className="fas fa-tv" />
      </span>{" "}
      TV series
    </li>
    <li>
      <span className="icon">
        <i className="fas fa-rocket" />
      </span>{" "}
      Startups &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{" "}
      <span className="icon">
        <i className="fas fa-praying-hands" />
      </span>{" "}
      Religion &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
      <span className="icon">
        <i className="fas fa-book-open" />
      </span>{" "}
      Online courses
    </li>
  </ul>
  <h1>
    Projects we are proud of{" "}
    <img
      src="https://s3-alpha-sig.figma.com/img/6781/6a28/82ad7f15e26edcf5629068de100f570f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PEH1QzvhuS~mfH4fJI9HMQSfXLXdjXyZxCaholt4jIqdWwyuLn6NXhM8It37opwulxFcLqxrynThlwAR4U0H1t3wqCBJmSYut3QwlvBePYge3Oc-PodE2T6zI7Iyu7fv-G2Z2erlDHs~4EyAihP8i85wf7qXPThrlPBdW-RYtk2Pz81kQs82YSXfq4LxhDEq4UjhA9zDmWL5G5jhy3dTzcmMDsIqoZu9jGTNr4swBl7gPFOq7w4K4urOOtIT-OL4VZ-QmLtHP0C3Mm653JSIr-aSnBu~QGagDQTNRvDYrcg3JQvqrLjUMe4nZYW~H~WibPrAmNBSFUiDKjQOopNtoQ__"
      alt="Project image"
      className="project-image"
    />
  </h1>
  <p>
    Our software development company is truly proud of the wonderful clients we
    have
    <br /> worked with. We enjoy a long-term partnership
  </p>
  <table>
    <tbody>
      <tr>
        <td>Project 1</td> <td>Project 2</td> <td>Project 3</td>{" "}
        <td>Project 4</td>
      </tr>
    </tbody>
  </table>
  <h2>Project 1</h2>
  <span className="project">
    <p>
      Crafted an innovative rental property management app, seamlessly
      integrating secure
      <br /> login, absence registration, and a tenant notice board. Elevating
      the resident
      <br /> experience with user-friendly design and efficient communication
      channels
    </p>
  </span>
  <span className="business">
    <p>Business analysis / iOS / Android / QA / UI/UX Design</p>
  </span>
  <span className="india">India</span>
  <span className="Real">Real Estate</span>
  <div className="stats">
    <div className="stat">
      <span className="stat-value">400%</span>
      <span className="stat-value">+ 200 000</span>
    </div>
  </div>
  <div className="stats">
    <div className="stat">
      <span className="stat-label">User Growth</span>
      <span className="stat-label">Active Users</span>
    </div>
  </div>
  <a href="/" tabIndex={0}>
    <img
      className="bn46"
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="bn45"
    />
  </a>
  <a href="/" tabIndex={0}>
    <img
      className="bn45"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
      alt="bn45"
    />
  </a>

    </div>
  )
}

export default Media;
