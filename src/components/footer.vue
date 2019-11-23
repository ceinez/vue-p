<template>
  <footer class="footer_area clearfix">
            <div class="footer_left">
                <div class="footer-logo ">
                    <a href="index.html"><img src="../assets/img/core-img/logo2.png" alt=""></a>
                </div>
                <p class="copywrite">
                    Copyright &copy;2020 All rights reserved <br>This template is made with teacher for student
                </p>
            </div>
            <div class="footer_menu">
                <nav class="navbar navbar-expand-lg justify-content-end">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="footerNavContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Checkout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer_area {
    position: relative;
    z-index: 1;
    background-color: #252525;
    width: 100%;
    height: 300px;
}
.footer_area .footer_left {
    width: 33%;
    margin-top: 130px;
    padding-left: 50px;
    display: inline-block;
}
.footer_area .footer_left .copywrite {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 10px; 
}
.footer_area .footer_left .copywrite a {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4); 
}
.footer_area .footer_left .copywrite a:hover {
        color: #fff; 
}
.footer_area .footer_menu {
    z-index: 1;
    margin-top: 80px;
    padding-left: 120px;
    display: inline-block;  
}
    .footer_area .footer_menu .navbar .nav-item{
      padding: 0; 
        display:inline-block;
      }
    .footer_area .footer_menu .navbar-nav .nav-item .nav-link {
        padding: 10px 30px;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px; 
      }
    
      .footer_area  .footer_menu .navbar-nav .nav-item .nav-link:hover, .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item .nav-link:focus {
        color: #fbb710; }
    .footer_area  .footer_menu .navbar-nav .nav-item.active .nav-link {
      color: #fbb710; }
    .footer_area  .footer_menu .navbar-nav .nav-item:last-child .nav-link {
      padding-right: 0; }
</style>