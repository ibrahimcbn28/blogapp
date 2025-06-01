import { useEffect, useState } from "react";
import axios from "axios";

function Posts({ reloadTrigger }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then(res => setPosts(res.data))
            .catch(err => console.log("Hata:", err));
    }, [reloadTrigger]);

    // 🧹 Silme fonksiyonu
    const handleDelete = (id) => {
        if (window.confirm("Bu yazıyı silmek istediğinize emin misiniz?")) {
            axios.delete(`http://localhost:5000/posts/${id}`)
                .then(() => {
                    setPosts(prev => prev.filter(post => post.id !== id));
                })
                .catch(err => console.log("Silme hatası:", err));
        }
    };

    return (
        <div>
            <h2>Blog Yazıları</h2>
            {posts.map(post => (
                <div key={post.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <small>Yazar: {post.author}</small>
                    <br />
                    <button
                        onClick={() => handleDelete(post.id)}
                        style={{ marginTop: "0.5rem", color: "white", backgroundColor: "red", border: "none", padding: "0.5rem", cursor: "pointer" }}
                    >
                        Sil
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Posts;
