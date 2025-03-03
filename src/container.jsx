function Container() {
    return (
        <div className="container">
            <h1>Class Popularity Pool v3</h1>
            <div className="inside-container">
                <input type="text" placeholder=" Enter Name: Use nickname for privacy" />
                <select className="select-box" name="username" id="username" required>
                    <option value="Choose" selected>Choose</option>
                    <option value="Aayush Giri">Aayush Giri</option>
                    <option value="Aayusha Shresthacharya Baniya">Aayusha Shresthacharya Baniya</option>
                    <option value="Asmita Silwal">Asmita Silwal</option>
                    <option value="Avishek Sigdel">Avishek Sigdel</option>
                    <option value="Bhumi Pradhan">Bhumi Pradhan</option>
                    <option value="Bigyan Sapkota">Bigyan Sapkota</option>
                    <option value="Bipin Dawadi">Bipin Dawadi</option>
                    <option value="Jenisha Shrestha">Jenisha Shrestha</option>
                    <option value="Mandip Shrestha">Mandip Shrestha</option>
                    <option value="Muskan Rajbanshi">Muskan Rajbanshi</option>
                    <option value="Nikita Chaudary">Nikita Chaudary</option>
                    <option value="Rakshya Shrestha">Rakshya Shrestha</option>
                    <option value="Rijan Riajl">Rijan Riajl</option>
                    <option value="Ritesh Chaudary">Ritesh Chaudary</option>
                    <option value="Reuel Rai">Reuel Rai</option>
                    <option value="Sakshyam Maharjan">Sakshyam Maharjan</option>
                    <option value="Samyog Sapkota">Samyog Sapkota</option>
                    <option value="Sandeep Lamichhane">Sandeep Lamichhane</option>
                    <option value="Shristi Budha Magar">Shristi Budha Magar</option>
                    <option value="Smaran Bajracharya">Smaran Bajracharya</option>
                    <option value="Srestaa Shrestha">Srestaa Shrestha</option>
                    <option value="Sudip Bhandari">Sudip Bhandari</option>
                    <option value="Umanga Magar">Umanga Magar</option>
                </select>
                <textarea name="textArea" id="textArea" placeholder="Leave a message here"></textarea>
                <button>Submit</button>
            </div>

        </div>

    );
}

export default Container;