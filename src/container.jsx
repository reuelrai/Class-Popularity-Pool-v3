import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Replace with your actual Supabase credentials
const SUPABASE_URL = "https://tzlmoubkdqjmcmrhgrru.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function Container() {
    const [username, setUsername] = useState("");
    const [vote, setVote] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submits

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || vote === "Choose" || !message) {
            alert("Please fill out all fields.");
            return;
        }

        const { data, error } = await supabase.from("Votes").insert([
            { username, vote, message }
        ]);

        if (error) {
            console.error("Error inserting data:", error);
            alert("Failed to submit. Try again.");
        } else {
            alert("Vote submitted successfully!");
            setUsername("");
            setVote("Choose");
            setMessage("");
        }
    };

    return (
        <div className="container">
            <h1>Class Popularity Pool v3</h1>
            <form className="inside-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name (or nickname for privacy)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <select
                    className="select-box"
                    value={vote}
                    onChange={(e) => setVote(e.target.value)}
                    required
                >
                    <option value="Choose">Choose</option>
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
                <textarea
                    placeholder="Leave a message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Container;
