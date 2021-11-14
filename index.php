<?php require_once __DIR__ . "/include/index-header.inc.php";?>
</head>
    <body>

<div id="loader"></div>
<div id="content">

<!-- header section starts  -->

<header class="header">

    <a href="#" class="logo"><i class="fas fa-paint-roller"></i> ELS PINTOR</a>

    <div class="icons">
       <!--  <div class="fas fa-moon" id="theme-btn"></div> -->
        <!-- <div class="fas fa-palette" id="color-btn"></div> -->
        <!-- <div class="fas fa-search" id="search-btn"></div> -->
        <div class="fas fa-bars" id="menu-btn"></div>
    </div>

    <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#gallery">Products</a>
        <a href="#paint">Paint Color</a><!-- 
        <a href="#pricing">pricing</a> --><!-- 
        <a href="#review">review</a> -->
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>

    <form action="" class="search-form">
        <input type="search" name="" placeholder="search here..." id="search-box">
        <label for="search-box" class="fas fa-search"></label>
    </form>

<!--     <div class="colors-palette">
        <h3>paint me</h3>
        <div class="colors">
            <div class="color" style="background:#2980b9"></div>
            <div class="color" style="background: #27ae60;"></div>
            <div class="color" style="background: #e74c3c;"></div>
            <div class="color" style="background: #8e44ad;"></div>
            <div class="color" style="background: #B33771;"></div>
            <div class="color" style="background: #0fb9b1;"></div>
            <div class="color" style="background: #ff9f1a;"></div>
            <div class="color" style="background: #e84393;"></div>
            <div class="color" style="background: #17c0eb;"></div>
        </div>
    </div> -->

</header>

<!-- header section ends -->

<!-- home section starts  -->

<section class="home" id="home">

   <div class="content">
        <h3>welcome to <span>els pintor</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit porro nam libero natus error consequatur sed repudiandae eos quo?</p>
        <a href="#contact" class="btn">Inquire here</a>
    </div>

    <div class="image">
        <img src="img/home-img.png" alt="">
    </div>
</section>

<!-- home section ends -->

<!-- services section starts  -->

<section class="services" id="services">

<h1 class="heading"> our <span>services</span> </h1>

<div class="box-container">

    <div class="box">
        <span>01</span>
        <i class="fas fa-house-user"></i>
        <img src="img/house-img.jpg" alt="">
        <h3>house paintings</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
        <br>
        <h2>Price rate: Php 15,000.00</h2>
    </div>

    <div class="box">
        <span>02</span>
        <i class="fas fa-brush"></i>
        <img src="img/varnish-img.jpg" alt="">
        <h3>varnish & design</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
        <br>
        <h2>Price rate: Php 10,000.00</h2>
    </div>

    <div class="box">
        <span>03</span>
        <i class="fas fa-car"></i>
        <img src="img/car-img.jpg" alt="">
        <h3>car/auto Paintings</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
        <br>
        <h2>Price rate: Php 13,000.00</h2>
    </div>

   <!--  <div class="box">
        <span>04</span>
        <i class="fas fa-bullhorn"></i>
        <h3>seo marketing</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
    </div>

    <div class="box">
        <span>05</span>
        <i class="fas fa-envelope"></i>
        <h3>email marketing</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
    </div>

    <div class="box">
        <span>06</span>
        <i class="fas fa-headset"></i>
        <h3>24/7 services</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
    </div> -->

</div>

</section>

<!-- services section ends -->

<!-- gallery section starts  -->

<section class="gallery" id="gallery">

    <h1 class="heading"> our <span>products</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="img/g-1.jpg" alt="">
            <div class="content">
                <h3>product 01</h3>
                <span>Php 2,000.00</span>
            </div>
        </div>

        <div class="box">
            <img src="img/g-2.jpg" alt="">
            <div class="content">
                <h3>product 02</h3>
                <span>Php 1,000.00</span>
            </div>
        </div>

        <div class="box">
            <img src="img/g-3.jpg" alt="">
            <div class="content">
                <h3>product 03</h3>
                <span>Php 1,500.00</span>
            </div>
        </div>

        <div class="box">
            <img src="img/g-4.jpg" alt="">
            <div class="content">
                <h3>product 04</h3>
                <span>Php 1,350.00</span>
            </div>
        </div>

        <div class="box">
            <img src="img/g-5.jpg" alt="">
            <div class="content">
                <h3>product 05</h3>
                <span>Php 960.00</span>
            </div>
        </div>

        <div class="box">
            <img src="img/g-6.jpg" alt="">
            <div class="content">
                <h3>product 06</h3>
                <span>Php 3,000.00</span>
            </div>
        </div>

    </div>

</section>


<section class="paint" id="paint">
     <h1 class="heading"> our <span>paint colors</span> </h1>
