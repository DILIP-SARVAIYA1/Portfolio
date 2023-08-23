const Header = () => {
  return (
    <div className="header">
      <div className="nameSection">
        <h3>
          <a href="">
            <span id="before">|</span>
          </a>
          <a href="#"> Dilip Sarvaiya </a> <span>React Js dev</span>
        </h3>
      </div>
      <div className="listSection">
        <ul>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
