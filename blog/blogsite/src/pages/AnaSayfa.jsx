import React from "react";
import { Link } from "react-router-dom";

function AnaSayfa() {
    const featuredPosts = [
        {
            id: 1,
            title: "React ile Proje Geliştirme",
            excerpt: "React dünyasına giriş ve temel ipuçları. Fonksiyonel bileşenler, hook'lar ve daha fazlası...",
        },
        {
            id: 2,
            title: "Tailwind CSS ile Şık Tasarımlar",
            excerpt: "Karmaşık CSS yazmadan güzel arayüzler oluşturun. Sade ve güçlü bir araç!",
        },
        {
            id: 3,
            title: "Yazılımcı Olmak: Nereden Başlamalı?",
            excerpt: "Sıfırdan yazılıma başlamak isteyenler için rehber. Yol haritanız burada!",
        },
    ];

    const containerStyle = {
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        textAlign: "center",
        background: "linear-gradient(to bottom, #fdfcfb, #e2d1c3)",
        minHeight: "100vh",
    };

    const postCardStyle = {
        background: "#fff",
        padding: "1rem",
        margin: "1rem auto",
        maxWidth: "600px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    };

    const linkStyle = {
        color: "#007BFF",
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        marginTop: "0.5rem",
    };

    return (
        <div style={containerStyle}>
            <h1>Bloguma Hoş Geldiniz!</h1>
            <p>Yazılım dünyasından gelişmeler, kişisel projelerim ve deneyimlerimi burada paylaşıyorum.</p>

            <h2 style={{ marginTop: "3rem" }}>Öne Çıkan Yazılar</h2>
            {featuredPosts.map((post) => (
                <div key={post.id} style={postCardStyle}>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/yazilar`} style={linkStyle}>Devamını Oku →</Link>
                </div>
            ))}
        </div>
    );
}

export default AnaSayfa;