<form>
<div class="box-container">
    <div class="box">
        <div class="colors-palette">
            <div class="colors">
                <div class="color" id="1" style="background: #FF6600;"><label>1</label></div>
                <div class="color" id="2" style="background: #2980b9;"><label>2</label></div>
                <div class="color" id="3" style="background: #27ae60;"><label>3</label></div>
                <div class="color" id="4" style="background: #e74c3c;"><label>4</label></div>
                <div class="color" id="5" style="background: #8e44ad;"><label>5</label></div>
                <div class="color" id="6" style="background: #B33771;"><label>6</label></div>
                <div class="color" id="7" style="background: #0fb9b1;"><label>7</label></div>
                <div class="color" id="8" style="background: #ff9f1a;"><label>8</label></div>
                <div class="color" id="9" style="background: #e84393;"><label>9</label></div>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="colors-palette">
            <div class="colors">
                <div class="color" data-color="1p" id="color_1"><label>1</label></div>
                <div class="color" data-color="2p" id="color_2"><label>2</label></div>
            <select id="1stpick">
                <option value="">none</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="ghostwhite">white</option>
                <option value="black">black</option>
            </select>

            <select id="2ndpick">
                <option value="">none</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="ghostwhite">white</option>
                <option value="black">black</option>
            </select>

                <button type="reset" id="color_reset"class="btn">Reset</button>
                <input type="text" id="color_hexcode" hidden style="background: #eee;">
                <input type="text" id="color_result" style="background: #eee;">
                <input type="text" id="color_price" style="background: #eee;">
                <div class="color" data-color="3p" id="color_3"><label>3</label></div>
                <button type="button" class="btn " id="copyColor"><i class="material-icons">copy_all</i></button>
            </div>
        </div>
    </div>
</div>
</form>
</section>


<section class="about" id="about">

    <h1 class="heading"> about <span>els pintor</span> </h1>

    <div class="column">

        <div class="image">
            <img src="img/about-img.png" alt="">
        </div>

        <div class="content">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat deserunt saepe repudiandae veniam soluta minima dolor hic aperiam iure.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quaerat. Dolorem ratione saepe magni quo inventore porro ab voluptates eos, nam eius provident accusantium, quia similique est, repellendus et reiciendis.</p>
        </div>

    </div>

</section>

<!-- about section ends -->

<!-- footer section starts  -->

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>Contact Info</h3>
            <!-- <a href="#home"> <i class="fas fa-chevron-right"></i> home </a>
            <a href="#services"> <i class="fas fa-chevron-right"></i> services </a>
            <a href="#gallery"> <i class="fas fa-chevron-right"></i> products </a>
            <a href="#paint-color"> <i class="fas fa-chevron-right"></i> paint color </a>
            <a href="#pricing"> <i class="fas fa-chevron-right"></i> pricing </a>
            <a href="#review"> <i class="fas fa-chevron-right"></i> review </a>
            <a href="#contact"> <i class="fas fa-chevron-right"></i> contact </a> -->
             <a href="#"> <i class="fas fa-phone"></i> +0947-897-0835 </a>
            <a href="#"> <i class="fas fa-phone"></i> +0906-944-5124 </a>
            <a href="#"> <i class="fas fa-envelope"></i> pawercapstone@gmail.com </a>
            <a href="#"> <i class="fas fa-map-marker-alt"></i> San Isidro, Tagbilaran City, bohol - 6300 </a>
            
        </div>

        <div class="box">
            <h3>Our Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.33478911981!2d123.87814656873488!3d9.673889838658607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4c02c7e8bcf7%3A0xcf31ffb8b8911634!2sSan%20Isidro%2C%20Tagbilaran%20City%2C%20Bohol!5e0!3m2!1sen!2sph!4v1628495001520!5m2!1sen!2sph" width="98%" height="398px" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>

 <div class="box">
     <h3>Contact Us</h3>

    <section class="contact" id="contact">
    <!-- 
        <h1 class="heading"> <span>contact</span> us </h1> -->
       

        <form name="form">
            <div class="inputBox">
                <input type="text" placeholder="First Name" id="cfname">
                <input type="text" placeholder="Last Name" id="clname">
            </div>
            <div class="inputBox">
                <input type="email" placeholder="Email" id="cemail" name="cemail">
                <input type="number" placeholder="Number" id="cnumber">
            </div>
            <textarea name="" placeholder="Inquiry here and input color number or code for chosen colors." id="cinq" cols="30" rows="10" required></textarea>
            <input type="button" value="Send Inquiry" class="btn" id="csubmit">
            <input type="reset" value="Reset" class="btn">
        </form>

    </section>
</div>
   
    </div>

    <div class="credit"> &copy; copyright @ 2021 by <span>Pawer Capstone</span> </div>

</section>

<!-- footer section ends -->







</div>
<?php 

?>
</body>
</html>