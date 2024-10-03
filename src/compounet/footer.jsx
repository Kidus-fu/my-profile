function Footer(){
return(<>
            <footer class="bg-dark text-white py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>About Me</h5>
        <p>Hi! I'm Panda, a passionate developer based in Ethiopia. I
            specialize in full-stack development and have a keen interest in
            building responsive web applications.</p>
      </div>
      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="/" class="text-white">Home</a></li>
          <li><a href="#" class="text-white">About</a></li>
          <li><a href="/ContactMe" class="text-white">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: seeh51593@gmail.com</p>
        <p>Phone: +215930980499</p>
       <ul
        class="nav "
       >
       <li><a href="https://www.instagram.com/kidus_st12/" className="btn btn-dark "><i className="fab fa-instagram text-danger fs-4 "></i></a></li>
       <li><a href="" className="btn btn-dark "><i className="fab fa-linkedin text-primary fs-4 "></i></a></li>
       </ul>
       
        
      </div>
    </div>
    <div class="text-center mt-4">
    <p>© {new Date().getFullYear()} Panda. All rights reserved.</p>
    </div>
  </div>
</footer>

</>);

}

export default Footer