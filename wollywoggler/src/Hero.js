//hero react component for streamer links
import React from 'react';
import './Hero.css';

function Hero() {
    {/* Hero component */}
    return (
        <div className="hero">
            <h1>Wolly Woggler</h1>
            <p>Links for discord, social, streaming, and other platforms</p>
            <div className="hero-links">
                <a href="https://www.twitch.tv/wollywoggler" target="_blank" rel="noopener noreferrer">Twitch</a>
                <a href="https://www.youtube.com/channel/UC0ZQZ1X1Z1Z1Z1Z1Z1Z1Z1A" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://www.twitter.com/wollywoggler" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/wollywoggler" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/wollywoggler" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.discord.gg/wollywoggler" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
        </div>
    );
}

export default Hero;
