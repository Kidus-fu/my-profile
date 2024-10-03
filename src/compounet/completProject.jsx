function CompletProject(props) {
  return (
    <>
      <div
        class="Skills card mb-5  text-white  mx-3  "
        onMouseOver={ e => {
          let body = document.querySelector("body")
        body.style.background = `linear-gradient(${e.pageY}deg, #3498db, #2ecc71)`
      }}
        onMouseOut={() => {
          const body = document.querySelector("body");
          body.style.backgroundImage = "";
          body.style.backgroundColor =
            "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))";
        }}
        onAnimationStart={() => {
          const body = document.querySelector("body");
          body.style.backgroundImage = "";
          body.style.backgroundColor =
            "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.img}
              class="img-fluid rounded-start"
              alt="Card title"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">
                {props.title}{" "}
                <i className="fas fa-square-check text-success fs-2"></i>
              </h4>
              <p class="card-text">{props.discrption}</p>
              <p>
              Check now:
                <a
                  href={`${props.url}`}
                  target="_"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  {props.url}{" "}
                  <i className="fas fa-arrow-up-right-from-square text-primary"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompletProject;
