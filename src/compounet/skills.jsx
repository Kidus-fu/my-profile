function Skills(props) {
// Create a <style> element
const style = document.createElement('style');
        
// Define the @keyframes animation
const keyframes = `
    @keyframes progressBar {
        0%{ width: 0px; }
        
    }

`;

// Append the keyframes to the <style> element
style.appendChild(document.createTextNode(keyframes));

// Append the <style> element to the <head>
document.head.appendChild(style);
    return(<>
    
    <div class="Skills card mb-3  text-white  mx-3  " onMouseOver={(e) => {
              const body = document.querySelector("body");
              body.style.backgroundImage = `url(${props.img})`;
              
            }}
            onMouseOut={() => {
                const body = document.querySelector("body");
                body.style.backgroundImage = ""
                body.style.backgroundColor = "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))";
              }} onAnimationStart={() => {
                const body = document.querySelector("body");
                body.style.backgroundImage = ""
                body.style.backgroundColor = "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))";
              }}>
        <div class="row g-0">
            <div class="col-md-4"  
          >
            
                <img
                
                    src={props.img}
                    class="img-fluid rounded-start rounded"
                    alt="Card title"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                        {props.discrption}
                    </p>
                    <p class="card-text">
                        <div class="progress">
                            <div
                                class={`progress-bar bg-${props.color} text-dark text-end` }
                                
                                role="progressbar"
                                style={{width: `${props.Skills}%`,animation: "progressBar 2s forwards" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props.Skills}%
                            </div>
                        </div>
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    </>);
}

export default Skills