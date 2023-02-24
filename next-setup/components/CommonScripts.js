// This will be used in all the pages except pages\blog.js

// This is list of all the scripts that are used in the template

// <Script src="" strategy="worker" strategy="worker" /> - format for loading scripts in worker
export default function CommonScripts() {
    return <>
    <script src="assets/js/jquery-1.12.4.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/slick.min.js"></script>   
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <script src="assets/js/imagesloaded.pkgd.min.js"></script>
    <script src="assets/js/jquery.inview.min.js"></script>
    <script src="assets/js/jquery.easypiechart.min.js"></script>
    <script src="assets/js/jquery.syotimer.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/main.js"></script>
    </>
}