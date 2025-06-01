import { useState } from "react";
import axios from "axios";

function AddPost({ onPostAdded }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, content, author };

        axios.post("http://localhost:5000/posts", newPost)
            .then((res) => {
                alert("Yazı başarıyla eklendi!");
                setTitle("");
                setContent("");
                setAuthor("");
                if (onPostAdded) onPostAdded(); // Listeyi güncelle
            })
            .catch((err) => {
                console.error("Ekleme hatası:", err);
            });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
            <h2>Yeni Yazı Ekle</h2>
            <div>
                <label>Başlık:</label><br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>İçerik:</label><br />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <div>
                <label>Yazar:</label><br />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <button type="submit">Yazıyı Ekle</button>
        </form>
    );
}

export default AddPost;
