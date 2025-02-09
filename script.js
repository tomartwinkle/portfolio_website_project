
* {
    background-color: #F2ECE4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.reveal {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

.reveal img {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal img.show {
    opacity: 1;
    transform: translateY(0);
}

h2 {
    font-size: 36px;
    font-weight: 700;
    font-family: 'Nunito', serif;
    margin-bottom: 0;
    color: #5A4A42;
}

.card2, .card3 {
    margin: 300px 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.one {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.card2 .education-text, .card3 {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Nunito', serif;
}

.card2 .education-images, .card3 {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.card2 img {
    width: 250px;
    height: 250px;
    box-shadow: 0px 10px 30px rgba(165, 125, 90, 0.5);
    border-radius: 15px;
    opacity: 0.95;
}

.card2 img:nth-child(1), .card3 img:nth-child(1) {
    z-index: 1;
}
.card2 img:nth-child(2), .card3 img:nth-child(2) {
    z-index: 2;
}
.card2 img:nth-child(3), .card3 img:nth-child(3) {
    z-index: 3;
}

.about {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: 30px;
}

.inspiration, .aim, .tech-stack {
    width: 400px;
    height: 500px;
}

.home {
    display: flex;
    flex-direction: row;
}

.side_header {
    margin: 20px;
    width: 160px;
    height: 100%;
    border-right: 2px solid rgb(0, 0, 0);
}

ul {
    display: flex;
    font-size: 20px;
    list-style: none;
    flex-direction: column;
    margin: 180px 10px;
    gap: 40px;
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}

.card1 {
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    display: flex;
    margin: 100px 20px;
    gap: 20px;
    align-items: center;
}

.text1 {
    display: flex;
    flex-direction: column;
    margin: 50px;
    gap: 15px;
    width: 650px;
}

.headline p {
    font-size: 35px;
    font-weight: 500;
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.card1 img {
    width: 380px;
    height: 450px;
    box-shadow: 0px 10px 30px rgba(165, 125, 90, 0.5);
    border-radius: 8px;
    opacity: 0.95;
    margin-left: 40px;
    border-radius: 15px;
}

.t {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.website {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F2ECE4;
}

.slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    perspective: 1200px;
}

.carousel {
    position: relative;
    width: 500px;
    height: 300px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-out;
}

.carousel-item {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s;
}

.carousel-item:nth-child(1) { transform: rotateY(0deg) translateZ(450px); }
.carousel-item:nth-child(2) { transform: rotateY(72deg) translateZ(450px); }
.carousel-item:nth-child(3) { transform: rotateY(144deg) translateZ(450px); }
.carousel-item:nth-child(4) { transform: rotateY(216deg) translateZ(450px); }
.carousel-item:nth-child(5) { transform: rotateY(288deg) translateZ(450px); }

.heading1 {
    font-weight: 600;
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-style: normal;
    text-align: center;
    font-size: 100px;
    color: #C4A484;
    margin-bottom: 300px;
 
}

.contact-container {

    width: 50%;
    margin: 50px auto;
    text-align: center;
    font-family: "Nunito", serif;
    background-color: #F2ECE4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 10px 30px rgba(165, 125, 90, 0.5);
}

h2 {
    font-size: 32px;
    color: #5A4A42;

}

p {
    font-size: 18px;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

label {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #5A4A42;
    border-radius: 5px;
    font-size: 16px;
    font-family: "Nunito", serif;
}

button {
    background-color: #5A4A42;
    color: white;
    border: none;
    padding: 12px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
}

button:hover {
    background-color: #4a3c34;
}

#form-message {
    margin-top: 15px;
    font-size: 16px;
}
.page3{
    margin-top: 350px;
}

footer{
    margin-top: 250px;
    padding: 40px 20px;
    text-align: center;
    font-family: 'Nunito', serif;
    box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.2);
}

footer h3 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #3d332e;
}

footer p {
    font-size: 16px;
    margin-bottom: 30px;
}

footer .social-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
}

footer .social-links a {
    font-size: 24px;
    color: #55524e;
    text-decoration: none;
    transition: color 0.3s ease;
}

footer .social-links a:hover {
    color: #9c856d; 
}

footer .footer-info {
    font-size: 14px;
    color: #c9a077;
    margin-top: 20px;
}
.ty h1{
    margin-top: 300px;
    text-align: center;
    padding: 100px 100px;
    width: 100%;
    border: 2px solid #5A4A42;
    border-radius: 10px;
    font-size: 35px;
    font-family: "Nunito", serif;
}

#page4 h1 {
    font-size: 32px;
    font-weight: bold;
    background-color: #F2ECE4; 
    transition: color 0.3s ease, box-shadow 0.3s ease;
}


#page4 h1:hover,
#page4 h1:focus {

    opacity: 0.6;
    box-shadow: 0px 0px 10px rgba(137, 119, 102, 0.7);
    outline: none; 
}
